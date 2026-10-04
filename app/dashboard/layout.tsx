'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Send, 
  Users, 
  FileText, 
  Settings, 
  Menu, 
  X, 
  ShieldCheck, 
  LogOut,
  Bell,
  Search
} from 'lucide-react';

const navigation = [
  { name: 'Inicio / Resumen', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Campañas', href: '/dashboard/campaings', icon: Send },
  { name: 'Contactos', href: '/dashboard/contacts', icon: Users },
  { name: 'Plantillas de Meta', href: '/dashboard/templates', icon: FileText },
  { name: 'Configuración', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#09090B] flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 h-16 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-400 flex items-center justify-center font-black text-zinc-950 text-sm">
            S
          </div>
          <span className="text-base font-bold tracking-tight text-white">SAWANA</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-zinc-400 hover:text-white p-2"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar para Escritorio y Móvil */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-zinc-950 border-r border-white/10 flex flex-col justify-between transition-transform duration-300 ease-in-out md:static md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div>
          {/* Logo Brand */}
          <div className="h-20 flex items-center px-6 gap-3 border-b border-white/5">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-zinc-950 font-black text-lg">S</span>
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white block leading-none">
                SAWANA<span className="text-emerald-500">.</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider uppercase">Business API</span>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <nav className="p-4 space-y-1.5">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Indicador de Estado de Cuenta en la parte inferior del Sidebar */}
        <div className="p-4 border-t border-white/5 space-y-3">
          <div className="glass-panel p-3 rounded-xl bg-zinc-900/40 border-white/5">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-white">Meta API Oficial</span>
            </div>
            <p className="text-[11px] text-zinc-400">Número verificado y sin riesgo de baneo.</p>
          </div>
          
          <div className="flex items-center justify-between pt-2 px-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-300 border border-white/10">
                SM
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-white truncate">Sofía Martínez</p>
                <p className="text-[10px] text-zinc-500 truncate">sofia@tudominio.mx</p>
              </div>
            </div>
            <Link href="/" className="text-zinc-500 hover:text-red-400 transition-colors p-1" title="Cerrar sesión">
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header Superior del Dashboard */}
        <header className="h-20 border-b border-white/10 bg-[#09090B]/60 backdrop-blur-md px-6 hidden md:flex items-center justify-between sticky top-0 z-30">
          <div className="relative w-96">
            <Search className="absolute inset-y-0 left-3.5 my-auto w-4 h-4 text-zinc-500 pointer-events-none" />
            <input 
              type="text" 
              placeholder="Buscar campañas, contactos o plantillas..." 
              className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400" />
            </button>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-xs font-medium text-zinc-300">PyME Plan Activo</span>
          </div>
        </header>

        {/* Renderizado de la Vista Activa */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}