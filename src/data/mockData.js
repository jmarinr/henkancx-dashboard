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
    fotos: 6,
    fotosUrls: [
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80', // Torre telecomunicaciones
      'https://images.unsplash.com/photo-1530735759451-4b1064362e4c?w=800&q=80', // Antenas en torre
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&q=80', // Torre desde abajo
      'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&q=80', // Detalle estructura
      'https://images.unsplash.com/photo-1530735729515-9cf38b76467e?w=800&q=80', // Torre urbana
      'https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=800&q=80'  // Vista completa torre
    ]
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
    fotos: 8,
    fotosUrls: [
      'https://images.unsplash.com/photo-1519810755548-39cd217da494?w=800&q=80', // Antena sectorial
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', // Equipos telecomunicaciones
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', // Tecnología RF
      'https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=800&q=80', // Torre con antenas
      'https://images.unsplash.com/photo-1530735729515-9cf38b76467e?w=800&q=80', // Antenas múltiples
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', // Equipos rack
      'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=800&q=80', // Cables y conexiones
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'  // Detalle cable feeder
    ]
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
    fotos: 5,
    fotosUrls: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', // UPS rack
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80', // Banco baterías
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80', // Data center power
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', // Sistemas eléctricos
      'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=800&q=80'  // Conexiones eléctricas
    ]
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
    fotos: 0,
    fotosUrls: []
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
    fotos: 4,
    fotosUrls: [
      'https://images.unsplash.com/photo-1530735859710-1375c7ae1b93?w=800&q=80', // Torre autosoportada
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80', // Vista torre
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=800&q=80', // Estructura torre
      'https://images.unsplash.com/photo-1530735759451-4b1064362e4c?w=800&q=80'  // Antenas torre
    ]
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
    fotos: 5,
    fotosUrls: [
      'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?w=800&q=80', // Generador industrial
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', // Panel control
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80', // Sistema energía
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', // Equipos eléctricos
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'  // Detalles técnicos
    ]
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
    fotos: 3,
    fotosUrls: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80', // HVAC sistema
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80', // Climatización
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'  // Equipos cooling
    ]
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
    fotos: 4,
    fotosUrls: [
      'https://images.unsplash.com/photo-1519810755548-39cd217da494?w=800&q=80', // Antena microondas
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80', // Radio enlace
      'https://images.unsplash.com/photo-1530735729515-9cf38b76467e?w=800&q=80', // Antenas parabólicas
      'https://images.unsplash.com/photo-1558346547-4439467bd1d5?w=800&q=80'  // Torre con radio
    ]
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
