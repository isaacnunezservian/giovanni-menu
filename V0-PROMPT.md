# Prompt para V0.dev - Plantilla Landing Page Gastronomía

## Solicitud Principal

Crea una landing page moderna y completamente funcional para locales gastronómicos (restaurantes, heladerías, cafeterías, etc.) usando Next.js 15 App Router, React 18, TypeScript y Tailwind CSS. La página debe ser una aplicación de página única (SPA) con navegación smooth-scroll, 100% responsive y lista para producción.

---

## Stack Tecnológico Específico

```json
{
  "framework": "Next.js 15.0.3+ (App Router)",
  "react": "^18.3.1",
  "typescript": "^5",
  "styling": "Tailwind CSS ^3.4.14",
  "fonts": "next/font/google",
  "analytics": "@vercel/analytics",
  "utilities": ["clsx", "tailwind-merge", "class-variance-authority"]
}
```

### Configuraciones Requeridas:

**next.config.mjs:**
```javascript
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Para deployment rápido
  },
  images: {
    unoptimized: true, // Para static export
  },
}
```

**tailwind.config.js:**
- Usar sistema de colores con variables CSS HSL
- Incluir `tailwindcss-animate` plugin
- Configurar 3 font families customizables vía CSS variables

---

## Arquitectura del Proyecto

### Estructura de Carpetas:
```
proyecto/
├── app/
│   ├── globals.css          # Estilos globales + paleta colores
│   ├── layout.tsx            # Layout con tipografías
│   └── page.tsx              # Página principal (imports componentes)
├── components/
│   ├── header.tsx            # Navegación sticky
│   ├── hero.tsx              # Hero principal
│   ├── about.tsx             # Sección nosotros
│   ├── gallery.tsx           # Galería de fotos
│   ├── menu.tsx              # Menú/productos
│   └── footer.tsx            # Footer con contacto
├── data/
│   └── content-data.tsx      # Datos configurables del sitio
├── lib/
│   └── utils.ts              # Utilidad cn() para clsx
└── public/
    └── images/               # Placeholder images
```

---

## Secciones Detalladas

### 1. HEADER (Sticky Navigation)

**Características:**
- Posición fixed, z-index alto, backdrop-blur para glassmorphism
- Logo (imagen placeholder) + nombre del negocio clickeable
- Navegación desktop con links a: Nosotros, Galería, Menú, Contacto
- Menú hamburguesa responsive para mobile (<768px)
- Smooth scroll con `element.scrollIntoView({ behavior: "smooth" })`
- Animación de underline en hover para links desktop
- Botón CTA destacado para "Contacto" con gradient background

**Estilos específicos:**
- Background: `bg-white/95 backdrop-blur-xl`
- Border: `border-b border-primary-100`
- Altura: `h-20` (80px)
- Mobile menu: slide-in animation de Tailwind
- Estado hover en links: underline animation con transition

**Código de navegación:**
```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth" })
  setIsOpen(false) // cerrar mobile menu
}
```

---

### 2. HERO Section

**Características:**
- Full viewport height o near-full (min-h-screen)
- Imagen de fondo con overlay gradient oscuro
- Logo grande o imagen principal centrada
- Título principal (H1) con fuente display bold y text-shadow
- Subtítulo descriptivo
- Badge o pill con ubicación/especialidad
- 2 CTAs: primario (Ver Menú) y secundario (Ubicación)
- Elementos decorativos flotantes (emojis animados) con keyframes CSS

**Estructura visual:**
```
[Imagen de fondo con overlay]
  └─ Contenedor centrado
      ├─ Logo/Imagen (opcional)
      ├─ Título Principal (fuente display, 4xl-7xl)
      ├─ Subtítulo (texto descriptivo)
      ├─ Badge (ubicación con icono)
      └─ CTAs (2 botones horizontal)
```

**Animaciones:**
- Emojis flotantes: `animate-float` con diferentes delays
- Fade-in de contenido al cargar
- Hover effects en botones con scale y shadow

