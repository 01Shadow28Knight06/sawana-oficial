import { ShieldCheck, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';

interface StepSuccessProps {
  formData: { name: string; businessName: string };
}

export function StepSuccess({ formData }: StepSuccessProps) {
  const handleConnectMeta = () => {
    // Simulación de redirección al flujo embedded signup de Facebook / Meta Business API
    alert("Redirigiendo de forma segura a Meta para vincular tu número oficial con SAWANA...");
  };

  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
        <ShieldCheck className="w-8 h-8" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white tracking-tight">¡Todo listo, {formData.name.split(' ')[0]}!</h2>
        <p className="text-sm text-zinc-400 mt-1">
          La cuenta para <span className="text-white font-medium">{formData.businessName}</span> ha sido creada con éxito en entorno seguro.
        </p>
      </div>

      <div className="glass-panel p-5 rounded-2xl text-left space-y-3 border-emerald-500/20">
        <div className="flex items-center gap-2.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
          <CheckCircle className="w-4 h-4" /> Entorno de API Oficial Preparado
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Para comenzar a enviar campañas masivas sin riesgo de baneo, vincula tu número oficial de WhatsApp Business mediante el conector seguro de Meta.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <button
          type="button"
          onClick={handleConnectMeta}
          className="w-full py-4 px-6 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-95"
        >
          Conectar con WhatsApp de Meta
          <ExternalLink className="w-4 h-4" />
        </button>

        <a
          href="/dashboard"
          className="w-full py-3.5 px-6 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-300 font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-white/5"
        >
          Ir al panel de control principal
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}