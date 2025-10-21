import { useState } from 'react';
import { 
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Calendar,
  BarChart3,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle,
  Package
} from 'lucide-react';
import { mockInspecciones } from '../data/mockData';
import { format, differenceInDays, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Analytics() {
  const [periodo, setPeriodo] = useState('mes'); // mes, semana, año

  // Calcular métricas
  const calcularMetricas = () => {
    const total = mockInspecciones.length;
    const completadas = mockInspecciones.filter(i => i.estado === 'completada');
    const pendientes = mockInspecciones.filter(i => i.estado === 'pendiente');
    
    const criticos = mockInspecciones.filter(i => i.estadoEquipo === 'critico').length;
    const atencion = mockInspecciones.filter(i => i.estadoEquipo === 'atencion').length;
    const normales = mockInspecciones.filter(i => i.estadoEquipo === 'normal').length;
    
    // Tiempo promedio
    const tiemposCompletadas = completadas
      .filter(i => i.duracion)
      .map(i => i.duracion);
    const tiempoPromedio = tiemposCompletadas.length > 0
      ? Math.round(tiemposCompletadas.reduce((a, b) => a + b, 0) / tiemposCompletadas.length)
      : 0;
    
    // Tasa de cumplimiento
    const tasaCumplimiento = total > 0 ? Math.round((completadas.length / total) * 100) : 0;
    
    // Técnicos únicos
    const tecnicos = [...new Set(mockInspecciones.map(i => i.tecnico))];
    
    // Clientes únicos
    const clientes = [...new Set(mockInspecciones.map(i => i.cliente))];
    
    // Tasa de criticidad
    const tasaCriticidad = completadas.length > 0 
      ? Math.round((criticos / completadas.length) * 100) 
      : 0;
    
    // Inspecciones por técnico
    const inspeccionesPorTecnico = tecnicos.map(tecnico => ({
      tecnico,
      total: mockInspecciones.filter(i => i.tecnico === tecnico).length,
      completadas: completadas.filter(i => i.tecnico === tecnico).length,
      pendientes: pendientes.filter(i => i.tecnico === tecnico).length
    })).sort((a, b) => b.total - a.total);
    
    // Inspecciones por cliente
    const inspeccionesPorCliente = clientes.map(cliente => ({
      cliente,
      total: mockInspecciones.filter(i => i.cliente === cliente).length,
      criticos: mockInspecciones.filter(i => i.cliente === cliente && i.estadoEquipo === 'critico').length,
      normales: mockInspecciones.filter(i => i.cliente === cliente && i.estadoEquipo === 'normal').length
    })).sort((a, b) => b.total - a.total);
    
    // Distribución por estado de equipo
    const distribucion = {
      criticos: criticos,
      atencion: atencion,
      normales: normales
    };
    
    return {
      total,
      completadas: completadas.length,
      pendientes: pendientes.length,
      tasaCumplimiento,
      tiempoPromedio,
      tecnicos: tecnicos.length,
      clientes: clientes.length,
      tasaCriticidad,
      distribucion,
      inspeccionesPorTecnico,
      inspeccionesPorCliente
    };
  };

  const metricas = calcularMetricas();

  const MetricCard = ({ title, value, subtitle, icon: Icon, trend, color = 'blue' }) => {
    const colorClasses = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
      yellow: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
      purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800'
    };

    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
          {trend && (
            <div className={`flex items-center gap-1 text-sm font-medium ${
              trend > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {Math.abs(trend)}%
            </div>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
          {subtitle && (
            <p className="text-xs text-gray-500 dark:text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => window.location.hash = 'dashboard'}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Dashboard</span>
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                Analíticas y Métricas
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Indicadores de gestión y rendimiento
              </p>
            </div>
          </div>
        </div>

        {/* KPIs Principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <MetricCard
            title="Tasa de Cumplimiento"
            value={`${metricas.tasaCumplimiento}%`}
            subtitle={`${metricas.completadas} de ${metricas.total} inspecciones`}
            icon={CheckCircle}
            color="green"
            trend={5}
          />
          
          <MetricCard
            title="Tiempo Promedio"
            value={`${metricas.tiempoPromedio} min`}
            subtitle="Por inspección completada"
            icon={Clock}
            color="blue"
            trend={-3}
          />
          
          <MetricCard
            title="Tasa de Criticidad"
            value={`${metricas.tasaCriticidad}%`}
            subtitle={`${metricas.distribucion.criticos} equipos críticos`}
            icon={AlertTriangle}
            color="red"
            trend={-8}
          />
          
          <MetricCard
            title="Inspecciones Pendientes"
            value={metricas.pendientes}
            subtitle="Requieren atención"
            icon={Activity}
            color="yellow"
          />
        </div>

        {/* Recursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <MetricCard
            title="Técnicos Activos"
            value={metricas.tecnicos}
            subtitle="Personal de campo"
            icon={Users}
            color="purple"
          />
          
          <MetricCard
            title="Clientes Atendidos"
            value={metricas.clientes}
            subtitle="Empresas únicas"
            icon={Package}
            color="blue"
          />
          
          <MetricCard
            title="Total Inspecciones"
            value={metricas.total}
            subtitle="En el sistema"
            icon={Calendar}
            color="green"
          />
        </div>

        {/* Distribución por Estado */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Distribución por Estado del Equipo
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-700 dark:text-green-400">Normal</span>
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500" />
              </div>
              <p className="text-3xl font-bold text-green-600 dark:text-green-500">
                {metricas.distribucion.normales}
              </p>
              <p className="text-xs text-green-600 dark:text-green-500 mt-1">
                {Math.round((metricas.distribucion.normales / metricas.completadas) * 100)}% del total
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Atención</span>
                <Activity className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
              </div>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-500">
                {metricas.distribucion.atencion}
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-500 mt-1">
                {Math.round((metricas.distribucion.atencion / metricas.completadas) * 100)}% del total
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-red-700 dark:text-red-400">Crítico</span>
                <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-500" />
              </div>
              <p className="text-3xl font-bold text-red-600 dark:text-red-500">
                {metricas.distribucion.criticos}
              </p>
              <p className="text-xs text-red-600 dark:text-red-500 mt-1">
                {Math.round((metricas.distribucion.criticos / metricas.completadas) * 100)}% del total
              </p>
            </div>
          </div>
        </div>

        {/* Rendimiento por Técnico */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Rendimiento por Técnico
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Técnico
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Total
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Completadas
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Pendientes
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    % Completado
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {metricas.inspeccionesPorTecnico.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                      {item.tecnico}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-700 dark:text-gray-300">
                      {item.total}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-green-600 dark:text-green-500 font-medium">
                      {item.completadas}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-yellow-600 dark:text-yellow-500 font-medium">
                      {item.pendientes}
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-semibold text-gray-900 dark:text-white">
                      {Math.round((item.completadas / item.total) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Inspecciones por Cliente */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Inspecciones por Cliente
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Cliente
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Total
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Normal
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-600 dark:text-gray-400 uppercase">
                    Críticos
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {metricas.inspeccionesPorCliente.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                      {item.cliente}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-700 dark:text-gray-300">
                      {item.total}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-green-600 dark:text-green-500 font-medium">
                      {item.normales}
                    </td>
                    <td className="px-4 py-3 text-sm text-right">
                      {item.criticos > 0 ? (
                        <span className="inline-flex items-center gap-1 text-red-600 dark:text-red-500 font-medium">
                          <AlertTriangle className="w-3 h-3" />
                          {item.criticos}
                        </span>
                      ) : (
                        <span className="text-gray-400">0</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
