import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge de confianza */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>API Oficial de Meta • 100% Anti-Baneos</span>
          </div>

          {/* Titular Magnético */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Vende más por WhatsApp <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-200">sin miedo a que te banéen.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-zinc-400 mb-10 leading-relaxed font-normal">
            Automatiza campañas masivas, conecta a todo tu equipo de ventas y escala tu PyME mexicana utilizando la infraestructura oficial y segura de WhatsApp Business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
  href="/onboarding"
  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-zinc-950 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
>
  Prueba gratis sin tarjeta
  <ArrowRight className="w-4 h-4" />
</Link>
            <span className="text-xs text-zinc-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Configuración en 3 minutos
            </span>
          </div>
        </div>

        {/* Mockup UI de la Plataforma (Estilo Linear) */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="glass-panel rounded-2xl p-2 glow-emerald">
            <div className="bg-zinc-950 rounded-xl overflow-hidden border border-white/5 aspect-video flex flex-col items-center justify-center relative">
              {/* Simulación visual de interfaz SaaS */}
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-950/20 via-transparent to-transparent" />
              <div className="text-center p-6 z-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">Panel de Campañas Activas</h3>
                <p className="text-zinc-400 text-sm max-w-sm">Tasa de entrega del 99.4% • 0 números bloqueados este mes</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}