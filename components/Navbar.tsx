import Link from 'next/link';


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <span className="text-zinc-950 font-black text-lg">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            SAWANA<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* Enlaces de Navegación */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#beneficios" className="hover:text-white transition-colors">Beneficios</Link>
          <Link href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </nav>

        {/* CTA Principal */}
        <div className="flex items-center gap-4">
          <Link
  href="/onboarding"
  className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-zinc-950 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
>
  Prueba gratis sin tarjeta
</Link>
        </div>
      </div>
    </header>
  );
}