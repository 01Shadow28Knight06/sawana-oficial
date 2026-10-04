import { useState } from 'react';
import { ArrowRight, ArrowLeft, Building2, ShoppingBag, Briefcase, Home, Utensils } from 'lucide-react';

interface StepTwoProps {
  formData: { businessName: string; industry: string };
  updateData: (data: Partial<{ businessName: string; industry: string }>) => void;
  onNext: () => void;
  onBack: () => void;
}

const industries = [
  { id: 'ecommerce', label: 'E-commerce / Retail', icon: ShoppingBag },
  { id: 'services', label: 'Servicios Profesionales', icon: Briefcase },
  { id: 'realestate', label: 'Inmobiliaria', icon: Home },
  { id: 'restaurant', label: 'Restaurante / Alimentos', icon: Utensils },
  { id: 'other', label: 'Otro tipo de PyME', icon: Building2 },
];

export function StepTwo({ formData, updateData, onNext, onBack }: StepTwoProps) {
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.industry) {
      setError('Por favor, indica el nombre de tu negocio y selecciona una industria.');
      return;
    }
    setError('');
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Cuéntanos sobre tu negocio</h2>
        <p className="text-sm text-zinc-400 mt-1">Esto nos ayudará a configurar tus plantillas iniciales.</p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
          {error}
        </div>
      )}

      {/* Nombre del Negocio */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Nombre Comercial o Empresa</label>
        <input
          type="text"
          required
          placeholder="Ej. Distribuidora Monterrey"
          value={formData.businessName}
          onChange={(e) => updateData({ businessName: e.target.value })}
          className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
        />
      </div>

      {/* Selector de Industria */}
      <div>
        <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">¿A qué sector pertenece tu PyME?</label>
        <div className="grid grid-cols-1 gap-2.5">
          {industries.map((item) => {
            const Icon = item.icon;
            const isSelected = formData.industry === item.id;
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => updateData({ industry: item.id })}
                className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                  isSelected 
                    ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-md shadow-emerald-500/10' 
                    : 'bg-zinc-950/40 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-400' : 'text-zinc-500'}`} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="py-3.5 px-5 rounded-xl bg-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-700 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Atrás
        </button>
        <button
          type="submit"
          className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
        >
          Crear cuenta gratis
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}