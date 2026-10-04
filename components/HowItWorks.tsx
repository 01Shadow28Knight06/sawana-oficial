export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Conecta tu número",
      desc: "Vincula tu cuenta comercial de Meta con SAWANA en un par de clics de forma segura."
    },
    {
      num: "02",
      title: "Importa tus contactos",
      desc: "Sube tu base de datos en formato CSV o sincronízala con tus herramientas habituales."
    },
    {
      num: "03",
      title: "Lanza tu campaña",
      desc: "Elige tu plantilla oficial, personaliza los mensajes y dispara tus ventas al instante."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Tan simple como 1, 2, 3
          </h2>
          <p className="text-zinc-400">
            Empieza a enviar campañas profesionales hoy mismo sin curvas de aprendizaje pesadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl relative">
              <span className="text-5xl font-black text-emerald-500/20 block mb-4 font-mono">{s.num}</span>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}