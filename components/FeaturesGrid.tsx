import { Zap, ShieldCheck, BarChart3, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Configuración en 3 minutos",
    description: "Conecta tu cuenta de Facebook Business Manager y tu número de teléfono de forma guiada y sin enredos técnicos."
  },
  {
    icon: ShieldCheck,
    title: "Cero Baneos Garantizados",
    description: "Al operar bajo las reglas directas de la API de Meta, tu reputación comercial y tu número están totalmente protegidos."
  },
  {
    icon: BarChart3,
    title: "Analíticas en Tiempo Real",
    description: "Mide tasas de entrega, porcentajes de apertura, clics y respuestas de tus clientes al instante."
  },
  {
    icon: Headphones,
    title: "Soporte Local en México",
    description: "Atención humana, rápida y en tu mismo huso horario vía WhatsApp por expertos que sí entienden tu negocio."
  }
];

export function FeaturesGrid() {
  return (
    <section id="beneficios" className="py-24 bg-zinc-950/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Diseñado para escalar, creado para simplificar
          </h2>
          <p className="text-zinc-400">
            Todo lo que necesitas para convertir WhatsApp en tu máquina de ventas automatizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="glass-panel p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}