import { useState } from 'react';
import { 
  ClipboardCheck, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';
import { mockInspecciones, getEstadisticas } from '../data/mockData';
import InspeccionCard from './InspeccionCard';
import InspeccionDetalle from './InspeccionDetalle';

export default function Dashboard() {
  const [selectedInspeccion, setSelectedInspeccion] = useState(null);
  const [filtroEstado, setFiltroEstado] = useState('todas');
  
  const stats = getEstadisticas();
  
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
    <div className="min-h-screen bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard de Inspecciones
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitoreo y gestión de inspecciones de generadores
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {/* Total Inspecciones */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <ClipboardCheck className="w-8 h-8" />
              <div className="text-right">
                <p className="text-3xl font-bold">{stats.total}</p>
                <p className="text-blue-100 text-sm">Total</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-100">Inspecciones</span>
              <span className="font-semibold">{stats.porcentajeCompletado}% OK</span>
            </div>
          </div>

          {/* Equipos Críticos */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8" />
              <div className="text-right">
                <p className="text-3xl font-bold">{stats.criticos}</p>
                <p className="text-red-100 text-sm">Críticos</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-red-100">Atención urgente</span>
              <Zap className="w-4 h-4" />
            </div>
          </div>

          {/* Requieren Atención */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <Activity className="w-8 h-8" />
              <div className="text-right">
                <p className="text-3xl font-bold">{stats.atencion}</p>
                <p className="text-yellow-100 text-sm">Atención</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-yellow-100">Seguimiento</span>
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>

          {/* Equipos Normales */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8" />
              <div className="text-right">
                <p className="text-3xl font-bold">{stats.normales}</p>
                <p className="text-green-100 text-sm">Normales</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-100">Operativos</span>
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroEstado('todas')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroEstado === 'todas'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Todas ({stats.total})
          </button>
          <button
            onClick={() => setFiltroEstado('completadas')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroEstado === 'completadas'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Completadas ({stats.completadas})
          </button>
          <button
            onClick={() => setFiltroEstado('pendientes')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroEstado === 'pendientes'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Clock className="w-4 h-4 inline mr-1" />
            Pendientes ({stats.pendientes})
          </button>
          <button
            onClick={() => setFiltroEstado('critico')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroEstado === 'critico'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Críticos ({stats.criticos})
          </button>
          <button
            onClick={() => setFiltroEstado('atencion')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroEstado === 'atencion'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Atención ({stats.atencion})
          </button>
          <button
            onClick={() => setFiltroEstado('normal')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filtroEstado === 'normal'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Normales ({stats.normales})
          </button>
        </div>

        {/* Lista de Inspecciones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {inspeccionesFiltradas.map(inspeccion => (
            <InspeccionCard
              key={inspeccion.id}
              inspeccion={inspeccion}
              onClick={() => setSelectedInspeccion(inspeccion)}
            />
          ))}
        </div>

        {inspeccionesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No hay inspecciones con este filtro
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
