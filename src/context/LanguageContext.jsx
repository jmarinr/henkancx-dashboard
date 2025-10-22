import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  es: {
    // Header
    darkMode: 'Modo Oscuro',
    settings: 'Configuración',
    
    // Dashboard
    controlPanel: 'Panel de Control',
    monitoringDesc: 'Monitoreo de inspecciones de equipos de telecomunicaciones',
    analytics: 'Analítica',
    
    // Stats Cards
    completed: 'Completadas',
    ofTotal: 'De {total} totales',
    critical: 'Crítico',
    urgent: 'Urgente',
    attention: 'Atención',
    followUp: 'Seguimiento',
    normal: 'Normal',
    ok: 'OK',
    
    // Filters
    all: 'Todas',
    completedFilter: 'Completadas',
    pending: 'Pendiente',
    pendingPlural: 'Pendientes',
    criticals: 'Críticos',
    attentionPlural: 'Atención',
    normals: 'Normales',
    
    // Search
    search: 'Buscar',
    searchPlaceholder: 'Buscar por cliente, sitio, técnico o ID...',
    
    // Views
    grid: 'Cuadrícula',
    list: 'Lista',
    map: 'Mapa',
    
    // Card Details
    client: 'Cliente',
    site: 'Sitio',
    technician: 'Técnico',
    equipment: 'Equipo',
    date: 'Fecha',
    duration: 'Duración',
    minutes: 'min',
    photos: 'fotos',
    
    // Equipment Types
    tower: 'Torre de Telecomunicaciones',
    transmission: 'Equipo de Transmisión',
    power: 'Sistema de Energía',
    network: 'Red y Cableado',
    
    // Analytics
    analyticsTitle: 'Analítica de Gestión',
    analyticsDesc: 'Métricas e indicadores clave de órdenes de trabajo',
    backToDashboard: 'Volver al Dashboard',
    
    // Analytics Metrics
    totalOrders: 'Total de Órdenes',
    ordersInSystem: 'Órdenes en sistema',
    completedOrders: 'Órdenes Completadas',
    successRate: 'tasa de éxito',
    pendingOrders: 'Órdenes Pendientes',
    requireAttention: 'Requieren atención',
    criticalEquipment: 'Equipos Críticos',
    ofCompleted: 'de completadas',
    averageTime: 'Tiempo Promedio',
    perInspection: 'Por inspección',
    activeTechs: 'Técnicos Activos',
    inOperation: 'En operación',
    clientsServed: 'Clientes Atendidos',
    uniquePeriod: 'Únicos este periodo',
    requireAttentionMetric: 'Requieren Atención',
    forFollowUp: 'Para seguimiento',
    
    // Analytics Charts
    stateDistribution: 'Distribución de Estados',
    completionRate: 'Tasa de Completación',
    equipmentCondition: 'Condición de Equipos',
    equipmentInGoodState: 'Equipos en Buen Estado',
    
    // Analytics Tables
    performanceByTech: 'Rendimiento por Técnico',
    tech: 'Técnico',
    total: 'Total',
    completionRateHeader: 'Tasa Completación',
    ordersByClient: 'Órdenes por Cliente',
    
    // Periods
    thisMonth: 'Este Mes',
    quarter: 'Trimestre',
    thisYear: 'Este Año',
    
    // Settings
    settingsTitle: 'Configuración',
    settingsDesc: 'Personaliza tu experiencia',
    languageSection: 'Idioma',
    selectLanguage: 'Selecciona tu idioma preferido',
    spanish: 'Español',
    english: 'English',
    portuguese: 'Português',
    french: 'Français',
    saveChanges: 'Guardar Cambios',
    changesSaved: 'Cambios guardados exitosamente',
  },
  
  en: {
    // Header
    darkMode: 'Dark Mode',
    settings: 'Settings',
    
    // Dashboard
    controlPanel: 'Control Panel',
    monitoringDesc: 'Monitoring of telecommunications equipment inspections',
    analytics: 'Analytics',
    
    // Stats Cards
    completed: 'Completed',
    ofTotal: 'Of {total} total',
    critical: 'Critical',
    urgent: 'Urgent',
    attention: 'Attention',
    followUp: 'Follow-up',
    normal: 'Normal',
    ok: 'OK',
    
    // Filters
    all: 'All',
    completedFilter: 'Completed',
    pending: 'Pending',
    pendingPlural: 'Pending',
    criticals: 'Critical',
    attentionPlural: 'Attention',
    normals: 'Normal',
    
    // Search
    search: 'Search',
    searchPlaceholder: 'Search by client, site, technician or ID...',
    
    // Views
    grid: 'Grid',
    list: 'List',
    map: 'Map',
    
    // Card Details
    client: 'Client',
    site: 'Site',
    technician: 'Technician',
    equipment: 'Equipment',
    date: 'Date',
    duration: 'Duration',
    minutes: 'min',
    photos: 'photos',
    
    // Equipment Types
    tower: 'Telecommunications Tower',
    transmission: 'Transmission Equipment',
    power: 'Power System',
    network: 'Network and Cabling',
    
    // Analytics
    analyticsTitle: 'Management Analytics',
    analyticsDesc: 'Key metrics and indicators for work orders',
    backToDashboard: 'Back to Dashboard',
    
    // Analytics Metrics
    totalOrders: 'Total Orders',
    ordersInSystem: 'Orders in system',
    completedOrders: 'Completed Orders',
    successRate: 'success rate',
    pendingOrders: 'Pending Orders',
    requireAttention: 'Require attention',
    criticalEquipment: 'Critical Equipment',
    ofCompleted: 'of completed',
    averageTime: 'Average Time',
    perInspection: 'Per inspection',
    activeTechs: 'Active Technicians',
    inOperation: 'In operation',
    clientsServed: 'Clients Served',
    uniquePeriod: 'Unique this period',
    requireAttentionMetric: 'Require Attention',
    forFollowUp: 'For follow-up',
    
    // Analytics Charts
    stateDistribution: 'State Distribution',
    completionRate: 'Completion Rate',
    equipmentCondition: 'Equipment Condition',
    equipmentInGoodState: 'Equipment in Good State',
    
    // Analytics Tables
    performanceByTech: 'Performance by Technician',
    tech: 'Technician',
    total: 'Total',
    completionRateHeader: 'Completion Rate',
    ordersByClient: 'Orders by Client',
    
    // Periods
    thisMonth: 'This Month',
    quarter: 'Quarter',
    thisYear: 'This Year',
    
    // Settings
    settingsTitle: 'Settings',
    settingsDesc: 'Customize your experience',
    languageSection: 'Language',
    selectLanguage: 'Select your preferred language',
    spanish: 'Español',
    english: 'English',
    portuguese: 'Português',
    french: 'Français',
    saveChanges: 'Save Changes',
    changesSaved: 'Changes saved successfully',
  },
  
  pt: {
    // Header
    darkMode: 'Modo Escuro',
    settings: 'Configurações',
    
    // Dashboard
    controlPanel: 'Painel de Controle',
    monitoringDesc: 'Monitoramento de inspeções de equipamentos de telecomunicações',
    analytics: 'Analítica',
    
    // Stats Cards
    completed: 'Concluídas',
    ofTotal: 'De {total} totais',
    critical: 'Crítico',
    urgent: 'Urgente',
    attention: 'Atenção',
    followUp: 'Acompanhamento',
    normal: 'Normal',
    ok: 'OK',
    
    // Filters
    all: 'Todas',
    completedFilter: 'Concluídas',
    pending: 'Pendente',
    pendingPlural: 'Pendentes',
    criticals: 'Críticos',
    attentionPlural: 'Atenção',
    normals: 'Normais',
    
    // Search
    search: 'Buscar',
    searchPlaceholder: 'Buscar por cliente, local, técnico ou ID...',
    
    // Views
    grid: 'Grade',
    list: 'Lista',
    map: 'Mapa',
    
    // Card Details
    client: 'Cliente',
    site: 'Local',
    technician: 'Técnico',
    equipment: 'Equipamento',
    date: 'Data',
    duration: 'Duração',
    minutes: 'min',
    photos: 'fotos',
    
    // Equipment Types
    tower: 'Torre de Telecomunicações',
    transmission: 'Equipamento de Transmissão',
    power: 'Sistema de Energia',
    network: 'Rede e Cabeamento',
    
    // Analytics
    analyticsTitle: 'Analítica de Gestão',
    analyticsDesc: 'Métricas e indicadores-chave de ordens de serviço',
    backToDashboard: 'Voltar ao Painel',
    
    // Analytics Metrics
    totalOrders: 'Total de Ordens',
    ordersInSystem: 'Ordens no sistema',
    completedOrders: 'Ordens Concluídas',
    successRate: 'taxa de sucesso',
    pendingOrders: 'Ordens Pendentes',
    requireAttention: 'Requerem atenção',
    criticalEquipment: 'Equipamentos Críticos',
    ofCompleted: 'de concluídas',
    averageTime: 'Tempo Médio',
    perInspection: 'Por inspeção',
    activeTechs: 'Técnicos Ativos',
    inOperation: 'Em operação',
    clientsServed: 'Clientes Atendidos',
    uniquePeriod: 'Únicos neste período',
    requireAttentionMetric: 'Requerem Atenção',
    forFollowUp: 'Para acompanhamento',
    
    // Analytics Charts
    stateDistribution: 'Distribuição de Estados',
    completionRate: 'Taxa de Conclusão',
    equipmentCondition: 'Condição do Equipamento',
    equipmentInGoodState: 'Equipamentos em Bom Estado',
    
    // Analytics Tables
    performanceByTech: 'Desempenho por Técnico',
    tech: 'Técnico',
    total: 'Total',
    completionRateHeader: 'Taxa de Conclusão',
    ordersByClient: 'Ordens por Cliente',
    
    // Periods
    thisMonth: 'Este Mês',
    quarter: 'Trimestre',
    thisYear: 'Este Ano',
    
    // Settings
    settingsTitle: 'Configurações',
    settingsDesc: 'Personalize sua experiência',
    languageSection: 'Idioma',
    selectLanguage: 'Selecione seu idioma preferido',
    spanish: 'Español',
    english: 'English',
    portuguese: 'Português',
    french: 'Français',
    saveChanges: 'Salvar Alterações',
    changesSaved: 'Alterações salvas com sucesso',
  },
  
  fr: {
    // Header
    darkMode: 'Mode Sombre',
    settings: 'Paramètres',
    
    // Dashboard
    controlPanel: 'Tableau de Bord',
    monitoringDesc: 'Surveillance des inspections d\'équipements de télécommunications',
    analytics: 'Analytique',
    
    // Stats Cards
    completed: 'Terminées',
    ofTotal: 'Sur {total} au total',
    critical: 'Critique',
    urgent: 'Urgent',
    attention: 'Attention',
    followUp: 'Suivi',
    normal: 'Normal',
    ok: 'OK',
    
    // Filters
    all: 'Toutes',
    completedFilter: 'Terminées',
    pending: 'En attente',
    pendingPlural: 'En attente',
    criticals: 'Critiques',
    attentionPlural: 'Attention',
    normals: 'Normales',
    
    // Search
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher par client, site, technicien ou ID...',
    
    // Views
    grid: 'Grille',
    list: 'Liste',
    map: 'Carte',
    
    // Card Details
    client: 'Client',
    site: 'Site',
    technician: 'Technicien',
    equipment: 'Équipement',
    date: 'Date',
    duration: 'Durée',
    minutes: 'min',
    photos: 'photos',
    
    // Equipment Types
    tower: 'Tour de Télécommunications',
    transmission: 'Équipement de Transmission',
    power: 'Système d\'Énergie',
    network: 'Réseau et Câblage',
    
    // Analytics
    analyticsTitle: 'Analytique de Gestion',
    analyticsDesc: 'Indicateurs clés et métriques des ordres de travail',
    backToDashboard: 'Retour au Tableau de Bord',
    
    // Analytics Metrics
    totalOrders: 'Total des Ordres',
    ordersInSystem: 'Ordres dans le système',
    completedOrders: 'Ordres Terminés',
    successRate: 'taux de réussite',
    pendingOrders: 'Ordres en Attente',
    requireAttention: 'Nécessitent attention',
    criticalEquipment: 'Équipements Critiques',
    ofCompleted: 'de terminés',
    averageTime: 'Temps Moyen',
    perInspection: 'Par inspection',
    activeTechs: 'Techniciens Actifs',
    inOperation: 'En opération',
    clientsServed: 'Clients Servis',
    uniquePeriod: 'Uniques cette période',
    requireAttentionMetric: 'Nécessitent Attention',
    forFollowUp: 'Pour le suivi',
    
    // Analytics Charts
    stateDistribution: 'Distribution des États',
    completionRate: 'Taux d\'Achèvement',
    equipmentCondition: 'État de l\'Équipement',
    equipmentInGoodState: 'Équipements en Bon État',
    
    // Analytics Tables
    performanceByTech: 'Performance par Technicien',
    tech: 'Technicien',
    total: 'Total',
    completionRateHeader: 'Taux d\'Achèvement',
    ordersByClient: 'Ordres par Client',
    
    // Periods
    thisMonth: 'Ce Mois',
    quarter: 'Trimestre',
    thisYear: 'Cette Année',
    
    // Settings
    settingsTitle: 'Paramètres',
    settingsDesc: 'Personnalisez votre expérience',
    languageSection: 'Langue',
    selectLanguage: 'Sélectionnez votre langue préférée',
    spanish: 'Español',
    english: 'English',
    portuguese: 'Português',
    french: 'Français',
    saveChanges: 'Enregistrer les Modifications',
    changesSaved: 'Modifications enregistrées avec succès',
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key, params = {}) => {
    let text = translations[language][key] || key;
    
    // Replace parameters
    Object.keys(params).forEach(param => {
      text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
