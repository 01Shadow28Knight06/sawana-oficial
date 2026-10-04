export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-8">
          La infraestructura elegida por las PyMEs mexicanas de mayor crecimiento
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
          {/* Aquí puedes poner logotipos simulados con tipografía limpia */}
          <span className="text-lg font-bold tracking-tighter text-white">DOGO<span className="text-emerald-500">.mx</span></span>
          <span className="text-lg font-mono font-semibold tracking-widest text-white">KASHA_</span>
          <span className="text-lg font-serif italic text-white">FondaDigital</span>
          <span className="text-lg font-bold tracking-wide text-white">NORTEX<span className="text-emerald-500">.</span></span>
          <span className="text-lg font-sans font-black text-white">LANA<span className="text-emerald-500">GO</span></span>
        </div>
      </div>
    </section>
  );
}