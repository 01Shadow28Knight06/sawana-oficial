import { useState } from 'react';
import { ArrowRight, User, Mail, Phone } from 'lucide-react';

interface StepOneProps {
  formData: { name: string; email: string; phone: string };
  updateData: (data: Partial<{ name: string; email: string; phone: string }>) => void;
  onNext: () => void;
}

export function StepOne({ formData, updateData, onNext }: StepOneProps) {
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Por favor, completa todos los campos para continuar.');
      return;
    }
    // Validación básica de teléfono mexicano (10 dígitos)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Ingresa un número de WhatsApp válido a 10 dígitos (México).');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Comencemos por conocerte</h2>
        <p className="text-sm text-zinc-400 mt-1">Configura tu acceso inicial a la plataforma SAWANA.</p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
          {error}
        </div>
      )}

      {/* Nombre */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Nombre completo</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-500 pointer-events-none">
            <User className="w-4 h-4" />
          </span>
          <input
            type="text"
            required
            placeholder="Ej. Sofía Martínez"
            value={formData.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Correo Electrónico */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Correo Electrónico (Corporativo)</label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-500 pointer-events-none">
            <Mail className="w-4 h-4" />
          </span>
          <input
            type="email"
            required
            placeholder="sofia@tudominio.mx"
            value={formData.email}
            onChange={(e) => updateData({ email: e.target.value })}
            className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* WhatsApp de Contacto */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">WhatsApp de Contacto</label>
        <div className="relative flex items-center">
          <span className="absolute left-0 pl-4 flex items-center gap-1.5 text-zinc-400 text-sm font-medium border-r border-white/10 pr-3 pointer-events-none">
            🇲🇽 +52
          </span>
          <input
            type="tel"
            required
            placeholder="55 1234 5678"
            value={formData.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 pl-24 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-4 py-3.5 px-6 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
      >
        Siguiente paso
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}