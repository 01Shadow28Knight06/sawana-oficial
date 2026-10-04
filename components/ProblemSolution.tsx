import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export function ProblemSolution() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Dejar de jugar a la ruleta rusa con tu número principal
          </h2>
          <p className="text-zinc-400">
            Enviar ofertas masivas desde WhatsApp Web o apps piratas pone en riesgo el activo más valioso de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* El Problema (WhatsApp Web / Informal) */}
          <div className="glass-panel p-8 rounded-3xl border-red-500/20 bg-red-950/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">El método tradicional (Pelrroso)</h3>
            </div>
            
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Usar extensiones de Chrome o WhatsApp Web automatizado que Meta detecta en horas.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Bloqueos permanentes de números que ya tenías posicionados con tus clientes.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Imposibilidad de conectar a varios agentes de ventas al mismo número al mismo tiempo.</span>
              </li>
            </ul>
          </div>

          {/* La Solución (SAWANA) */}
          <div className="glass-panel p-8 rounded-3xl border-emerald-500/30 bg-emerald-950/10 glow-emerald">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">La vía inteligente con SAWANA</h3>
            </div>
            
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Conexión 100% legal mediante la <strong>API Oficial de Meta</strong>. Cero riesgos de baneo.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Campañas masivas ilimitadas aprobadas con plantillas corporativas oficiales.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Bandeja de entrada compartida: todo tu equipo respondiendo desde el mismo número verificado.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}