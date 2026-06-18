import type { MetadataRoute } from "next"

const BASE = "https://didaktomarketing.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = [
    "/agencia-de-publicidad-digital",
    "/generacion-de-leads-b2b",
    "/google-ads",
    "/meta-ads",
    "/linkedin-ads-b2b",
  ]
  return [
    { url: BASE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...pages.map((p) => ({ url: BASE + p, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: BASE + "/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]
}
