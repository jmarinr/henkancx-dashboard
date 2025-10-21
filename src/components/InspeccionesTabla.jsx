import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Building2, MapPin, User, Calendar, AlertCircle, AlertTriangle } from 'lucide-react';

export default function InspeccionesTabla({ inspecciones, onSelectInspeccion }) {
  const getEstadoBadge = (estado) => {
    const badges = {
      completada: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      pendiente: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      cancelada: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    };
    
    const labels = {
      completada: 'Completada',
      pendiente: 'Pendiente',
      cancelada: 'Cancelada'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badges[estado]}`}>
        {labels[estado]}
      </span>
    );
  };

  const getEstadoEquipoBadge = (estadoEquipo) => {
    const badges = {
      critico: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border border-red-300 dark:border-red-700',
      atencion: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700',
      normal: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border border-green-300 dark:border-green-700'
    };
    
    const labels = {
      critico: 'Crítico',
      atencion: 'Atención',
      normal: 'Normal'
    };
    
    const iconos = {
      critico: <AlertTriangle className="w-3 h-3 mr-1" />,
      atencion: <AlertCircle className="w-3 h-3 mr-1" />,
      normal: null
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium inline-flex items-center ${badges[estadoEquipo]}`}>
        {iconos[estadoEquipo]}
        {labels[estadoEquipo]}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                OT / Inspección
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Cliente / Sitio
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Equipo
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Técnico
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Equipo
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {inspecciones.map((inspeccion) => (
              <tr 
                key={inspeccion.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => onSelectInspeccion(inspeccion)}
              >
                <td className="px-4 py-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {inspeccion.id}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {inspeccion.otId}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {inspeccion.cliente}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {inspeccion.sitio}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div>
                    {inspeccion.marcaPlanta && (
                      <>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {inspeccion.marcaPlanta} {inspeccion.modeloPlanta}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {inspeccion.capacidadKW} KW
                        </p>
                      </>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {inspeccion.tecnico}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {format(new Date(inspeccion.fecha), "dd/MM/yyyy", { locale: es })}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {format(new Date(inspeccion.fecha), "HH:mm", { locale: es })}
                  </p>
                </td>
                <td className="px-4 py-4">
                  {getEstadoBadge(inspeccion.estado)}
                </td>
                <td className="px-4 py-4">
                  {getEstadoEquipoBadge(inspeccion.estadoEquipo)}
                </td>
                <td className="px-4 py-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectInspeccion(inspeccion);
                    }}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