**CSS Keyframes necesarios en globals.css:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

---

### 3. ABOUT / NOSOTROS Section

**Características:**
- Background con gradientes sutiles (from-white via-[color]-50/20 to-[color]-50/30)
- Título de sección con decoración (underline gradient)
- Párrafo introductorio centrado (max-w-2xl)
- Grid de 3 cards con información clave
- Lista de 3 features destacados con iconos
- Textura de fondo sutil con SVG data-uri

**Cards estructura:**
- Grid responsive: `grid-cols-1 md:grid-cols-3`
- Background blanco con border y shadow
- Hover effects: transform, shadow increase, border color change
- Icono/emoji grande en top
- Título y descripción

**Features lista:**
- Flex con iconos a la izquierda
- Check marks o iconos relevantes
- Texto bold para highlights

---

### 4. GALLERY / GALERÍA Section

**Características:**
- Grid de imágenes estilo polaroid o cards modernas
- Next/Image con `fill` y `object-cover`
- Responsive grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Cada imagen con:
  - Frame blanco tipo polaroid
  - Padding generoso (p-4 pb-16)
  - Shadow elevada
  - Caption/título debajo
  - Hover: scale-105, increased shadow
- Rotación sutil aleatoria para efecto orgánico
- Elemento decorativo "tape" arriba de cada polaroid

**Implementación de imágenes:**
```typescript
const images = [
  { src: "/images/placeholder-1.jpg", alt: "Descripción", caption: "Título" },
  // ... más imágenes
]

// Renderizar con Next Image
<Image 
  src={image.src} 
  alt={image.alt} 
  fill 
  className="object-cover group-hover:scale-110 transition-transform"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

**CTA al final:**
- Link a Instagram con botón gradient
- Icono de Instagram SVG
- Texto "@usuario_placeholder"

---

### 5. MENU / PRODUCTOS Section

**Características:**
- Categorización de productos/platos
- Cada categoría con:
  - Icono emoji grande y animado
  - Título de categoría con underline decorativo
  - Grid o lista de items
- Cada item del menú:
  - Card con border y hover effects
  - Nombre del producto (bold, grande)
  - Descripción (si aplica)
  - Precio a la derecha (fuente display, bold)
  - Hover: lift effect, border color change, shadow

**Estructura de datos (data/content-data.tsx):**
```typescript
export const menuData = [
  {
    category: "Categoría 1",
    icon: "🍕", // Emoji
    items: [
      { 
        name: "Producto 1", 
        description: "Descripción opcional", 
        price: "1500" // String para permitir "Consultar"
      },
    ],
  },
]
```

**Separadores entre categorías:**
- Líneas decorativas con gradientes
- Elementos decorativos centrales (diamantes, iconos)

**Nota informativa al final:**
- Card destacada con gradient background
- Mensaje sobre precios o información adicional
- Icono de teléfono o WhatsApp

---

### 6. FOOTER / CONTACTO Section

**Características:**
- Background con gradient oscuro o color de marca
- Grid responsive con 3-4 columnas (mobile: 1 columna)

**Columnas:**
1. **Información del Local:**
   - Logo pequeño
   - Nombre y descripción breve
   - Dirección completa con icono

2. **Horarios:**
   - Lista de días y horarios
   - Formato: "Lunes a Viernes: 10:00 - 22:00"

3. **Contacto:**
   - Teléfono clickeable (tel:)
   - Email clickeable (mailto:)
   - WhatsApp con link directo

4. **Redes Sociales:**
   - Iconos de Instagram, Facebook, etc.
   - Links externos con target="_blank"

**Google Maps:**
- iframe embebido full-width
- Altura fija (h-64 o h-80)
- Rounded corners y shadow

**Copyright:**
- Línea divisoria superior
- Texto centrado pequeño
- Año dinámico con `{new Date().getFullYear()}`

---

## Sistema de Diseño / Design System

### Paleta de Colores (Customizable)

**globals.css - Variables CSS:**
```css
:root {
  /* Base */
  --background: 0 0% 98%;
  --foreground: 280 2% 15%;
  
  /* Color principal de marca (personalizable) */
  --primary: 25 95% 53%; /* HSL sin hsl() wrapper */
  --primary-foreground: 0 0% 100%;
  
  /* Color secundario */
  --secondary: 15 35% 85%;
  --secondary-foreground: 25 25% 20%;
  
  /* Acentos */
  --accent: 80 60% 96%;
  --accent-foreground: 25 25% 20%;
  
  /* Neutrales */
  --muted: 280 10% 95%;
  --muted-foreground: 280 5% 45%;
  
  /* Bordes */
  --border: 280 5% 90%;
  --radius: 0.75rem;
}
```

**Uso en Tailwind:**
- `bg-primary`, `text-primary`, `border-primary`
- Variantes automáticas: `primary-50`, `primary-100`, etc.

### Tipografías

**3 font families con Google Fonts:**
```typescript
// app/layout.tsx
import { Quicksand, Fredoka, Playfair_Display } from 'next/font/google'

