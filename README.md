# 🎧 Podcast App - Challenge Técnico Longevo

Aplicación desarrollada como parte del challenge técnico de Longevo. Permite buscar y escuchar podcasts utilizando la API de [Podcast Index](https://podcastindex.org/), con diseño responsivo, experiencia fluida y buenas prácticas de desarrollo moderno.

# 🚀 Tech Stack

-   ⚛️ React 18
-   ⚡ Vite
-   🟦 TypeScript
-   💨 TailwindCSS
-   🔁 Zustand (state management)
-   🔍 React Query y Axios (TanStack Query)
-   🧪 Vitest + Testing Library

# 🗂️ Estructura del Proyecto

```bash
src/
├── assets/            # Íconos, imágenes
├── components/        # Componentes generales
│   ├── common/        # Componentes genéricos y reutilizables
│   ├── modals/        # Modales como PlayerModal, DetailModal
│   └── ui/            # Elementos UI base (Botones, Skeleton, etc)
├── hooks/             # Hooks personalizados
├── sections/          # Entradas de secciones principales
├── stores/            # Zustand stores (usePlayerStore, etc)
├── tests/
│   └── mocks/         # Mocks separados para hooks y stores
├── lib/               # Funcion de Axios (podcastApi.ts)
├── services/          # Lógica de integración con API de Podcast Index
└── type/              # Tipados compartidos (Episode, Podcast, ApiResponse)
```

# 🎧 Funcionalidades

-   Mostrar podcasts en tendencia
-   Buscar por nombre o tema
-   Guardar Podcast como favoritos
-   Ver detalles de un podcast y sus episodios
-   Reproducir episodios en un modal flotante
-   Marcar episodios como favoritos
-   Paginación infinita en listas de episodios

# 📌 Aclaraciones técnicas

-   📄 Paginación infinita: La API de Podcast Index no dispone de un parámetro de página (page) para obtener resultados por partes. Para simular scroll infinito, se realiza una carga inicial de múltiples episodios y se manejan de forma progresiva en el frontend.

-   📱 Vista Mobile y episodios: En la vista móvil, los resultados de podcasts no incluyen la cantidad de episodios disponibles. Debido a esta limitación, ese valor fue representado con un número fijo hardcodeado.

# Clonar el repositorio

-   git clone https://github.com/ramirez2303/longevo-challenge-podcast-app.git
-   cd longevo-challenge-podcast-app

# Instalar dependencias (preferentemente con yarn)

-   yarn

# Iniciar el servidor de desarrollo

-   yarn dev

# Ejecutar tests unitarios

-   yarn test
