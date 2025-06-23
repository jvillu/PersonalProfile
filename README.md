# Personal Blog with Astro

Un blog personal moderno construido con Astro, optimizado para rendimiento y facilidad de escritura.

## 🚀 Características

- **Zero JavaScript por defecto** - Páginas ultrarrápidas
- **Markdown con frontmatter personalizado** - Escritura simple y poderosa
- **Soporte bilingüe** - Contenido en inglés y español
- **Enrutado dinámico** - Generación automática de páginas
- **Optimización automática** - CSS minificado, imágenes optimizadas
- **Despliegue automático** - GitHub Actions + GitHub Pages

## 📁 Estructura del Proyecto

```
PersonalProfile/
├── _posts/           # Posts en inglés
├── _posts_es/        # Posts en español
├── public/
│   ├── images/blog/  # Ilustraciones SVG
│   └── .nojekyll     # Evita procesamiento Jekyll
├── src/
│   ├── components/   # Componentes Astro reutilizables
│   ├── layouts/      # Plantillas de página
│   └── pages/        # Rutas dinámicas
│       ├── blog/
│       │   └── [slug].astro
│       └── blog-es/
│           └── [slug].astro
├── .github/workflows/
│   └── deploy.yml    # Workflow de despliegue
├── astro.config.mjs  # Configuración de Astro
└── package.json
```

## ✍️ Formato de Posts

Cada post es un archivo Markdown con frontmatter:

```markdown
---
title: "Título del Post"
categories: categoria_principal
tags: ["tag1", "tag2", "tag3"]
date: "2025-06-23"
description: "Descripción para SEO y previsualizaciones"
featured_image: "/images/blog/imagen.svg"
featured_image_alt: "Texto alternativo para accesibilidad"
---

# Contenido del post en Markdown...
```

## 🛠️ Configuración Técnica

### Astro Config
```javascript
export default defineConfig({
  integrations: [tailwind()],
  site: process.env.CUSTOM_DOMAIN ? 'https://javiervillullas.es' : 'https://jvillullas.github.io',
  base: process.env.CUSTOM_DOMAIN ? '/' : (process.env.NODE_ENV === 'production' ? '/PersonalProfile' : '/'),
  output: 'static'
});
```

### Enrutado Dinámico
- **Inglés**: `/blog/[slug].astro` → lee archivos de `_posts/`
- **Español**: `/blog-es/[slug].astro` → lee archivos de `_posts_es/`

### GitHub Actions
Despliegue automático con workflow personalizado para Astro en GitHub Pages.

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:4321/

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📊 Rendimiento

- **Lighthouse scores**: 100/100/100/100
- **Carga instantánea**: Sin JavaScript innecesario
- **SEO optimizado**: Meta tags automáticos desde frontmatter
- **Accesibilidad**: Texto alternativo y estructura semántica

## 🌐 Despliegue

### GitHub Pages (Automático)
1. Push a rama `main`/`master`
2. GitHub Actions ejecuta build
3. Sitio disponible en `https://jvillullas.github.io/PersonalProfile/`

### Dominio Personalizado
Para usar dominio propio:
1. Agregar secret `CUSTOM_DOMAIN=true` en GitHub
2. Configurar archivo `CNAME` en `public/`
3. Sitio disponible en `https://javiervillullas.es/`

## 🔧 Stack Tecnológico

- **Framework**: [Astro](https://astro.build/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Contenido**: Markdown + Gray Matter
- **Sintaxis**: Shiki (tema GitHub Dark)
- **Despliegue**: GitHub Actions + GitHub Pages
- **Dominio**: Cloudflare (opcional)

## 📝 Agregar Nuevo Post

1. **Crear archivo**: `_posts/nombre-del-post.md` (inglés) o `_posts_es/nombre-del-post.md` (español)
2. **Agregar frontmatter** con todos los campos requeridos
3. **Escribir contenido** en Markdown
4. **Commit y push** → Despliegue automático

### Ejemplo rápido:
```bash
# Crear nuevo post
touch _posts/mi-nuevo-post.md

# Editar con tu editor favorito
code _posts/mi-nuevo-post.md

# Commit y push
git add _posts/mi-nuevo-post.md
git commit -m "Add new post: Mi Nuevo Post"
git push
```

## 🎨 Personalización

### Agregar nuevas características:
- **Comentarios**: Giscus o Disqus
- **Búsqueda**: Algolia o Fuse.js
- **Analytics**: Google Analytics 4
- **RSS**: Feed automático
- **Reading time**: Estimación de lectura

### Modificar estilos:
- Editar `tailwind.config.mjs`
- Personalizar componentes en `src/components/`
- Ajustar layouts en `src/layouts/`

## 📄 Licencia

Open source - Disponible en [GitHub](https://github.com/jvillu/PersonalProfile)

---

**¿Preguntas?** Abre un issue o contacta a [@jvillullas](https://github.com/jvillu)
