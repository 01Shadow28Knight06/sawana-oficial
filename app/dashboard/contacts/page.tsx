'use client';

import { useState } from 'react';
import { Search, Upload, UserPlus, Phone, Mail, MapPin } from 'lucide-react';

const initialContacts = [
  { id: 1, name: 'Alejandro Garza', phone: '+52 81 1234 5678', email: 'agarza@nortex.mx', city: 'Monterrey, NL' },
  { id: 2, name: 'Mariana Rivas', phone: '+52 55 9876 5432', email: 'mrivas@kasha.mx', city: 'CDMX' },
  { id: 3, name: 'Carlos Mendoza', phone: '+52 33 4455 6677', email: 'cmendoza@dogomx.com', city: 'Guadalajara, JAL' },
  { id: 4, name: 'Valeria Soto', phone: '+52 22 2333 4455', email: 'vsoto@fondadigital.mx', city: 'Puebla, PUE' },
];

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState(initialContacts);
  const [isImportModal, setIsImportModal] = useState(false);

  const filteredContacts = contacts.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.phone.includes(searchTerm) ||
    c.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSimulateUpload = () => {
    alert("¡Archivo CSV procesado con éxito! Se han añadido 142 nuevos contactos limpios.");
    setIsImportModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Directorio de Contactos</h1>
          <p className="text-sm text-zinc-400 mt-1">Base de datos sincronizada para envíos seguros mediante API de Meta.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsImportModal(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-all border border-white/10"
          >
            <Upload className="w-4 h-4 text-emerald-400" />
            Importar CSV
          </button>
          <button
            onClick={() => alert("Formulario rápido de nuevo lead unitario")}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-xs hover:bg-emerald-300 transition-all shadow-md shadow-emerald-500/20"
          >
            <UserPlus className="w-4 h-4" />
            Nuevo Contacto
          </button>
        </div>
      </div>

      {/* Buscador y Contador */}
      <div className="glass-panel p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute inset-y-0 left-3.5 my-auto w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar por nombre, teléfono o ciudad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-950/60 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div className="text-xs text-zinc-400 font-medium px-2">
          Total Leads Activos: <strong className="text-white font-mono">{contacts.length} registros</strong>
        </div>
      </div>

      {/* Tabla de Contactos */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-zinc-950/40 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                <th className="py-3.5 px-6">Nombre del Lead</th>
                <th className="py-3.5 px-6">WhatsApp</th>
                <th className="py-3.5 px-6">Correo</th>
                <th className="py-3.5 px-6 text-right">Ubicación</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-white/2 transition-colors">
                  <td className="py-4 px-6 font-medium text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                      {contact.name.charAt(0)}
                    </div>
                    {contact.name}
                  </td>
                  <td className="py-4 px-6 text-zinc-300 font-mono text-xs flex items-center gap-1.5 pt-5">
                    <Phone className="w-3.5 h-3.5 text-zinc-500" /> {contact.phone}
                  </td>
                  <td className="py-4 px-6 text-zinc-400 text-xs">
                    <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-zinc-500" /> {contact.email}</span>
                  </td>
                  <td className="py-4 px-6 text-right text-zinc-400 text-xs font-medium">
                    <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3 text-emerald-400" /> {contact.city}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Importar CSV */}
      {isImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-md rounded-3xl p-6 sm:p-8 relative border-white/15 bg-zinc-950 text-center space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
              <Upload className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Importar base de contactos CSV</h3>
            <p className="text-xs text-zinc-400">Sube tu archivo con columnas de Nombre y Teléfono (formato internacional con código de país).</p>
            <div className="border-2 border-dashed border-white/10 rounded-2xl p-6 bg-zinc-900/40 text-xs text-zinc-500">
              Arrastra tu archivo CSV aquí o <span className="text-emerald-400 underline cursor-pointer">explora carpetas</span>
            </div>
            <div className="flex gap-2 pt-2">
              <button onClick={() => setIsImportModal(false)} className="w-1/2 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 font-semibold text-xs">Cancelar</button>
              <button onClick={handleSimulateUpload} className="w-1/2 py-2.5 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-xs hover:bg-emerald-300">Cargar Archivo</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}