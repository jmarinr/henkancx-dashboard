import { useState } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  Users,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  Zap
} from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, subMonths } from 'date-fns';
import { es } from 'date-fns/locale';
import { mockInspecciones } from '../data/mockData';

export default function Analitica({ onBack }) {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState('mes'); // mes, trimestre, año

  // Calcular métricas
  const calcularMetricas = () => {
    const total = mockInspecciones.length;
    const completadas = mockInspecciones.filter(i => i.estado === 'completada').length;
    const pendientes = mockInspecciones.filter(i => i.estado === 'pendiente').length;
    
    const criticos = mockInspecciones.filter(i => i.estadoEquipo === 'critico').length;
    const atencion = mockInspecciones.filter(i => i.estadoEquipo === 'atencion').length;
    const normales = mockInspecciones.filter(i => i.estadoEquipo === 'normal').length;
    
    // Métricas de tiempo
    const inspeccionesCompletadas = mockInspecciones.filter(i => i.estado === 'completada');
    const tiempoPromedio = inspeccionesCompletadas.reduce((acc, i) => acc + (i.duracion || 0), 0) / inspeccionesCompletadas.length;
    
    // Técnicos
    const tecnicos = [...new Set(mockInspecciones.map(i => i.tecnico))];
    const inspeccionesPorTecnico = tecnicos.map(tecnico => ({
      nombre: tecnico,
      total: mockInspecciones.filter(i => i.tecnico === tecnico).length,
      completadas: mockInspecciones.filter(i => i.tecnico === tecnico && i.estado === 'completada').length,
      pendientes: mockInspecciones.filter(i => i.tecnico === tecnico && i.estado === 'pendiente').length
    }));
    
    // Clientes
    const clientes = [...new Set(mockInspecciones.map(i => i.cliente))];
    const inspeccionesPorCliente = clientes.map(cliente => ({
      nombre: cliente,
      total: mockInspecciones.filter(i => i.cliente === cliente).length
    }));
    
    // Tasa de éxito
    const tasaExito = completadas / total * 100;
    const tasaCriticos = (criticos / completadas) * 100;
    
    return {
      total,
      completadas,
      pendientes,
      criticos,
      atencion,
      normales,
      tiempoPromedio: Math.round(tiempoPromedio),
      tecnicos: tecnicos.length,
      clientes: clientes.length,
      inspeccionesPorTecnico,
      inspeccionesPorCliente,
      tasaExito: Math.round(tasaExito),
      tasaCriticos: Math.round(tasaCriticos)
    };
  };

  const metricas = calcularMetricas();

  const MetricCard = ({ icon: Icon, titulo, valor, subtitulo, color, trend }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            trend > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            <TrendingUp className={`w-4 h-4 ${trend < 0 ? 'rotate-180' : ''}`} />
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{valor}</h3>
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{titulo}</p>
      {subtitulo && (
        <p className="text-xs text-gray-500 dark:text-gray-500">{subtitulo}</p>
      )}
    </div>
  );

  const ProgressBar = ({ label, value, max, color }) => (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-bold text-gray-900 dark:text-white">{value}/{max}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Volver al Dashboard</span>
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Analítica de Gestión
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Métricas e indicadores clave de órdenes de trabajo
              </p>
            </div>
            
            {/* Selector de periodo */}
            <div className="flex gap-2">
              <button
                onClick={() => setPeriodoSeleccionado('mes')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  periodoSeleccionado === 'mes'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                }`}
              >
                Este Mes
              </button>
              <button
                onClick={() => setPeriodoSeleccionado('trimestre')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  periodoSeleccionado === 'trimestre'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                }`}
              >
                Trimestre
              </button>
              <button
                onClick={() => setPeriodoSeleccionado('año')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  periodoSeleccionado === 'año'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                }`}
              >
                Este Año
              </button>
            </div>
          </div>
        </div>

        {/* Métricas Principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            icon={BarChart3}
            titulo="Total de Órdenes"
            valor={metricas.total}
            subtitulo="Órdenes en sistema"
            color="bg-blue-600"
            trend={12}
          />
          <MetricCard
            icon={CheckCircle2}
            titulo="Órdenes Completadas"
            valor={metricas.completadas}
            subtitulo={`${metricas.tasaExito}% tasa de éxito`}
            color="bg-green-600"
            trend={8}
          />
          <MetricCard
            icon={Clock}
            titulo="Órdenes Pendientes"
            valor={metricas.pendientes}
            subtitulo="Requieren atención"
            color="bg-gray-600"
          />
          <MetricCard
            icon={AlertTriangle}
            titulo="Equipos Críticos"
            valor={metricas.criticos}
            subtitulo={`${metricas.tasaCriticos}% de completadas`}
            color="bg-red-600"
            trend={-15}
          />
        </div>

        {/* Segunda fila de métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            icon={Activity}
            titulo="Tiempo Promedio"
            valor={`${metricas.tiempoPromedio} min`}
            subtitulo="Por inspección"
            color="bg-purple-600"
          />
          <MetricCard
            icon={Users}
            titulo="Técnicos Activos"
            valor={metricas.tecnicos}
            subtitulo="En operación"
            color="bg-indigo-600"
          />
          <MetricCard
            icon={Zap}
            titulo="Clientes Atendidos"
            valor={metricas.clientes}
            subtitulo="Únicos este periodo"
            color="bg-orange-600"
          />
          <MetricCard
            icon={PieChart}
            titulo="Requieren Atención"
            valor={metricas.atencion}
            subtitulo="Para seguimiento"
            color="bg-yellow-600"
          />
        </div>

        {/* Distribución de Estados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Estados de Órdenes */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Distribución de Estados
            </h3>
            <div className="space-y-4">
              <ProgressBar
                label="Completadas"
                value={metricas.completadas}
                max={metricas.total}
                color="bg-green-600"
              />
              <ProgressBar
                label="Pendientes"
                value={metricas.pendientes}
                max={metricas.total}
                color="bg-gray-600"
              />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {metricas.tasaExito}%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tasa de Completación</p>
              </div>
            </div>
          </div>

          {/* Estados de Equipos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Condición de Equipos
            </h3>
            <div className="space-y-4">
              <ProgressBar
                label="Normales"
                value={metricas.normales}
                max={metricas.completadas}
                color="bg-green-600"
              />
              <ProgressBar
                label="Requieren Atención"
                value={metricas.atencion}
                max={metricas.completadas}
                color="bg-yellow-600"
              />
              <ProgressBar
                label="Críticos"
                value={metricas.criticos}
                max={metricas.completadas}
                color="bg-red-600"
              />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {Math.round((metricas.normales / metricas.completadas) * 100)}%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Equipos en Buen Estado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rendimiento por Técnico */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Rendimiento por Técnico
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Técnico
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Total
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Completadas
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Pendientes
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Tasa Completación
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {metricas.inspeccionesPorTecnico.map((tecnico, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {tecnico.nombre}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                      {tecnico.total}
                    </td>
                    <td className="px-4 py-4 text-sm text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {tecnico.completadas}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {tecnico.pendientes}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                      {Math.round((tecnico.completadas / tecnico.total) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Órdenes por Cliente */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Órdenes por Cliente
          </h3>
          <div className="space-y-3">
            {metricas.inspeccionesPorCliente
              .sort((a, b) => b.total - a.total)
              .map((cliente, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {cliente.nombre}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(cliente.total / metricas.total) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white w-8 text-right">
                      {cliente.total}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
