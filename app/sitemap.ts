import type { MetadataRoute } from "next"
import { POSTS } from "@/components/blog-posts"

const BASE = "https://didaktomarketing.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const servicePages = [
    "/agencia-de-publicidad-digital",
    "/generacion-de-leads-b2b",
    "/google-ads",
    "/meta-ads",
    "/linkedin-ads-b2b",
  ]
  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((p) => ({ url: BASE + p, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: BASE + "/blog", lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    ...POSTS.map((p) => ({ url: `${BASE}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: BASE + "/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]
}