const sans = Quicksand({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap'
})

const display = Fredoka({ 
  subsets: ["latin"], 
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap'
})

const serif = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  weight: ["400", "700"],
  display: 'swap'
})
```

**Uso:**
- Body text: `font-sans` (Quicksand o similar)
- Headings: `font-display` (Fredoka o similar)
- Accents: `font-serif` (Playfair Display o similar)

### Componentes Reutilizables

**Botones:**
- Primario: gradient background, shadow, hover:scale
- Secundario: outline con border-2
- Todos con `rounded-full` o `rounded-lg`
- Padding: `px-6 py-3` o `px-8 py-4`

**Cards:**
- Background: `bg-white/90 backdrop-blur-sm`
- Border: `border-2 border-[color]-100`
- Shadow: `shadow-lg hover:shadow-xl`
- Hover: `transform hover:-translate-y-1`
- Border radius: `rounded-2xl`

**Separadores decorativos:**
```typescript
<div className="flex items-center justify-center gap-4">
  <div className="h-px bg-gradient-to-r from-transparent to-[color]-400/50 w-24" />
  <span className="text-3xl">🎨</span>
  <div className="h-px bg-gradient-to-l from-transparent to-[color]-400/50 w-24" />
</div>
```

---

## Animaciones y Efectos

### Custom Animations (globals.css)

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes melt {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0.7; transform: translateY(3px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-melt {
  animation: melt 2s ease-in-out infinite alternate;
}
```

### Hover Effects Pattern

**Aplicar a cards y elementos interactivos:**
```typescript
className="group relative
  transform hover:scale-105 
  transition-all duration-300
  hover:shadow-xl hover:shadow-[color]-100
  border-2 border-[color]-100 hover:border-[color]-400"
```

### Animation Delays

**Para elementos múltiples (emojis, cards):**
```typescript
style={{ animationDelay: `${index * 0.2}s` }}
```

---

## Responsive Design

### Breakpoints Tailwind:
- **Mobile**: < 640px (default)
- **Tablet**: sm: 640px+
- **Desktop**: md: 768px+
- **Large**: lg: 1024px+
- **XL**: xl: 1280px+

### Patterns por sección:

**Header:**
- Desktop: navegación horizontal visible
- Mobile: hamburger menu con overlay

**Hero:**
- Mobile: stack vertical, texto más pequeño
- Desktop: centrado, texto grande, CTAs horizontal

**Grids (Gallery, About, Menu):**
- Mobile: `grid-cols-1`
- Tablet: `sm:grid-cols-2`
- Desktop: `lg:grid-cols-3`

**Footer:**
- Mobile: stack vertical (1 columna)
- Tablet: `md:grid-cols-2`
- Desktop: `lg:grid-cols-4`

---

## Data Configuration Pattern

