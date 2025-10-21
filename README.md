# 🎯 HenkanCX Dashboard

Dashboard moderno de monitoreo y gestión de inspecciones de generadores para el sistema HenkanCX Synk.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC.svg)

## ✨ Características

### 🎨 Diseño Moderno
- **Interfaz limpia y user-friendly** con fondo blanco y tema oscuro
- **Sistema de colores semánticos:**
  - 🔴 Rojo: Equipos críticos
  - 🟡 Amarillo: Requieren atención
  - 🟢 Verde: Estado normal
  - 🔵 Azul: Información general
- **Responsive design** optimizado para móvil, tablet y desktop
- **Dark mode** con transiciones suaves

### 📊 Dashboard Completo
- **Estadísticas en tiempo real:**
  - Total de inspecciones
  - Equipos críticos
  - Equipos que requieren atención
  - Equipos en estado normal
- **Filtros inteligentes** por estado y condición
- **Tarjetas de inspección** con información resumida

### 🔍 Vista Detallada de Inspecciones
Visualización completa de todos los campos del formulario:

#### 📋 Información General
- OT ID y código de inspección
- Cliente y sitio
- Técnico asignado
- Fecha y duración
- Ubicación GPS

#### ⚡ Datos del Generador
- Hodómetro
- Marca y modelo de planta
- Marca y modelo de motor
- Números de serie
- Capacidades (KW, HP, AMP)

#### 📊 Mediciones Eléctricas
- Voltajes (L1-N, L2-N, L1-L2)
- Neutral a tierra
- Corrientes por fase
- Frecuencia

#### 🔋 Sistema de Batería
- Estado físico
- Voltajes con y sin cargador
- Voltaje del alternador
- Estado de bornes y cables
- Nivel de electrolito

#### 🛠️ Lecturas y Pruebas
- Presión de aceite
- Temperatura del motor
- Nivel de combustible
- Pruebas de arranque (manual/automático)
- Verificación de alarmas

#### 🌱 Mediciones Ambientales
- Nivel de ruido
- Emanación de gases (CO, HCM)
- Alícuota

#### 🔧 Insumos y Mantenimiento
- Filtros cambiados (aceite, aire, diesel)
- Estado de tanques y tuberías

### 🤖 Análisis con IA
- **Clasificación automática** del estado del equipo
- **Detección de alarmas críticas**
- **Recomendaciones de reemplazos**
- **Sugerencias de revisión preventiva**
- **Vista categorizada** de insights

### 📝 Observaciones del Técnico
- Texto completo de observaciones
- Notas importantes destacadas

## 🚀 Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Iconos modernos
- **date-fns** - Manejo de fechas
- **Context API** - Gestión de estado

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jmarinr/henkancx-dashboard.git
cd henkancx-dashboard

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint
npm run lint
```

## 📁 Estructura del Proyecto

```
henkancx-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx          # Vista principal
│   │   ├── Header.jsx             # Header con theme switcher
│   │   ├── InspeccionCard.jsx     # Tarjeta de inspección
│   │   └── InspeccionDetalle.jsx  # Vista detallada completa
│   ├── context/
│   │   └── ThemeContext.jsx       # Contexto de tema claro/oscuro
│   ├── data/
│   │   └── mockData.js            # Datos de prueba
│   ├── App.jsx                    # Componente raíz
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Estilos globales
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Sistema de Colores

### Modo Claro
- Background: `#FFFFFF`
- Text: `#111827`
- Borders: `#E5E7EB`

### Modo Oscuro
- Background: `#111827`
- Text: `#F9FAFB`
- Borders: `#374151`

### Estados
- 🔴 Crítico: `#DC2626` / `#FEE2E2`
- 🟡 Atención: `#F59E0B` / `#FEF3C7`
- 🟢 Normal: `#10B981` / `#D1FAE5`
- 🔵 Info: `#3B82F6` / `#DBEAFE`

## 🔗 Integración

Este dashboard está diseñado para integrarse con:
- **Frontend de inspección:** https://mvp-ot-crm.henkancx.com/
- **API Backend:** (próximamente)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🌙 Theme Switcher

El tema se guarda automáticamente en `localStorage` y persiste entre sesiones.

```javascript
// Alternar tema
const { theme, toggleTheme } = useTheme();
```

## 📊 Datos Mock

El dashboard incluye 5 inspecciones de ejemplo con diferentes estados:
1. Inspección normal - Banco Nacional
2. Inspección crítica - Fábrica Industrial
3. Inspección con atención - Hospital San Rafael
4. Inspección pendiente - Centro Comercial
5. Inspección normal - Universidad Nacional

## 🎯 Roadmap

- [ ] Conexión con API real
- [ ] Exportación de reportes PDF
- [ ] Gráficos de tendencias
- [ ] Notificaciones en tiempo real
- [ ] Filtros avanzados
- [ ] Búsqueda global
- [ ] Comparación de inspecciones
- [ ] Sistema de usuarios y roles

## 👥 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte del ecosistema HenkanCX.

## 📧 Contacto

**HenkanCX Team**
- GitHub: [@jmarinr](https://github.com/jmarinr)

---

Hecho con ❤️ por el equipo de HenkanCX
