import { useState, useEffect } from 'react';
import { 
  ClipboardCheck, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Activity
} from 'lucide-react';
import { mockInspecciones, getEstadisticas } from '../data/mockData';
import InspeccionCard from './InspeccionCard';
import InspeccionDetalle from './InspeccionDetalle';
import InspeccionesTabla from './InspeccionesTabla';

export default function Dashboard() {
  const [selectedInspeccion, setSelectedInspeccion] = useState(null);
  const [filtroEstado, setFiltroEstado] = useState('todas');
  const [busqueda, setBusqueda] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  
  const stats = getEstadisticas();
  
  // Scroll al inicio cuando se selecciona una inspección
  useEffect(() => {
    if (selectedInspeccion) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [selectedInspeccion]);
  
  const inspeccionesFiltradas = mockInspecciones.filter(insp => {
    // Filtro por estado
    let pasaFiltroEstado = true;
    if (filtroEstado === 'completadas') pasaFiltroEstado = insp.estado === 'completada';
    else if (filtroEstado === 'pendientes') pasaFiltroEstado = insp.estado === 'pendiente';
    else if (filtroEstado === 'critico') pasaFiltroEstado = insp.estadoEquipo === 'critico';
    else if (filtroEstado === 'atencion') pasaFiltroEstado = insp.estadoEquipo === 'atencion';
    else if (filtroEstado === 'normal') pasaFiltroEstado = insp.estadoEquipo === 'normal';
    
    // Filtro por búsqueda (OT ID, Cliente, Técnico)
    let pasaBusqueda = true;
    if (busqueda.trim()) {
      const termino = busqueda.toLowerCase();
      pasaBusqueda = 
        insp.id.toLowerCase().includes(termino) ||
        insp.otId.toLowerCase().includes(termino) ||
        insp.cliente.toLowerCase().includes(termino) ||
        insp.tecnico.toLowerCase().includes(termino);
    }
    
    // Filtro por rango de fechas
    let pasaFechas = true;
    if (fechaInicio || fechaFin) {
      const fechaInsp = new Date(insp.fecha);
      if (fechaInicio) {
        const inicio = new Date(fechaInicio);
        pasaFechas = pasaFechas && fechaInsp >= inicio;
      }
      if (fechaFin) {
        const fin = new Date(fechaFin);
        fin.setHours(23, 59, 59, 999); // Incluir todo el día
        pasaFechas = pasaFechas && fechaInsp <= fin;
      }
    }
    
    return pasaFiltroEstado && pasaBusqueda && pasaFechas;
  });

  if (selectedInspeccion) {
    return (
      <InspeccionDetalle 
        inspeccion={selectedInspeccion}
        onClose={() => setSelectedInspeccion(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
            Panel de Control
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Monitoreo de inspecciones de generadores eléctricos
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
          {/* Total Inspecciones */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-2.5 sm:p-4 border-2 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300">Total</p>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs pt-1.5 sm:pt-2 border-t border-blue-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Completadas</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{stats.porcentajeCompletado}%</span>
              </div>
            </div>
          </div>

          {/* Equipos Críticos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-2.5 sm:p-4 border-2 border-red-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 dark:text-red-500">{stats.criticos}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Crítico</p>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs pt-1.5 sm:pt-2 border-t border-red-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Urgente</span>
            </div>
          </div>

          {/* Requieren Atención */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-2.5 sm:p-4 border-2 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-600 dark:text-yellow-500">{stats.atencion}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Atención</p>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs pt-1.5 sm:pt-2 border-t border-yellow-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Seguimiento</span>
            </div>
          </div>

          {/* Equipos Normales */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-2.5 sm:p-4 border-2 border-green-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 dark:text-green-500">{stats.normales}</p>
                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Normal</p>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs pt-1.5 sm:pt-2 border-t border-green-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">OK</span>
            </div>
          </div>
        </div>

        {/* Barra de Búsqueda */}
        <div className="mb-4 sm:mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Input de búsqueda principal */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar por OT ID, Cliente o Técnico..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full px-4 py-2.5 pl-10 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Filtros de fecha con placeholders */}
              <div className="flex gap-2">
                <input
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  placeholder="Inicio"
                  className="px-3 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />

                <input
                  type="date"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                  placeholder="Fin"
                  className="px-3 py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Botón limpiar */}
              {(busqueda || fechaInicio || fechaFin) && (
                <button
                  onClick={() => {
                    setBusqueda('');
                    setFechaInicio('');
                    setFechaFin('');
                  }}
                  className="px-4 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroEstado('todas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filtroEstado === 'todas'
                ? 'bg-gray-900 dark:bg-gray-700 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Todas ({stats.total})
          </button>
          <button
            onClick={() => setFiltroEstado('completadas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filtroEstado === 'completadas'
                ? 'bg-gray-900 dark:bg-gray-700 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Completadas ({stats.completadas})
          </button>
          <button
            onClick={() => setFiltroEstado('pendientes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filtroEstado === 'pendientes'
                ? 'bg-gray-900 dark:bg-gray-700 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Pendientes ({stats.pendientes})
          </button>
          <button
            onClick={() => setFiltroEstado('critico')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filtroEstado === 'critico'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Críticos ({stats.criticos})
          </button>
          <button
            onClick={() => setFiltroEstado('atencion')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filtroEstado === 'atencion'
                ? 'bg-yellow-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Atención ({stats.atencion})
          </button>
          <button
            onClick={() => setFiltroEstado('normal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              filtroEstado === 'normal'
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Normales ({stats.normales})
          </button>
        </div>

        {/* Lista de Inspecciones */}
        {/* Vista de Tabla (Desktop) */}
        <div className="hidden lg:block">
          <InspeccionesTabla 
            inspecciones={inspeccionesFiltradas}
            onSelectInspeccion={setSelectedInspeccion}
          />
        </div>

        {/* Vista de Tarjetas (Móvil/Tablet) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {inspeccionesFiltradas.map(inspeccion => (
            <InspeccionCard
              key={inspeccion.id}
              inspeccion={inspeccion}
              onClick={() => setSelectedInspeccion(inspeccion)}
            />
          ))}
        </div>

        {inspeccionesFiltradas.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              No hay inspecciones que coincidan con los filtros aplicados
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
