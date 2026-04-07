export function CertificationsSection() {
  const certifications = [
    {
      id: "meta-media-buying",
      name: "Meta Media Buying Professional",
      image: "/meta-certified-media-buying.png",
      issuer: "Meta",
      url: "https://www.credly.com/badges/37bb50d2-e601-480a-b36c-eca1769e2d50",
    },
    {
      id: "google-partner",
      name: "Google Partner",
      image: "/google-partner-badge.png",
      issuer: "Google",
      url: "https://www.google.com/partners/agency?id=2992564471",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
            Nuestras <span className="text-emerald-400">Certificaciones</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Contamos con certificaciones oficiales que respaldan nuestra experiencia en publicidad digital
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[320px] group"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="aspect-square p-8 flex items-center justify-center">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 px-1 text-center">
                <h3 className="text-white font-semibold text-lg leading-tight">{cert.name}</h3>
                <p className="text-white/50 text-sm mt-1">Certificado por {cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
