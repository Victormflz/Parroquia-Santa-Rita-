# Parroquia Santa Rita - Web Oficial

Sitio web oficial de la Parroquia Santa Rita en O Barco de Valdeorras, Ourense.

## ✨ Características

- 🎨 Diseño moderno y responsive
- ⚡ Desarrollado con React + TypeScript + Vite
- 📱 Optimizado para dispositivos móviles
- ♿ Accesibilidad mejorada con ARIA labels
- 🚀 Carga rápida con lazy loading de componentes
- 🌐 Soporte multiidioma (ES/GL/EN)
- 🔍 Optimizado para SEO con meta tags Open Graph
- 💨 Build optimizado con code splitting

## 🚀 Inicio Rápido

**Prerequisitos:** Node.js 18+ y npm

### Desarrollo Local

1. **Clonar el repositorio e instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:3000`

### Build de Producción

1. **Construir para producción:**
   ```bash
   npm run build
   ```
   
2. **Previsualizar el build:**
   ```bash
   npm run preview
   ```

## 📦 Despliegue

Este proyecto está listo para desplegar en las siguientes plataformas:

### Vercel (Recomendado)

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

O simplemente conecta tu repositorio en [vercel.com](https://vercel.com)

### Netlify

1. Instala Netlify CLI: `npm i -g netlify-cli`
2. Ejecuta: `netlify deploy --prod`

O arrastra la carpeta `dist` en [netlify.com/drop](https://app.netlify.com/drop)

### Configuración Necesaria

Después del despliegue, actualiza las URLs en:
- `index.html`: Meta tags Open Graph (líneas 15-26)
- Cambia `https://parroquiasantarita.es/` por tu dominio real

## 📁 Estructura del Proyecto

```
parroquia-santa-rita/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, History, Schedule, etc.
│   └── ui/              # Componentes reutilizables (Logo, FadeIn)
├── contexts/            # Language Context
├── i18n/                # Traducciones (ES/GL/EN)
├── public/              # Assets estáticos
├── index.tsx            # Punto de entrada
├── index.html           # Template HTML
├── vite.config.ts       # Configuración de Vite
├── vercel.json          # Configuración Vercel
└── netlify.toml         # Configuración Netlify
```

## 🛠️ Tecnologías

- **React 18** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Iconos modernos

## 📝 Licencia

© 2026 Parroquia Santa Rita. Todos los derechos reservados.
