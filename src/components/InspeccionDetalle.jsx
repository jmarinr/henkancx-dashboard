import { 
  X, 
  MapPin, 
  Calendar, 
  User, 
  Building2, 
  Zap,
  Gauge,
  Battery,
  Thermometer,
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  Camera,
  AlertTriangle
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import FotosGallery from './FotosGallery';

export default function InspeccionDetalle({ inspeccion, onClose }) {
  const getEstadoConfig = () => {
    switch (inspeccion.estadoEquipo) {
      case 'critico': 
        return {
          color: 'bg-red-600 dark:bg-red-700',
          textColor: 'text-red-700 dark:text-red-400',
          borderColor: 'border-red-500 dark:border-red-600',
          bgLight: 'bg-red-50 dark:bg-red-900/20'
        };
      case 'atencion': 
        return {
          color: 'bg-yellow-600 dark:bg-yellow-700',
          textColor: 'text-yellow-700 dark:text-yellow-400',
          borderColor: 'border-yellow-500 dark:border-yellow-600',
          bgLight: 'bg-yellow-50 dark:bg-yellow-900/20'
        };
      case 'normal': 
        return {
          color: 'bg-green-600 dark:bg-green-700',
          textColor: 'text-green-700 dark:text-green-400',
          borderColor: 'border-green-500 dark:border-green-600',
          bgLight: 'bg-green-50 dark:bg-green-900/20'
        };
      default: 
        return {
          color: 'bg-gray-600',
          textColor: 'text-gray-700 dark:text-gray-400',
          borderColor: 'border-gray-500',
          bgLight: 'bg-gray-50 dark:bg-gray-800'
        };
    }
  };

  const estadoConfig = getEstadoConfig();

  const Section = ({ title, icon: Icon, children }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-200 dark:border-gray-700">
        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );

  const Field = ({ label, value, unit = '', highlight = false }) => (
    <div className={`flex justify-between items-center py-2.5 px-3 rounded ${
      highlight ? 'bg-gray-100 dark:bg-gray-700' : ''
    }`}>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
      <span className={`text-sm font-semibold ${
        highlight 
          ? 'text-gray-900 dark:text-white' 
          : 'text-gray-800 dark:text-gray-200'
      }`}>
        {value || 'N/A'}{unit && value ? ` ${unit}` : ''}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {inspeccion.id}
                </h1>
                <span className={`px-4 py-1.5 rounded text-sm font-medium text-white ${estadoConfig.color}`}>
                  {inspeccion.estadoEquipo?.toUpperCase() || 'PENDIENTE'}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">{inspeccion.otId}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors border border-gray-300 dark:border-gray-600"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Cliente</p>
                <p className="font-medium text-gray-900 dark:text-white">{inspeccion.cliente}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Sitio</p>
                <p className="font-medium text-gray-900 dark:text-white">{inspeccion.sitio}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Técnico</p>
                <p className="font-medium text-gray-900 dark:text-white">{inspeccion.tecnico}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Fecha</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {format(new Date(inspeccion.fecha), "dd/MM/yyyy HH:mm", { locale: es })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* DATOS DEL GENERADOR */}
          <Section title="Datos del Generador" icon={Zap}>
            <Field label="Hodómetro" value={inspeccion.hodometro} unit="hrs" highlight />
            <Field label="Marca Planta" value={inspeccion.marcaPlanta} />
            <Field label="Modelo Planta" value={inspeccion.modeloPlanta} />
            <Field label="Marca Motor" value={inspeccion.marcaMotor} />
            <Field label="Modelo Motor" value={inspeccion.modeloMotor} />
            <Field label="Capacidad" value={inspeccion.capacidadKW} unit="KW" />
            <Field label="Potencia" value={inspeccion.capacidadHP} unit="HP" />
          </Section>

          {/* MEDICIONES DE VOLTAJE */}
          <Section title="Mediciones de Voltaje" icon={Zap}>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-3 mb-3 border border-gray-200 dark:border-gray-600">
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">Motor Generador</p>
              <div className="space-y-2">
                <Field label="L1-N" value={inspeccion.voltajeL1N} unit="V" />
                <Field label="L2-N" value={inspeccion.voltajeL2N} unit="V" />
                <Field label="L1-L2" value={inspeccion.voltajeL1L2} unit="V" highlight />
              </div>
            </div>
          </Section>

          {/* SISTEMA DE BATERÍA */}
          <Section title="Sistema de Batería" icon={Battery}>
            <Field label="Estado Físico" value={inspeccion.estadoBateria} highlight />
            <Field label="Voltaje con Cargador" value={inspeccion.voltageBatCargador} unit="V" />
            <Field label="Voltaje sin Cargador" value={inspeccion.voltageBatSinCargador} unit="V" />
          </Section>

          {/* LECTURAS GENERALES */}
          <Section title="Lecturas del Equipo" icon={Gauge}>
            <Field label="Frecuencia" value={inspeccion.frecuencia} unit="Hz" highlight />
            <Field label="Presión de Aceite" value={inspeccion.presionAceite} unit="PSI" />
            <Field label="Temperatura" value={inspeccion.temperatura} unit="°C" />
          </Section>

          {/* PRUEBAS DE ARRANQUE */}
          <Section title="Pruebas de Funcionamiento" icon={CheckCircle}>
            <Field label="Arranque Manual" value={inspeccion.arranqueManual} />
            <Field label="Arranque Automático" value={inspeccion.arranqueAutomatico} />
            <div className={`flex items-center gap-2.5 mt-3 p-3 rounded border ${
              inspeccion.arranqueManual === 'Ok' && inspeccion.arranqueAutomatico === 'Ok'
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
            }`}>
              {inspeccion.arranqueManual === 'Ok' && inspeccion.arranqueAutomatico === 'Ok' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Todas las pruebas completadas satisfactoriamente
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-medium text-red-700 dark:text-red-400">
                    Se detectaron fallas en las pruebas
                  </span>
                </>
              )}
            </div>
          </Section>

          {/* DURACIÓN */}
          <Section title="Información de Servicio" icon={Clock}>
            <Field label="Duración Total" value={inspeccion.duracion} unit="minutos" highlight />
            {inspeccion.fotos > 0 && (
              <div className="flex items-center gap-2.5 p-3 bg-gray-50 dark:bg-gray-700/50 rounded border border-gray-200 dark:border-gray-600 mt-2">
                <Camera className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {inspeccion.fotos} evidencia(s) fotográfica(s) adjunta(s)
                </span>
              </div>
            )}
          </Section>
        </div>

        {/* ANÁLISIS IA */}
        {inspeccion.iaResult && (
          <div className={`mt-6 rounded-lg p-6 border-2 ${estadoConfig.borderColor} ${estadoConfig.bgLight}`}>
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle className={`w-6 h-6 ${estadoConfig.textColor}`} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Análisis del Sistema</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Alarmas */}
              {inspeccion.iaResult.alarmas.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Alarmas Detectadas</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {inspeccion.iaResult.alarmas.map((alarma, idx) => (
                      <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-red-600 mt-0.5">•</span>
                        <span>{alarma}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reemplazos */}
              {inspeccion.iaResult.reemplazos.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Reemplazos Requeridos</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {inspeccion.iaResult.reemplazos.map((reemplazo, idx) => (
                      <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">•</span>
                        <span>{reemplazo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Revisiones */}
              {inspeccion.iaResult.revisiones.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Recomendaciones</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {inspeccion.iaResult.revisiones.map((revision, idx) => (
                      <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-gray-500 mt-0.5">•</span>
                        <span>{revision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* GALERÍA DE FOTOS */}
        {inspeccion.fotosUrls && inspeccion.fotosUrls.length > 0 && (
          <div className="mt-6">
            <FotosGallery fotos={inspeccion.fotosUrls} />
          </div>
        )}

        {/* OBSERVACIONES */}
        {inspeccion.observaciones && (
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Observaciones del Técnico</h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {inspeccion.observaciones}
            </p>
          </div>
        )}

        {/* Botón Volver */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors border border-gray-800 dark:border-gray-600"
          >
            Volver al Panel
          </button>
        </div>
      </div>
    </div>
  );
}
