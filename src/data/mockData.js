export const mockInspecciones = [
  {
    id: 'INS-2025-001',
    otId: 'OT-2025-001',
    fecha: '2025-10-20T10:30:00',
    tecnico: 'Carlos Rodríguez',
    cliente: 'Cable & Wireless Panamá',
    sitio: 'Torre Costa del Este',
    tipoEquipo: 'tower',
    equipoDetalle: 'Torre monopolo 45m',
    estado: 'completada',
    estadoEquipo: 'normal',
    ubicacion: { latitude: 9.0575, longitude: -79.4886 },
    duracion: 55,
    
    hodometro: 1850,
    marcaPlanta: 'Rohn',
    modeloPlanta: 'SSV-45',
    altura: 45,
    
    inclinacion: 0.3,
    tensionRetenidas: 'Óptima',
    estadoEstructura: 'Bueno',
    corrosion: 'Leve',
    
    voltajeL1N: 120,
    voltajeL2N: 118,
    voltajeL1L2: 238,
    frecuencia: 60,
    
    iaResult: {
      estado: 'normal',
      alarmas: [],
      reemplazos: ['Pintura anticorrosiva aplicada preventivamente'],
      revisiones: ['Próxima inspección estructural en 6 meses']
    },
    
    observaciones: 'Torre en excelente estado. Estructura sólida y bien mantenida.',
    fotos: 6
  },
  {
    id: 'INS-2025-002',
    otId: 'OT-2025-002',
    fecha: '2025-10-19T14:15:00',
    tecnico: 'María Gonzalez',
    cliente: 'Claro Panamá',
    sitio: 'Estación Base Albrook',
    tipoEquipo: 'transmission',
    equipoDetalle: 'Antena sectorial 4G/5G',
    estado: 'completada',
    estadoEquipo: 'critico',
    ubicacion: { latitude: 9.0026, longitude: -79.5447 },
    duracion: 75,
    
    hodometro: 3250,
    marcaPlanta: 'Ericsson',
    modeloPlanta: 'AIR 6488',
    frecuenciaBanda: '1800 MHz',
    potenciaTransmision: '40W',
    
    vswr: 2.8,
    potenciaReflejada: 15,
    potenciaSalida: 35,
    temperatura: 68,
    
    voltajeL1N: 48,
    voltajeL2N: 48,
    voltajeL1L2: 48,
    frecuencia: null,
    
    iaResult: {
      estado: 'critico',
      alarmas: [
        'VSWR fuera de rango aceptable (>2.0)',
        'Temperatura operativa alta',
        'Potencia reflejada elevada'
      ],
      reemplazos: ['Cable feeder debe ser reemplazado urgentemente'],
      revisiones: ['Verificar conectores y jumpers inmediatamente']
    },
    
    observaciones: 'URGENTE: Cable feeder con alta potencia reflejada. Afecta calidad de señal. Requiere reemplazo inmediato.',
    fotos: 8
  },
  {
    id: 'INS-2025-003',
    otId: 'OT-2025-003',
    fecha: '2025-10-18T09:00:00',
    tecnico: 'Roberto Castillo',
    cliente: 'Digicel Panamá',
    sitio: 'Centro de Datos Tumba Muerto',
    tipoEquipo: 'power',
    equipoDetalle: 'UPS Trifásico + Banco de baterías',
    estado: 'completada',
    estadoEquipo: 'atencion',
    ubicacion: { latitude: 9.0369, longitude: -79.5020 },
    duracion: 90,
    
    hodometro: 18500,
    marcaPlanta: 'APC by Schneider',
    modeloPlanta: 'Symmetra PX 100kW',
    capacidadKW: 100,
    capacidadHP: 134,
    
    cargaBateria: 78,
    voltajeEntrada: 220,
    voltajeSalida: 220,
    corrienteCarga: 180,
    factorPotencia: 0.95,
    temperaturaAmbiente: 24,
    
    voltajeL1N: 220,
    voltajeL2N: 218,
    voltajeL1L2: 438,
    frecuencia: 60,
    
    voltageBatCargador: 54.5,
    voltageBatSinCargador: 52.8,
    estadoBateria: 'Requiere atención',
    vidaUtilEstimada: '65%',
    
    iaResult: {
      estado: 'atencion',
      alarmas: ['Capacidad de batería por debajo del 80%'],
      reemplazos: ['Considerar reemplazo de banco de baterías en próximos 3 meses'],
      revisiones: ['Monitorear capacidad de batería semanalmente']
    },
    
    observaciones: 'UPS operando correctamente. Baterías mostrando desgaste normal. Planificar reemplazo preventivo.',
    fotos: 5
  },
  {
    id: 'INS-2025-004',
    otId: 'OT-2025-004',
    fecha: '2025-10-17T15:45:00',
    tecnico: 'Ana Morales',
    cliente: 'Tigo Panamá',
    sitio: 'Nodo Fibra Óptica Chorrera',
    tipoEquipo: 'network',
    equipoDetalle: 'Empalme de fibra óptica 144 hilos',
    estado: 'pendiente',
    estadoEquipo: null,
    ubicacion: { latitude: 8.8804, longitude: -79.7835 },
    duracion: null,
    
    hodometro: null,
    marcaPlanta: 'Corning',
    modeloPlanta: 'OptiTap',
    capacidadHilos: 144,
    tipoFibra: 'Monomodo G.652D',
    
    voltajeL1N: null,
    voltajeL2N: null,
    voltajeL1L2: null,
    frecuencia: null,
    
    voltageBatCargador: null,
    voltageBatSinCargador: null,
    estadoBateria: null,
    
    iaResult: null,
    observaciones: null,
    fotos: 0
  },
  {
    id: 'INS-2025-005',
    otId: 'OT-2025-005',
    fecha: '2025-10-16T11:00:00',
    tecnico: 'Luis Hernández',
    cliente: 'Cable & Wireless Panamá',
    sitio: 'Torre Cerro Azul',
    tipoEquipo: 'tower',
    equipoDetalle: 'Torre autosoportada 60m',
    estado: 'completada',
    estadoEquipo: 'normal',
    ubicacion: { latitude: 9.2333, longitude: -79.3667 },
    duracion: 65,
    
    hodometro: 2100,
    marcaPlanta: 'Valmont',
    modeloPlanta: 'STS-60',
    altura: 60,
    
    inclinacion: 0.2,
    tensionRetenidas: 'N/A',
    estadoEstructura: 'Excelente',
    corrosion: 'Ninguna',
    
    voltajeL1N: 119,
    voltajeL2N: 121,
    voltajeL1L2: 240,
    frecuencia: 60,
    
    iaResult: {
      estado: 'normal',
      alarmas: [],
      reemplazos: [],
      revisiones: ['Inspección visual periódica recomendada cada 4 meses']
    },
    
    observaciones: 'Torre autosoportada en perfecto estado. Estructura nueva y bien mantenida.',
    fotos: 4
  },
  {
    id: 'INS-2025-006',
    otId: 'OT-2025-006',
    fecha: '2025-10-15T13:30:00',
    tecnico: 'Carlos Rodríguez',
    cliente: 'Claro Panamá',
    sitio: 'Generador Respaldo Tocumen',
    tipoEquipo: 'power',
    equipoDetalle: 'Generador Diésel 150kW',
    estado: 'completada',
    estadoEquipo: 'normal',
    ubicacion: { latitude: 9.0636, longitude: -79.3834 },
    duracion: 45,
    
    hodometro: 8750,
    marcaPlanta: 'Caterpillar',
    modeloPlanta: 'C7.1',
    capacidadKW: 150,
    capacidadHP: 201,
    
    presionAceite: 55,
    temperatura: 82,
    nivelCombustible: 85,
    
    voltajeL1N: 277,
    voltajeL2N: 276,
    voltajeL1L2: 480,
    frecuencia: 60,
    
    voltageBatCargador: 28.5,
    voltageBatSinCargador: 27.2,
    estadoBateria: 'Bueno',
    
    arranqueManual: 'Ok',
    arranqueAutomatico: 'Ok',
    
    iaResult: {
      estado: 'normal',
      alarmas: [],
      reemplazos: ['Filtros de aceite y aire cambiados preventivamente'],
      revisiones: ['Próximo servicio preventivo en 500 horas']
    },
    
    observaciones: 'Generador en excelente condición. Mantenimiento preventivo completado.',
    fotos: 5
  },
  {
    id: 'INS-2025-007',
    otId: 'OT-2025-007',
    fecha: '2025-10-14T10:15:00',
    tecnico: 'María Gonzalez',
    cliente: 'Digicel Panamá',
    sitio: 'Aire Acondicionado Site Villa Zaita',
    tipoEquipo: 'power',
    equipoDetalle: 'Aire acondicionado de precisión',
    estado: 'completada',
    estadoEquipo: 'atencion',
    ubicacion: { latitude: 9.1453, longitude: -79.5199 },
    duracion: 40,
    
    hodometro: 15200,
    marcaPlanta: 'Vertiv Liebert',
    modeloPlanta: 'PDX-30',
    capacidadBTU: 30000,
    
    temperaturaRetorno: 28,
    temperaturaSalida: 16,
    humedadRelativa: 55,
    presionRefrigerante: 245,
    corrienteCompresor: 18.5,
    
    voltajeL1N: 220,
    voltajeL2N: 218,
    voltajeL1L2: 438,
    frecuencia: 60,
    
    iaResult: {
      estado: 'atencion',
      alarmas: ['Corriente del compresor ligeramente elevada'],
      reemplazos: [],
      revisiones: ['Verificar carga de refrigerante y limpiar condensador']
    },
    
    observaciones: 'Sistema de enfriamiento funcional pero requiere mantenimiento. Condensador con acumulación de polvo.',
    fotos: 3
  },
  {
    id: 'INS-2025-008',
    otId: 'OT-2025-008',
    fecha: '2025-10-13T08:45:00',
    tecnico: 'Roberto Castillo',
    cliente: 'Tigo Panamá',
    sitio: 'Radio Enlace Miraflores',
    tipoEquipo: 'transmission',
    equipoDetalle: 'Radio microondas punto a punto',
    estado: 'completada',
    estadoEquipo: 'normal',
    ubicacion: { latitude: 9.0045, longitude: -79.4753 },
    duracion: 50,
    
    hodometro: 4100,
    marcaPlanta: 'Ceragon',
    modeloPlanta: 'IP-50C',
    frecuenciaBanda: '18 GHz',
    capacidadMbps: 1000,
    
    potenciaTransmision: 20,
    potenciaRecepcion: -45,
    rsl: -45,
    snr: 35,
    ber: 0.000001,
    
    voltajeL1N: 48,
    voltajeL2N: null,
    voltajeL1L2: null,
    frecuencia: null,
    
    iaResult: {
      estado: 'normal',
      alarmas: [],
      reemplazos: [],
      revisiones: ['Monitoreo mensual de nivel de señal']
    },
    
    observaciones: 'Enlace de microondas operando óptimamente. Señal fuerte y estable.',
    fotos: 4
  }
];

export const getEstadisticas = () => {
  const total = mockInspecciones.length;
  const completadas = mockInspecciones.filter(i => i.estado === 'completada').length;
  const pendientes = mockInspecciones.filter(i => i.estado === 'pendiente').length;
  
  const criticos = mockInspecciones.filter(i => i.estadoEquipo === 'critico').length;
  const atencion = mockInspecciones.filter(i => i.estadoEquipo === 'atencion').length;
  const normales = mockInspecciones.filter(i => i.estadoEquipo === 'normal').length;
  
  return {
    total,
    completadas,
    pendientes,
    criticos,
    atencion,
    normales,
    porcentajeCompletado: Math.round((completadas / total) * 100)
  };
};
