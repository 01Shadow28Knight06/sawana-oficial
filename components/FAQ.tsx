'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "¿Necesito conocimientos técnicos avanzados?",
    a: "Para nada. Diseñamos SAWANA para que cualquier empresario, gerente de ventas o emprendedor pueda configurarlo sin tocar una sola línea de código."
  },
  {
    q: "¿Qué pasa si ya me banearon el número antes?",
    a: "Si tu número anterior fue bloqueado permanentemente por WhatsApp Web, necesitaremos registrar uno nuevo mediante la API oficial de Meta para empezar limpios y seguros."
  },
  {
    q: "¿Realmente es 100% seguro contra baneos?",
    a: "Sí. SAWANA utiliza exclusivamente la Cloud API oficial provista por Meta (Facebook). Al seguir sus lineamientos y usar plantillas aprobadas, el riesgo de baneo es cero."
  },
  {
    q: "¿Puedo conectar a varios vendedores a un solo número?",
    a: "¡Así es! Todo tu equipo de atención y ventas podrá atender chats simultáneamente desde una bandeja centralizada."
  }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-950/40 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-zinc-400">
            Resolvemos tus dudas de forma transparente antes de empezar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="glass-panel rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-white focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}