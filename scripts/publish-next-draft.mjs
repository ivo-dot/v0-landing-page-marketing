// Runs every Monday via .github/workflows/weekly-blog-publish.yml.
// Takes the next unpublished draft from drafts-blog/manifest.json, generates the
// real app/blog/<slug>/page.tsx, registers it in components/blog-posts.ts, and
// marks it published in the manifest. The workflow then opens a PR with the diff
// so Ivo reviews before it goes live (Vercel auto-deploys on merge to main).
import fs from "node:fs"
import path from "node:path"

const ROOT = process.cwd()
const DRAFTS_DIR = path.join(ROOT, "drafts-blog")
const MANIFEST_PATH = path.join(DRAFTS_DIR, "manifest.json")
const BLOG_POSTS_TS = path.join(ROOT, "components", "blog-posts.ts")
const BLOG_DIR = path.join(ROOT, "app", "blog")

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
]

function todayInfo() {
  const now = new Date()
  const iso = now.toISOString().slice(0, 10) // YYYY-MM-DD
  const dateLabel = `${now.getDate()} de ${MESES[now.getMonth()]}, ${now.getFullYear()}`
  return { iso, dateLabel }
}

function esc(str) {
  // Escape for safe embedding inside a JS template literal / string in the generated file.
  return String(str).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")
}

function jsonLdScript(varName, expr) {
  return `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${expr}) }} />`
}

function main() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"))
  const next = manifest.queue.find((q) => !q.published)
  if (!next) {
    console.log("No unpublished drafts left in manifest.json — nothing to do.")
    const outFile = process.env.GITHUB_OUTPUT
    if (outFile) fs.appendFileSync(outFile, "has_draft=false\n", "utf8")
    return
  }

  const draftPath = path.join(DRAFTS_DIR, `${next.slug}.json`)
  const post = JSON.parse(fs.readFileSync(draftPath, "utf8"))
  const { iso, dateLabel } = todayInfo()

  // --- 1. Generate app/blog/<slug>/page.tsx ---
  const faqsLiteral = JSON.stringify(post.faqs, null, 2)
  const pageTsx = `import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("${post.slug}")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede = \`${esc(post.lede)}\`

const faqs = ${faqsLiteral}

export const metadata: Metadata = {
  title: "${esc(post.metaTitle)}",
  description: "${esc(post.metaDescription)}",
  alternates: { canonical: URL },
}

export default function Page() {
  return (
    <>
      ${jsonLdScript("a", "articleJsonLd(post, lede)")}
      ${jsonLdScript("b", "articleBreadcrumb(post)")}
      ${jsonLdScript("c", "faqJsonLd(faqs)")}
      <ArticlePage post={post} lede={lede} faqs={faqs} related={otherPosts(post.slug).slice(0, 3)}>
        <div className="keytakeaway">
          <b>Respuesta corta</b>
          <p dangerouslySetInnerHTML={{ __html: \`${esc(post.keyTakeaway)}\` }} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: \`${esc(post.bodyHtml)}\` }} />
      </ArticlePage>
    </>
  )
}
`

  const postDir = path.join(BLOG_DIR, post.slug)
  fs.mkdirSync(postDir, { recursive: true })
  fs.writeFileSync(path.join(postDir, "page.tsx"), pageTsx, "utf8")

  // --- 2. Prepend entry to components/blog-posts.ts ---
  const blogPostsSrc = fs.readFileSync(BLOG_POSTS_TS, "utf8")
  const entry = `  {
    slug: "${post.slug}",
    title: "${esc(post.title)}",
    excerpt:
      "${esc(post.excerpt)}",
    date: "${iso}",
    dateLabel: "${dateLabel}",
    reading: "${post.reading}",
    tag: "${esc(post.tag)}",
  },
`
  const marker = "export const POSTS: PostMeta[] = ["
  if (!blogPostsSrc.includes(marker)) {
    throw new Error("Could not find POSTS array marker in components/blog-posts.ts")
  }
  const updatedBlogPosts = blogPostsSrc.replace(marker, marker + "\n" + entry)
  fs.writeFileSync(BLOG_POSTS_TS, updatedBlogPosts, "utf8")

  // --- 3. Mark manifest entry as published ---
  next.published = true
  next.publishedDate = iso
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n", "utf8")

  console.log(`Published draft: ${post.slug} (${dateLabel})`)

  // Emit outputs for the workflow to use in the PR title/body (modern GITHUB_OUTPUT file).
  const outFile = process.env.GITHUB_OUTPUT
  if (outFile) {
    fs.appendFileSync(outFile, `slug=${post.slug}\ntitle=${post.title}\nhas_draft=true\n`, "utf8")
  }
}

main()
