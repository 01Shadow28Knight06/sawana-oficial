import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-zinc-950 text-sm">
            S
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            SAWANA<span className="text-emerald-500">.</span>
          </span>
        </div>

        {/* Links legales */}
        <div className="flex items-center gap-6 text-xs text-zinc-500">
          <Link href="/terminos" className="hover:text-zinc-300 transition-colors">Términos y Condiciones</Link>
          <Link href="/privacidad" className="hover:text-zinc-300 transition-colors">Aviso de Privacidad</Link>
          <span className="text-zinc-700">Hecho en México 🇲🇽</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} SAWANA. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}