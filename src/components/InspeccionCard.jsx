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
        <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
          <Clock className="w-3 h-3 mr-1.5" />
          Pendiente
        </span>
      );
    }
    
    switch (inspeccion.estadoEquipo) {
      case 'critico':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800">
            <AlertCircle className="w-3 h-3 mr-1.5" />
            Crítico
          </span>
        );
      case 'atencion':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
            <AlertTriangle className="w-3 h-3 mr-1.5" />
            Atención
          </span>
        );
      case 'normal':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
            <CheckCircle2 className="w-3 h-3 mr-1.5" />
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
      case 'critico': return 'border-l-4 border-l-red-500 dark:border-l-red-600';
      case 'atencion': return 'border-l-4 border-l-yellow-500 dark:border-l-yellow-600';
      case 'normal': return 'border-l-4 border-l-green-500 dark:border-l-green-600';
      default: return 'border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md active:shadow-lg transition-all cursor-pointer border ${getBorderColor()} min-h-[180px] sm:min-h-0`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
            {inspeccion.id}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
            {inspeccion.otId}
          </p>
        </div>
        <div className="ml-2 flex-shrink-0">
          {getEstadoBadge()}
        </div>
      </div>

      {/* Información Principal */}
      <div className="space-y-2 sm:space-y-2.5 mb-3 sm:mb-4">
        <div className="flex items-center text-sm text-gray-900 dark:text-white">
          <Building2 className="w-4 h-4 mr-2 sm:mr-2.5 text-gray-400 flex-shrink-0" />
          <span className="font-medium truncate">{inspeccion.cliente}</span>
        </div>
        
        <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <MapPin className="w-4 h-4 mr-2 sm:mr-2.5 text-gray-400 flex-shrink-0" />
          <span className="truncate">{inspeccion.sitio}</span>
        </div>
        
        <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <User className="w-4 h-4 mr-2 sm:mr-2.5 text-gray-400 flex-shrink-0" />
          <span className="truncate">{inspeccion.tecnico}</span>
        </div>

        <div className="flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-2 sm:mr-2.5 text-gray-400 flex-shrink-0" />
          <span className="truncate">{format(new Date(inspeccion.fecha), "dd/MM/yyyy HH:mm", { locale: es })}</span>
        </div>
      </div>

      {/* Equipo Info */}
      {inspeccion.marcaPlanta && (
        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5 sm:p-3 mb-3 sm:mb-4 border border-gray-200 dark:border-gray-600">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 sm:mb-1.5">Equipo</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
            {inspeccion.marcaPlanta} {inspeccion.modeloPlanta}
          </p>
          {inspeccion.capacidadKW && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 sm:mt-1.5 truncate">
              {inspeccion.capacidadKW} KW - {inspeccion.hodometro} horas
            </p>
          )}
        </div>
      )}

      {/* IA Insights */}
      {inspeccion.iaResult && (
        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          {inspeccion.iaResult.alarmas.length > 0 && (
            <div className="flex items-start text-xs text-red-700 dark:text-red-400">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{inspeccion.iaResult.alarmas.length} alarma(s) detectada(s)</span>
            </div>
          )}
          {inspeccion.iaResult.reemplazos.length > 0 && (
            <div className="flex items-start text-xs text-yellow-700 dark:text-yellow-400">
              <AlertTriangle className="w-3.5 h-3.5 mr-1.5 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{inspeccion.iaResult.reemplazos.length} reemplazo(s) requerido(s)</span>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
          {inspeccion.duracion ? `Duración: ${inspeccion.duracion} min` : 'Sin completar'}
          {inspeccion.fotosUrls && inspeccion.fotosUrls.length > 0 && (
            <span className="ml-2">• {inspeccion.fotosUrls.length} fotos</span>
          )}
        </div>
        <button className="flex items-center text-xs sm:text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 flex-shrink-0 ml-2">
          <span className="hidden sm:inline">Ver detalle</span>
          <span className="sm:hidden">Ver</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}
