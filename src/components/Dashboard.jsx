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

export default function Dashboard() {
  const [selectedInspeccion, setSelectedInspeccion] = useState(null);
  const [filtroEstado, setFiltroEstado] = useState('todas');
  
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
    if (filtroEstado === 'todas') return true;
    if (filtroEstado === 'completadas') return insp.estado === 'completada';
    if (filtroEstado === 'pendientes') return insp.estado === 'pendiente';
    if (filtroEstado === 'critico') return insp.estadoEquipo === 'critico';
    if (filtroEstado === 'atencion') return insp.estadoEquipo === 'atencion';
    if (filtroEstado === 'normal') return insp.estadoEquipo === 'normal';
    return true;
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
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border-2 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <ClipboardCheck className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">Total</p>
              </div>
            </div>
            <div className="text-xs pt-2 border-t border-blue-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Completadas</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{stats.porcentajeCompletado}%</span>
              </div>
            </div>
          </div>

          {/* Equipos Críticos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border-2 border-red-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-500">{stats.criticos}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Crítico</p>
              </div>
            </div>
            <div className="text-xs pt-2 border-t border-red-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Urgente</span>
            </div>
          </div>

          {/* Requieren Atención */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border-2 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-2xl sm:text-3xl font-bold text-yellow-600 dark:text-yellow-500">{stats.atencion}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Atención</p>
              </div>
            </div>
            <div className="text-xs pt-2 border-t border-yellow-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">Seguimiento</span>
            </div>
          </div>

          {/* Equipos Normales */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border-2 border-green-500 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
              <div className="text-right">
                <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-500">{stats.normales}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Normal</p>
              </div>
            </div>
            <div className="text-xs pt-2 border-t border-green-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400 font-medium">OK</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              No hay inspecciones con este filtro
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
