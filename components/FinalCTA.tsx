import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-950/20 to-zinc-950 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-16 text-center border-emerald-500/30 glow-emerald bg-linear-to-br from-zinc-900/90 to-zinc-950/90">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Lleva tus ventas por WhatsApp <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-200">al siguiente nivel hoy.</span>
          </h2>
          
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Únete a los negocios en México que ya automatizan su comunicación de forma segura, rápida y profesional.
          </p>

          <Link
            href="/onboarding"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-zinc-950 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-all shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95"
          >
            Prueba gratis sin tarjeta
            <ArrowRight className="w-4 h-4" />
          </Link>
          
        </div>
      </div>
    </section>
  );
}