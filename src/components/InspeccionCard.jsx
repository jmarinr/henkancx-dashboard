import { 
  MapPin, 
  Clock, 
  User, 
  Building2, 
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Calendar
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function InspeccionCard({ inspeccion, onClick }) {
  const getEstadoBadge = () => {
    if (inspeccion.estado === 'pendiente') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
          <Clock className="w-3 h-3 mr-1" />
          Pendiente
        </span>
      );
    }
    
    switch (inspeccion.estadoEquipo) {
      case 'critico':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
            <AlertCircle className="w-3 h-3 mr-1" />
            Crítico
          </span>
        );
      case 'atencion':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Atención
          </span>
        );
      case 'normal':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Normal
          </span>
        );
      default:
        return null;
    }
  };

  const getBorderColor = () => {
    if (inspeccion.estado === 'pendiente') return 'border-gray-200 dark:border-gray-700';
    switch (inspeccion.estadoEquipo) {
      case 'critico': return 'border-l-4 border-l-red-500';
      case 'atencion': return 'border-l-4 border-l-yellow-500';
      case 'normal': return 'border-l-4 border-l-green-500';
      default: return 'border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border ${getBorderColor()}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {inspeccion.id}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {inspeccion.otId}
          </p>
        </div>
        {getEstadoBadge()}
      </div>

      {/* Información Principal */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
          <Building2 className="w-4 h-4 mr-2 text-gray-400" />
          <span className="font-medium">{inspeccion.cliente}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
          {inspeccion.sitio}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <User className="w-4 h-4 mr-2 text-gray-400" />
          {inspeccion.tecnico}
        </div>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
          {format(new Date(inspeccion.fecha), "dd 'de' MMMM, yyyy - HH:mm", { locale: es })}
        </div>
      </div>

      {/* Equipo Info */}
      {inspeccion.marcaPlanta && (
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Equipo</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {inspeccion.marcaPlanta} {inspeccion.modeloPlanta}
          </p>
          {inspeccion.capacidadKW && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {inspeccion.capacidadKW} KW • {inspeccion.hodometro} hrs
            </p>
          )}
        </div>
      )}

      {/* IA Insights */}
      {inspeccion.iaResult && (
        <div className="space-y-2 mb-4">
          {inspeccion.iaResult.alarmas.length > 0 && (
            <div className="flex items-start text-xs text-red-600 dark:text-red-400">
              <AlertCircle className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
              <span>{inspeccion.iaResult.alarmas.length} alarma(s) crítica(s)</span>
            </div>
          )}
          {inspeccion.iaResult.reemplazos.length > 0 && (
            <div className="flex items-start text-xs text-orange-600 dark:text-orange-400">
              <AlertTriangle className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
              <span>{inspeccion.iaResult.reemplazos.length} reemplazo(s) necesario(s)</span>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {inspeccion.duracion ? `${inspeccion.duracion} min` : 'Pendiente'}
        </div>
        <button className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
          Ver detalles
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
