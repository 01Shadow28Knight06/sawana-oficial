'use client';
import { CheckCircle2, FileText, Sparkles } from 'lucide-react';

const templates = [
  {
    id: 1,
    name: 'bienvenida_cliente_v1',
    category: 'MARKETING',
    language: 'Español (México)',
    status: 'Aprobada',
    content: 'Hola {{1}}, gracias por registrarte en SAWANA. Tu cuenta de prueba ya está activa. ¿Tienes alguna duda para arrancar?'
  },
  {
    id: 2,
    name: 'recordatorio_pago_quincenal',
    category: 'UTILITY',
    language: 'Español (México)',
    status: 'Aprobada',
    content: 'Estimado/a {{1}}, te recordamos que tu factura con folio {{2}} vence el día de mañana. Evita interrupciones en tu servicio.'
  },
  {
    id: 3,
    name: 'oferta_especial_verano',
    category: 'MARKETING',
    language: 'Español (México)',
    status: 'Aprobada',
    content: '¡Hola {{1}}! Tenemos una promoción exclusiva de verano para {{2}}. Responde a este mensaje para conocer los detalles.'
  }
];

export default function TemplatesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Plantillas Oficiales de Meta</h1>
          <p className="text-sm text-zinc-400 mt-1">Diseños de mensajes validados por WhatsApp para evitar reportes y bloqueos.</p>
        </div>
        <button
          onClick={() => alert("Sincronizando con el Business Manager de Meta...")}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20"
        >
          <Sparkles className="w-4 h-4" />
          Sincronizar con Meta
        </button>
      </div>

      {/* Grid de Plantillas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => (
          <div key={t.id} className="glass-panel p-6 rounded-3xl flex flex-col justify-between border-white/10 hover:border-emerald-500/30 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> {t.status}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono uppercase">{t.category}</span>
              </div>

              <h3 className="text-sm font-bold text-white font-mono mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-zinc-400" /> {t.name}
              </h3>

              {/* Vista previa simulada de WhatsApp */}
              <div className="bg-zinc-950/80 border border-white/5 rounded-2xl p-4 text-xs text-zinc-300 leading-relaxed mb-4">
                <p className="text-[10px] text-zinc-500 font-semibold uppercase mb-1">Vista previa mensaje:</p>
                {t.content}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
              <span>Idioma: {t.language}</span>
              <span className="text-emerald-400 font-semibold cursor-pointer hover:underline">Ver detalles</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}