### Archivo: data/content-data.tsx

**Estructura completa configurable:**
```typescript
export const siteConfig = {
  // Información básica
  name: "Nombre del Local",
  tagline: "Tu frase descriptiva",
  description: "Descripción larga para SEO",
  
  // Ubicación
  address: {
    street: "Calle 1234",
    city: "Ciudad",
    country: "País",
    coordinates: { lat: -34.603722, lng: -58.381592 }
  },
  
  // Contacto
  contact: {
    phone: "+54 11 1234-5678",
    email: "contacto@local.com",
    whatsapp: "+5491112345678"
  },
  
  // Redes sociales
  social: {
    instagram: "https://instagram.com/usuario",
    facebook: "https://facebook.com/usuario",
  },
  
  // Horarios
  hours: {
    weekdays: "Lunes a Viernes: 10:00 - 22:00",
    weekend: "Sábados y Domingos: 11:00 - 23:00"
  }
}

export const aboutContent = {
  title: "Sobre Nosotros",
  description: "Párrafo descriptivo...",
  cards: [
    { icon: "🏆", title: "Calidad", description: "Texto..." },
    { icon: "🎯", title: "Experiencia", description: "Texto..." },
    { icon: "❤️", title: "Pasión", description: "Texto..." }
  ],
  features: [
    "Feature 1",
    "Feature 2", 
    "Feature 3"
  ]
}

export const menuData = [
  {
    category: "Categoría 1",
    icon: "🍕",
    items: [
      { name: "Producto 1", description: "Descripción", price: "1500" }
    ]
  }
]

export const galleryImages = [
  { src: "/images/1.jpg", alt: "Descripción", caption: "Título" },
  // ...más imágenes
]
```

---

## Metadata y SEO

### app/layout.tsx - Metadata:
```typescript
export const metadata: Metadata = {
  title: "Nombre del Local - Descripción Corta",
  description: "Descripción larga optimizada para SEO con palabras clave",
  keywords: ["keyword1", "keyword2", "ciudad", "tipo de local"],
  openGraph: {
    title: "Nombre del Local",
    description: "Descripción para redes sociales",
    type: "website",
    locale: "es_AR", // o locale correspondiente
  }
}
```

---

## Funcionalidades Importantes

### 1. Smooth Scroll Navigation
```typescript
// En Header component
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth" })
  setIsOpen(false)
}
```

### 2. Mobile Menu Toggle
```typescript
const [isOpen, setIsOpen] = useState(false)

// Renderizado condicional
{isOpen && (
  <nav className="md:hidden pb-4 animate-in slide-in-from-top">
    {/* Links */}
  </nav>
)}
```

### 3. Google Maps Embed
```typescript
<iframe
  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...`}
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg shadow-xl"
/>
```

### 4. External Links Pattern
```typescript
<a
  href="https://instagram.com/usuario"
  target="_blank"
  rel="noopener noreferrer"
  className="[estilos]"
>
  Link text
</a>
```

---

## Componentes Específicos a Incluir

### 1. Utilidad cn() en lib/utils.ts
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 2. Loading States (opcional)
- Skeleton loaders para imágenes
- Suspense boundaries si se necesita

### 3. Error Boundaries (básicos)
- Try-catch en componentes críticos

---

## Detalles de Implementación

### Todos los componentes deben ser "use client"
```typescript
"use client"

