import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold text-white">Didakto</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-white/80 hover:text-emerald-400 transition-colors">
            Servicios
          </a>
          <a href="#casos" className="text-white/80 hover:text-emerald-400 transition-colors">
            Casos de Éxito
          </a>
          <a href="#contacto" className="text-white/80 hover:text-emerald-400 transition-colors">
            Contacto
          </a>
        </nav>

        <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
          <a href="#contacto">Consulta Gratuita</a>
        </Button>
      </div>
    </header>
  )
}
