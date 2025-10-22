export const mockInspecciones = [
  {
    id: 'INS-2025-001',
    otId: 'OT-2025-001',
    fecha: '2025-10-20T10:30:00',
    tecnico: 'Juan Pérez',
    cliente: 'Banco Nacional',
    sitio: 'Sucursal Central San José',
    estado: 'completada',
    estadoEquipo: 'normal',
    ubicacion: { latitude: 9.9281, longitude: -84.0907 },
    duracion: 45,
    
    // Datos del equipo
    hodometro: 1250,
    marcaPlanta: 'Himoinsa',
    modeloPlanta: 'HYW-35',
    marcaMotor: 'Perkins',
    modeloMotor: '1104C-44TAG2',
    capacidadKW: 35,
    capacidadHP: 47,
    
    // Mediciones
    voltajeL1N: 112,
    voltajeL2N: 110,
    voltajeL1L2: 222,
    frecuencia: 60,
    presionAceite: 65,
    temperatura: 85,
    
    // Batería
    voltageBatCargador: 13.8,
    voltageBatSinCargador: 12.6,
    estadoBateria: 'Bien',
    
    // Pruebas
    arranqueManual: 'Ok',
    arranqueAutomatico: 'Ok',
    
    // IA
    iaResult: {
      estado: 'normal',
      alarmas: [],
      reemplazos: ['Filtro de aceite cambiado preventivamente'],
      revisiones: ['Próximo cambio de filtro de aire en 250 horas']
    },
    
    observaciones: 'Generador en excelente estado. Mantenimiento preventivo completado.',
    fotos: 4,
    fotosUrls: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80'
    ]
  },
  {
    id: 'INS-2025-002',
    otId: 'OT-2025-002-URG',
    fecha: '2025-10-19T14:20:00',
    tecnico: 'Carlos Rodríguez',
    cliente: 'Fábrica Industrial SA',
    sitio: 'Planta Alajuela',
    estado: 'completada',
    estadoEquipo: 'critico',
    ubicacion: { latitude: 10.0162, longitude: -84.2147 },
    duracion: 90,
    
    // Datos del equipo
    hodometro: 3850,
    marcaPlanta: 'Cummins',
    modeloPlanta: 'C150D6',
    marcaMotor: 'Cummins',
    modeloMotor: '6CTA8.3-G2',
    capacidadKW: 150,
    capacidadHP: 201,
    
    // Mediciones
    voltajeL1N: 95,
    voltajeL2N: 105,
    voltajeL1L2: 200,
    frecuencia: 58,
    presionAceite: 35,
    temperatura: 98,
    
    // Batería
    voltageBatCargador: 13.2,
    voltageBatSinCargador: 11.8,
    estadoBateria: 'Regular',
    
    // Pruebas
    arranqueManual: 'Ok',
    arranqueAutomatico: 'No',
    
    // IA
    iaResult: {
      estado: 'critico',
      alarmas: [
        'Voltaje L1-N fuera de rango (95V)',
        'Temperatura alta (98°C)',
        'Presión de aceite baja (35 PSI)',
        'Batería débil (11.8V)',
        'Frecuencia baja (58 Hz)'
      ],
      reemplazos: [
        'Batería deteriorada - Reemplazo inmediato',
        'Tuberías de combustible con fugas',
        'Cables de batería dañados'
      ],
      revisiones: [
        'Sistema de enfriamiento urgente',
        'Bomba de aceite',
        'Sello principal del motor',
        'Sistema de arranque automático'
      ]
    },
    
    observaciones: 'ATENCIÓN URGENTE: Múltiples fallas críticas detectadas. Se requiere intervención correctiva urgente.',
    fotos: 4,
    fotosUrls: [
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252472-8d0e15f7ebcc?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252868-b93c28c0567f?w=800&q=80'
    ]
  },
  {
    id: 'INS-2025-003',
    otId: 'OT-2025-003',
    fecha: '2025-10-18T09:15:00',
    tecnico: 'María Sánchez',
    cliente: 'Hospital San Rafael',
    sitio: 'Edificio Principal',
    estado: 'completada',
    estadoEquipo: 'atencion',
    ubicacion: { latitude: 9.9326, longitude: -84.0723 },
    duracion: 60,
    
    hodometro: 2100,
    marcaPlanta: 'Kohler',
    modeloPlanta: 'KD200',
    marcaMotor: 'John Deere',
    modeloMotor: '4045TF250',
    capacidadKW: 200,
    capacidadHP: 268,
    
    voltajeL1N: 108,
    voltajeL2N: 112,
    voltajeL1L2: 220,
    frecuencia: 60,
    presionAceite: 55,
    temperatura: 88,
    
    voltageBatCargador: 13.5,
    voltageBatSinCargador: 12.4,
    estadoBateria: 'Bien',
    
    arranqueManual: 'Ok',
    arranqueAutomatico: 'Ok',
    
    iaResult: {
      estado: 'atencion',
      alarmas: ['Voltaje L1-N ligeramente bajo'],
      reemplazos: [],
      revisiones: [
        'Revisar regulador de voltaje',
        'Programar cambio de aceite en 100 horas'
      ]
    },
    
    observaciones: 'Generador operativo. Se detectó ligera variación en voltaje L1. Requiere seguimiento.',
    fotos: 3,
    fotosUrls: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80'
    ]
  },
  {
    id: 'INS-2025-004',
    otId: 'OT-2025-004',
    fecha: '2025-10-17T15:45:00',
    tecnico: 'Roberto Vargas',
    cliente: 'Centro Comercial Plaza',
    sitio: 'Zona Sur',
    estado: 'pendiente',
    estadoEquipo: null,
    ubicacion: { latitude: 9.9200, longitude: -84.0950 },
    duracion: null,
    
    hodometro: null,
    marcaPlanta: 'Caterpillar',
    modeloPlanta: 'C15',
    marcaMotor: null,
    modeloMotor: null,
    capacidadKW: null,
    capacidadHP: null,
    
    voltajeL1N: null,
    voltajeL2N: null,
    voltajeL1L2: null,
    frecuencia: null,
    presionAceite: null,
    temperatura: null,
    
    voltageBatCargador: null,
    voltageBatSinCargador: null,
    estadoBateria: null,
    
    arranqueManual: null,
    arranqueAutomatico: null,
    
    iaResult: null,
    observaciones: null,
    fotos: 0
  },
  {
    id: 'INS-2025-005',
    otId: 'OT-2025-005',
    fecha: '2025-10-16T11:00:00',
    tecnico: 'Ana López',
    cliente: 'Universidad Nacional',
    sitio: 'Campus Heredia',
    estado: 'completada',
    estadoEquipo: 'normal',
    ubicacion: { latitude: 9.9981, longitude: -84.1169 },
    duracion: 50,
    
    hodometro: 890,
    marcaPlanta: 'FG Wilson',
    modeloPlanta: 'P110',
    marcaMotor: 'Perkins',
    modeloMotor: '1106A-70TAG4',
    capacidadKW: 110,
    capacidadHP: 147,
    
    voltajeL1N: 111,
    voltajeL2N: 109,
    voltajeL1L2: 220,
    frecuencia: 60,
    presionAceite: 62,
    temperatura: 82,
    
    voltageBatCargador: 13.9,
    voltageBatSinCargador: 12.7,
    estadoBateria: 'Bien',
    
    arranqueManual: 'Ok',
    arranqueAutomatico: 'Ok',
    
    iaResult: {
      estado: 'normal',
      alarmas: [],
      reemplazos: [],
      revisiones: ['Continuar programa de mantenimiento cada 250 horas']
    },
    
    observaciones: 'Equipo nuevo en excelente condiciones. Todas las pruebas exitosas.',
    fotos: 4,
    fotosUrls: [
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252472-8d0e15f7ebcc?w=800&q=80',
      'https://images.unsplash.com/photo-1621905252868-b93c28c0567f?w=800&q=80',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'
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