import { useState } from "react"
// ...resto del componente
```

### IDs para navegación:
- `id="hero"` en Hero section
- `id="nosotros"` en About section
- `id="galeria"` en Gallery section
- `id="menu"` en Menu section
- `id="contacto"` en Footer section

### Z-index layers:
- Header: `z-50`
- Overlays: `z-40`
- Modals: `z-30`
- Content: `z-10`
- Background: `z-0`

---

## Características de Calidad

### Performance:
- Lazy loading de imágenes (Next/Image automático)
- Optimización de fonts con `display: 'swap'`
- Code splitting por componente

### Accesibilidad:
- Semantic HTML (header, nav, section, footer)
- Alt text en todas las imágenes
- aria-labels en botones de navegación
- Keyboard navigation funcional

### UX:
- Smooth scroll suave
- Loading states visuales
- Hover feedback en todos los interactivos
- Mobile-first responsive

---

## Textos Placeholder y Estructura

### Hero:
- Título: "NOMBRE DEL LOCAL"
- Subtítulo: "Descripción breve de la especialidad"
- Badge: "📍 Ciudad, Zona"
- CTA1: "Ver Nuestro Menú"
- CTA2: "Cómo Llegar"

### About:
- Título: "Nuestra Historia"
- Descripción: 2-3 párrafos lorem ipsum
- 3 Cards: "Tradición", "Calidad", "Pasión"
- 3 Features: "Ingredientes frescos", "Recetas tradicionales", "Ambiente acogedor"

### Gallery:
- 9-12 imágenes placeholder (usar placeholder.com o similar)
- Captions: "Producto 1", "Producto 2", etc.
- CTA: "@usuario_instagram"

### Menu:
- 3-4 categorías (Entradas, Principales, Postres, Bebidas)
- 4-6 items por categoría
- Precios en formato string: "1500", "2000", "Consultar"

### Footer:
- Horarios: Lunes a Domingo con horarios
- Teléfono: +54 11 1234-5678
- Email: contacto@local.com
- Dirección: Calle Falsa 123, Ciudad
- Instagram, Facebook placeholders

---

## Testing Checklist

La implementación debe cumplir:

✅ Responsive en mobile (320px - 768px)  
✅ Responsive en tablet (768px - 1024px)  
✅ Responsive en desktop (1024px+)  
✅ Smooth scroll funcional desde header  
✅ Mobile menu toggle funciona correctamente  
✅ Todas las imágenes tienen placeholder  
✅ Hover effects visibles en desktop  
✅ External links abren en nueva pestaña  
✅ Google Maps iframe carga correctamente  
✅ No errores en consola  
✅ TypeScript compila sin errores (con ignoreBuildErrors)  
✅ Build de Next.js exitoso  

---

## Entregables Esperados

### Archivos principales:
1. `app/layout.tsx` - Layout con fonts y metadata
2. `app/page.tsx` - Página principal con imports
3. `app/globals.css` - Estilos globales completos
4. `components/header.tsx` - Header sticky completo
5. `components/hero.tsx` - Hero section
6. `components/about.tsx` - About section
7. `components/gallery.tsx` - Gallery section
8. `components/menu.tsx` - Menu section
9. `components/footer.tsx` - Footer con contacto
10. `data/content-data.tsx` - Datos configurables
11. `lib/utils.ts` - Utilidad cn()
12. `next.config.mjs` - Configuración Next.js
13. `tailwind.config.js` - Configuración Tailwind
14. `tsconfig.json` - Configuración TypeScript

### Debe incluir:
- Todas las animaciones CSS custom
- Sistema de colores completo con variables
- Componentes completamente funcionales
- Data structure lista para personalizar
- Responsive breakpoints implementados
- Smooth scroll navigation
- Mobile menu funcional

---

## Notas Finales

- **Prioridad**: Funcionalidad completa sobre perfección visual inicial
- **Enfoque**: Plantilla reutilizable y fácil de customizar
- **Colores**: Usar sistema de variables para fácil cambio de paleta
- **Contenido**: Lorem ipsum/placeholder, pero estructura real
- **Imágenes**: Usar placeholders con tamaños correctos
- **Código**: Clean, comentado donde sea necesario, TypeScript strict

Esta plantilla debe ser el punto de partida perfecto para cualquier local gastronómico, donde solo se necesite cambiar:
1. Los colores en `globals.css`
2. Las fuentes en `layout.tsx`
3. El contenido en `data/content-data.tsx`
4. Las imágenes en `public/images/`

Y tener una landing page profesional lista para producción.
