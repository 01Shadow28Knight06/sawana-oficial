'use client';

import { useState } from 'react';
import { ShieldCheck, Key, CreditCard, Building, Check } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'meta' | 'billing'>('meta');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Configuración del Sistema</h1>
        <p className="text-sm text-zinc-400 mt-1">Gestiona los parámetros de tu cuenta, credenciales de Meta y métodos de pago.</p>
      </div>

      {/* Pestañas de Navegación Interna */}
      <div className="flex border-b border-white/10 gap-8">
        {[
          { id: 'general', label: 'General' },
          { id: 'meta', label: 'Integración API de Meta' },
          { id: 'billing', label: 'Facturación' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as unknown as 'general' | 'meta' | 'billing')}
            className={`pb-4 text-sm font-semibold transition-colors relative ${
              activeTab === tab.id ? 'text-emerald-400' : 'text-zinc-400 hover:text-white'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {saved && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
          <Check className="w-4 h-4" /> Cambios guardados correctamente en los servidores de SAWANA.
        </div>
      )}

      {/* Contenido Pestaña General */}
      {activeTab === 'general' && (
        <form onSubmit={handleSave} className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Building className="w-5 h-5 text-emerald-400" /> Información de la Empresa
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Nombre Comercial</label>
              <input type="text" defaultValue="Distribuidora Monterrey SA de CV" className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 px-4 text-xs text-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">RFC de Facturación</label>
              <input type="text" defaultValue="DME921004H89" className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 px-4 text-xs text-white uppercase" />
            </div>
          </div>
          <button type="submit" className="px-6 py-3 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-xs hover:bg-emerald-300">Guardar Cambios</button>
        </form>
      )}

      {/* Contenido Pestaña API de Meta */}
      {activeTab === 'meta' && (
        <form onSubmit={handleSave} className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border-emerald-500/30 glow-emerald">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> Credenciales Oficiales WhatsApp Business API
            </h3>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold">Estado: Conectado</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Estas credenciales garantizan que tus envíos masivos pasen por los servidores oficiales de Meta, protegiendo tu número ante baneos.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">WhatsApp Business Account ID (WABA ID)</label>
              <input type="text" defaultValue="104928394829102" className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 px-4 text-xs font-mono text-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase mb-2">Access Token Permanente (Meta Cloud API)</label>
              <div className="relative">
                <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500">
                  <Key className="w-4 h-4" />
                </span>
                <input type="password" defaultValue="EAAQZA892nd091j3nd90123u90jnd..." className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-xs font-mono text-white" />
              </div>
            </div>
          </div>
          <button type="submit" className="px-6 py-3 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-xs hover:bg-emerald-300">Actualizar Credenciales</button>
        </form>
      )}

      {/* Contenido Pestaña Facturación */}
      {activeTab === 'billing' && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-emerald-400" /> Plan y Métodos de Pago
          </h3>
          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-white">Plan PyME Crecimiento (México)</p>
              <p className="text-xs text-zinc-400 mt-0.5">Mensajes masivos ilimitados vía API Oficial • Renovación el 12 Jul</p>
            </div>
            <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">Activo</span>
          </div>
          <div className="pt-2">
            <button type="button" onClick={() => alert("Redirigiendo al portal seguro de gestión de tarjetas...")} className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs border border-white/10">
              Gestionar Tarjeta de Crédito
            </button>
          </div>
        </div>
      )}

    </div>
  );
}