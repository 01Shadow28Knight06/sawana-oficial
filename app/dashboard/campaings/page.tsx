'use client';

import { useState } from 'react';
import { Send, Plus, CheckCheck, Clock, X, ArrowRight, Sparkles } from 'lucide-react';

const initialCampaigns = [
  { id: '1', name: 'Lanzamiento Hot Sale - Cdmx', date: '02 Jun 2026', status: 'Completada', recipients: '4,200', deliveryRate: '99.4%' },
  { id: '2', name: 'Recordatorio Cobranza PyMEs', date: '28 May 2026', status: 'Completada', recipients: '1,150', deliveryRate: '99.8%' },
  { id: '3', name: 'Oferta Especial Fin de Semana', date: 'Programada (Mañana)', status: 'Programada', recipients: '5,500', deliveryRate: '-' },
];

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estados del formulario del Modal (Wizard simulado)
  const [step, setStep] = useState(1);
  const [newCampName, setNewCampName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('bienvenida_v1');

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCampName) return;
    
    const newEntry = {
      id: String(Date.now()),
      name: newCampName,
      date: 'Justo ahora',
      status: 'Programada',
      recipients: '2,800',
      deliveryRate: '-'
    };
    
    setCampaigns([newEntry, ...campaigns]);
    setIsModalOpen(false);
    setStep(1);
    setNewCampName('');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      
      {/* Header de la sección */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Campañas de Mensajería</h1>
          <p className="text-sm text-zinc-400 mt-1">Lanza transmisiones masivas seguras respaldadas por la API Oficial de Meta.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Nueva Campaña de Mensajes
        </button>
      </div>

      {/* Tabla Reciente */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-base font-bold text-white">Historial de Campañas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-zinc-950/40 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Campaña</th>
                <th className="py-3.5 px-6">Fecha</th>
                <th className="py-3.5 px-6">Estado</th>
                <th className="py-3.5 px-6">Destinatarios</th>
                <th className="py-3.5 px-6 text-right">Efectividad</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {campaigns.map((camp) => {
                const isCompleted = camp.status === 'Completada';
                return (
                  <tr key={camp.id} className="hover:bg-white/2 transition-colors">
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                      {camp.name}
                    </td>
                    <td className="py-4 px-6 text-zinc-400 text-xs">{camp.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                        isCompleted ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        {isCompleted ? <CheckCheck className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {camp.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-300 text-xs font-mono">{camp.recipients}</td>
                    <td className="py-4 px-6 text-right font-mono text-xs text-white font-semibold">{camp.deliveryRate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal interactivo para Crear Campaña */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-lg rounded-3xl p-6 sm:p-8 relative border-white/15 glow-emerald bg-zinc-950">
            
            <button 
              onClick={() => { setIsModalOpen(false); setStep(1); }}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Paso {step} de 2</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-6">
              {step === 1 ? 'Configura tu Nueva Campaña' : 'Selecciona Plantilla Oficial de Meta'}
            </h3>

            <form onSubmit={step === 1 ? (e) => { e.preventDefault(); if(newCampName) setStep(2); } : handleCreateCampaign}>
              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Nombre de la Campaña</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Promoción Quincenal Monterrey"
                      value={newCampName}
                      onChange={(e) => setNewCampName(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 px-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Segmento de Destinatarios</label>
                    <select className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-emerald-500">
                      <option>Todos los contactos activos (2,800)</option>
                      <option>Clientes frecuentes CDMX (1,200)</option>
                      <option>Leads sin cotización previa (850)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 py-3.5 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 transition-all flex items-center justify-center gap-2"
                  >
                    Siguiente: Elegir Plantilla
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">Plantilla Aprobada por Meta</label>
                    <div className="space-y-2">
                      {[
                        { id: 'bienvenida_v1', name: 'bienvenida_cliente_v1', desc: 'Hola {{1}}, gracias por tu interés en {{2}}...' },
                        { id: 'promo_verano', name: 'promo_verano_2026', desc: '¡Aprovecha el 20% de descuento en {{1}} usando el código...' }
                      ].map((t) => (
                        <div 
                          key={t.id}
                          onClick={() => setSelectedTemplate(t.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${selectedTemplate === t.id ? 'bg-emerald-500/10 border-emerald-500 text-white' : 'bg-zinc-900/50 border-white/10 text-zinc-400'}`}
                        >
                          <p className="text-xs font-bold text-white mb-1 font-mono">{t.name}</p>
                          <p className="text-xs text-zinc-400">{t.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3 px-4 rounded-xl bg-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-700"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Sparkles className="w-4 h-4" /> Lanzar Campaña Ahora
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}

    </div>
  );
}