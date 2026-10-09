/** @type {import('next').NextConfig} */

// CSP pensada alrededor del stack de medición que ya usa el sitio: GTM, GA4, el
// píxel de Meta y el CAPI Param Builder. GTM inyecta scripts y evalúa plantillas,
// así que necesita 'unsafe-inline' y 'unsafe-eval': eso deja la CSP floja contra
// XSS, pero sigue cumpliendo lo importante acá, que es impedir que se cargue código
// desde un dominio que no esté en esta lista (defacement / skimmers).
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://connect.facebook.net https://capi-automation.s3.us-east-2.amazonaws.com https://*.googleadservices.com https://*.doubleclick.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  // Ojo: en CSP `*.dominio.com` NO matchea `dominio.com` pelado, y GA4 pega contra
  // `analytics.google.com` sin subdominio. Por eso van las dos formas.
  "connect-src 'self' https://google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://*.googletagmanager.com https://*.doubleclick.net https://connect.facebook.net https://facebook.com https://*.facebook.com https://*.google.com https://*.google.com.ar",
  "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://www.youtube.com https://www.youtube-nocookie.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  // includeSubDomains + preload sobre el HSTS que ya pone Vercel
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
]

const nextConfig = {
  // Estaba en true (herencia del scaffold de v0): los errores de tipo llegaban a
  // producción en silencio. Hoy el proyecto tipa limpio, así que se verifica.
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      { source: "/politica-de-privacidad", destination: "/privacy", permanent: true },
      { source: "/privacidad", destination: "/privacy", permanent: true },
    ]
  },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }]
  },
}

export default nextConfig
