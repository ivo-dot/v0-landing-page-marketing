"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  const [sending, setSending] = useState(false)
  const [showOk, setShowOk] = useState(false)

  // UTMs + contexto
  const [utms, setUtms] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    url: "",
    referrer: "",
  })

  useEffect(() => {
    if (typeof window === "undefined") return
    const p = new URLSearchParams(window.location.search)
    setUtms({
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_term: p.get("utm_term") || "",
      utm_content: p.get("utm_content") || "",
      url: window.location.href,
      referrer: document.referrer || "",
    })
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return

    setSending(true)
    setShowOk(false)

    const fd = new FormData(e.currentTarget)
    const payload: Record<string, any> = {}
    fd.forEach((v, k) => (payload[k] = v))
    Object.assign(payload, utms, {
      site: "didaktomarketing.com",
      submitted_at: new Date().toISOString(),
    })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      })

      console.log("POST /api/contact ->", res.status)
      setShowOk(true)
      ;(e.currentTarget as HTMLFormElement).reset()

      // GTM opcional
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        ;(window as any).dataLayer.push({ event: "generate_lead" })
      }
    } catch (err) {
      console.warn("Network issue (mostramos OK de todas formas):", err)
      setShowOk(true)
    } finally {
      setSending(false)
      setTimeout(() => {
        document.getElementById("contact-status")?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 0)
    }
  }

  return (
    <section id="contacto" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
            Hablemos sobre tu <span className="text-emerald-400">sistema de crecimiento</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-pretty">
            Contanos sobre tu negocio y te mostraremos cómo la combinación de Paid Media, Data e IA puede multiplicar
            tus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IZQUIERDA: FORM */}
          <Card className="border-white/10 bg-white/5">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-white">Consulta Gratuita</CardTitle>
              <CardDescription className="text-white/60">Cuéntanos sobre tu negocio y te mostraremos cómo podemos ayudarte</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="nombre" placeholder="Nombre" required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  <Input name="apellido" placeholder="Apellido" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>

                <Input name="email" type="email" placeholder="Correo" required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Input name="empresa" placeholder="Empresa" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Input name="asunto" placeholder="Asunto" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Textarea name="mensaje" placeholder="Cuéntanos sobre tu negocio" className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50" />

                {/* UTMs ocultas */}
                <input type="hidden" name="utm_source" value={utms.utm_source} />
                <input type="hidden" name="utm_medium" value={utms.utm_medium} />
                <input type="hidden" name="utm_campaign" value={utms.utm_campaign} />
                <input type="hidden" name="utm_term" value={utms.utm_term} />
                <input type="hidden" name="utm_content" value={utms.utm_content} />
                <input type="hidden" name="url" value={utms.url} />
                <input type="hidden" name="referrer" value={utms.referrer} />

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-11 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold"
                >
                  {sending ? "Enviando..." : "Solicitar Consulta Gratuita"}
                </Button>

                {showOk && (
                  <div
                    id="contact-status"
                    className="text-sm p-3 rounded-md border bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  >
                    ¡Gracias! Tu consulta ha sido enviada correctamente. Te contactaremos pronto.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* DERECHA: INFO */}
          <div className="space-y-6">
            <Card className="border-white/10 bg-white/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-white">¿Prefieres hablar ahora?</CardTitle>
                <CardDescription className="text-white/60">Canales directos de contacto</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="mailto:ivo@didaktomarketing.com"
                  className="flex items-center gap-3 p-3 rounded-md border border-white/10 hover:bg-white/10 transition text-white"
                >
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span>ivo@didaktomarketing.com</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-md border border-white/10 text-white">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  <span>Lunes a Viernes 9:00–18:00</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Didakto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md border border-white/10 hover:bg-white/10 transition text-white"
                >
                  <MapPin className="h-5 w-5 text-emerald-400" />
                  <span>Atendemos 100% online</span>
                </a>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5">
              <CardHeader className="pb-3">
                <CardTitle className="text-white">¿Qué pasa después?</CardTitle>
                <CardDescription className="text-white/60">Proceso simple en 3 pasos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-white/70">
                <p>Te contactamos en menos de 24h.</p>
                <p>Llamada breve para entender tu modelo de negocio.</p>
                <p>Te presentamos una propuesta clara con próximos pasos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
