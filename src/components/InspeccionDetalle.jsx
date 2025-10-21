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
  Sparkles
} from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function InspeccionDetalle({ inspeccion, onClose }) {
  const getEstadoColor = () => {
    switch (inspeccion.estadoEquipo) {
      case 'critico': return 'bg-red-500';
      case 'atencion': return 'bg-yellow-500';
      case 'normal': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const Section = ({ title, icon: Icon, children, color = 'blue' }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
        <div className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900/30`}>
          <Icon className={`w-5 h-5 text-${color}-600 dark:text-${color}-400`} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );

  const Field = ({ label, value, unit = '', highlight = false }) => (
    <div className={`flex justify-between items-center py-2 px-3 rounded-lg ${
      highlight ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
    }`}>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}:</span>
      <span className={`text-sm font-semibold ${
        highlight 
          ? 'text-blue-700 dark:text-blue-400' 
          : 'text-gray-900 dark:text-white'
      }`}>
        {value || 'N/A'} {unit && value ? unit : ''}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {inspeccion.id}
                </h1>
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold text-white ${getEstadoColor()}`}>
                  {inspeccion.estadoEquipo?.toUpperCase() || 'PENDIENTE'}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{inspeccion.otId}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Cliente</p>
                <p className="font-semibold text-gray-900 dark:text-white">{inspeccion.cliente}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Sitio</p>
                <p className="font-semibold text-gray-900 dark:text-white">{inspeccion.sitio}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Técnico</p>
                <p className="font-semibold text-gray-900 dark:text-white">{inspeccion.tecnico}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Fecha</p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {format(new Date(inspeccion.fecha), "dd/MM/yyyy HH:mm", { locale: es })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* DATOS DEL GENERADOR */}
          <Section title="Datos del Generador" icon={Zap} color="blue">
            <Field label="Hodómetro" value={inspeccion.hodometro} unit="hrs" highlight />
            <Field label="Marca Planta" value={inspeccion.marcaPlanta} />
            <Field label="Modelo Planta" value={inspeccion.modeloPlanta} />
            <Field label="Marca Motor" value={inspeccion.marcaMotor} />
            <Field label="Modelo Motor" value={inspeccion.modeloMotor} />
            <Field label="Capacidad" value={inspeccion.capacidadKW} unit="KW" />
            <Field label="Potencia" value={inspeccion.capacidadHP} unit="HP" />
          </Section>

          {/* MEDICIONES DE VOLTAJE */}
          <Section title="Mediciones de Voltaje" icon={Zap} color="purple">
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 mb-2">
              <p className="text-xs font-semibold text-purple-700 dark:text-purple-400 mb-2">
                Motor Generador
              </p>
              <div className="space-y-2">
                <Field label="L1-N" value={inspeccion.voltajeL1N} unit="V" />
                <Field label="L2-N" value={inspeccion.voltajeL2N} unit="V" />
                <Field label="L1-L2" value={inspeccion.voltajeL1L2} unit="V" highlight />
              </div>
            </div>
          </Section>

          {/* SISTEMA DE BATERÍA */}
          <Section title="Sistema de Batería" icon={Battery} color="green">
            <Field label="Estado Batería" value={inspeccion.estadoBateria} highlight />
            <Field label="Voltaje con Cargador" value={inspeccion.voltageBatCargador} unit="V" />
            <Field label="Voltaje sin Cargador" value={inspeccion.voltageBatSinCargador} unit="V" />
          </Section>

          {/* LECTURAS GENERALES */}
          <Section title="Lecturas Generales" icon={Gauge} color="orange">
            <Field label="Frecuencia" value={inspeccion.frecuencia} unit="Hz" highlight />
            <Field label="Presión de Aceite" value={inspeccion.presionAceite} unit="PSI" />
            <Field label="Temperatura" value={inspeccion.temperatura} unit="°C" />
          </Section>

          {/* PRUEBAS DE ARRANQUE */}
          <Section title="Pruebas de Arranque" icon={CheckCircle} color="blue">
            <Field label="Arranque Manual" value={inspeccion.arranqueManual} />
            <Field label="Arranque Automático" value={inspeccion.arranqueAutomatico} />
            <div className="flex items-center gap-2 mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              {inspeccion.arranqueManual === 'Ok' && inspeccion.arranqueAutomatico === 'Ok' ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Todas las pruebas exitosas
                  </span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium text-red-700 dark:text-red-400">
                    Pruebas con fallas detectadas
                  </span>
                </>
              )}
            </div>
          </Section>

          {/* DURACIÓN */}
          <Section title="Tiempo de Inspección" icon={Clock} color="indigo">
            <Field label="Duración Total" value={inspeccion.duracion} unit="minutos" highlight />
            {inspeccion.fotos > 0 && (
              <div className="flex items-center gap-2 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <Camera className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-sm font-medium text-indigo-700 dark:text-indigo-400">
                  {inspeccion.fotos} evidencia(s) fotográfica(s)
                </span>
              </div>
            )}
          </Section>
        </div>

        {/* ANÁLISIS IA */}
        {inspeccion.iaResult && (
          <div className="mt-6 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-xl font-bold">Análisis Inteligente</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Alarmas */}
              {inspeccion.iaResult.alarmas.length > 0 && (
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5" />
                    <h4 className="font-bold">Alarmas Críticas</h4>
                  </div>
                  <ul className="space-y-2">
                    {inspeccion.iaResult.alarmas.map((alarma, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{alarma}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reemplazos */}
              {inspeccion.iaResult.reemplazos.length > 0 && (
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5" />
                    <h4 className="font-bold">Reemplazos Necesarios</h4>
                  </div>
                  <ul className="space-y-2">
                    {inspeccion.iaResult.reemplazos.map((reemplazo, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{reemplazo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Revisiones */}
              {inspeccion.iaResult.revisiones.length > 0 && (
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5" />
                    <h4 className="font-bold">Revisiones Recomendadas</h4>
                  </div>
                  <ul className="space-y-2">
                    {inspeccion.iaResult.revisiones.map((revision, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{revision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* OBSERVACIONES */}
        {inspeccion.observaciones && (
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Observaciones del Técnico</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {inspeccion.observaciones}
            </p>
          </div>
        )}

        {/* Botón Volver */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md"
          >
            ← Volver al Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
