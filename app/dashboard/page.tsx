import Link from 'next/link';
import { 
  Send, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Plus, 
  TrendingUp, 
  ArrowUpRight,
  Clock,
  CheckCheck
} from 'lucide-react';

const recentCampaigns = [
  {
    id: 'camp-01',
    name: 'Promoción de Verano - Leads Calientes',
    date: 'Hace 2 horas',
    status: 'Completada',
    recipients: '3,450',
    deliveryRate: '99.2%'
  },
  {
    id: 'camp-02',
    name: 'Recordatorio de Pago / Suscripciones',
    date: 'Ayer, 16:30 hrs',
    status: 'Completada',
    recipients: '1,200',
    deliveryRate: '99.8%'
  },
  {
    id: 'camp-03',
    name: 'Lanzamiento de Producto Q3',
    date: 'Programada para mañana',
    status: 'Programada',
    recipients: '5,000',
    deliveryRate: '-'
  }
];

export default function DashboardOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      
      {/* Título y CTA de Acción Principal */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Resumen general</h1>
          <p className="text-sm text-zinc-400 mt-1">Monitorea el rendimiento de tus mensajes masivos en tiempo real.</p>
        </div>
        <Link
          href="/dashboard/campaings/new"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-400 text-zinc-950 font-bold text-sm hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95"
        >
          <Plus className="w-4 h-4" />
          Nueva Campaña de Mensajes
        </Link>
      </div>

      {/* Grid de KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1 */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Mensajes Enviados</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Send className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">9,650</span>
            <span className="text-xs font-medium text-emerald-400 flex items-center">
              <TrendingUp className="w-3 h-3 mr-0.5" /> +14.2%
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-2">Ciclo actual de tarificación Meta</p>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Tasa de Entrega</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">99.5%</span>
            <span className="text-xs font-medium text-emerald-400">Óptima</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-2">Mensajes entregados con éxito</p>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Campañas Activas</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-white">2</span>
            <span className="text-xs font-medium text-zinc-400">En cola de envío</span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-2">1 programada para mañana</p>
        </div>

        {/* KPI 4: Estado de la API Oficial de Meta */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden border-emerald-500/30 glow-emerald bg-linear-to-br from-emerald-950/10 to-zinc-900/60">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">API Oficial Meta</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-lg font-bold text-white">Conectado</span>
          </div>
          <p className="text-[11px] text-zinc-400 mt-2">Cero riesgo de baneo activo</p>
        </div>

      </div>

      {/* Sección de Campañas Recientes (Tabla Moderna) */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Últimas Campañas Enviadas</h2>
            <p className="text-xs text-zinc-400 mt-0.5">Historial reciente de transmisiones de mensajes masivos.</p>
          </div>
          <Link href="/dashboard/campaings" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
            Ver todas <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-zinc-950/40 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Nombre de Campaña</th>
                <th className="py-3.5 px-6">Fecha / Hora</th>
                <th className="py-3.5 px-6">Estado</th>
                <th className="py-3.5 px-6">Destinatarios</th>
                <th className="py-3.5 px-6 text-right">Tasa Entrega</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {recentCampaigns.map((camp) => {
                const isCompleted = camp.status === 'Completada';
                return (
                  <tr key={camp.id} className="hover:bg-white/2 transition-colors">
                    <td className="py-4 px-6 font-medium text-white flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate max-w-xs">{camp.name}</span>
                    </td>
                    <td className="py-4 px-6 text-zinc-400 text-xs">{camp.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                        isCompleted 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      }`}>
                        {isCompleted ? <CheckCheck className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                        {camp.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-300 text-xs font-mono">{camp.recipients}</td>
                    <td className="py-4 px-6 text-right font-mono text-xs font-semibold text-white">{camp.deliveryRate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}