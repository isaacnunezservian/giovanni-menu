# Heladerías Giovanini - Landing Page 🍦

Landing page moderna y vibrante para Heladerías Giovanini, con menú digital completo.

## 🎨 Características

- **Diseño Moderno**: Paleta de colores vibrante basada en la identidad de marca (rojos, rosas, cremas)
- **Tipografías Creativas**: Quicksand (sans), Fredoka (display), Playfair Display (serif)
- **100% Responsive**: Optimizado para mobile, tablet y desktop
- **Animaciones Suaves**: Efectos de flotación y transiciones atractivas
- **Menú Digital**: Estructura lista para completar con productos y precios
- **Galería de Fotos**: 11 imágenes reales de los productos
- **Integración Social**: Links a Instagram
- **Mapa Interactivo**: Google Maps con ubicación exacta
- **Tono Porteño**: Copywriting auténtico de Buenos Aires

## 📦 Tecnologías

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Next Font** (Google Fonts)

## 🚀 Instalación

```bash
# Instalar dependencias
npm install
# o
pnpm install

# Modo desarrollo
npm run dev
# o
pnpm dev

# Build para producción
npm run build
```

La app estará disponible en [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del Proyecto

```
giovanini-web/
├── app/
│   ├── globals.css          # Estilos globales y paleta de colores
│   ├── layout.tsx            # Layout principal con tipografías
│   └── page.tsx              # Página principal
├── components/
│   ├── header.tsx            # Navegación sticky
│   ├── hero.tsx              # Sección hero principal
│   ├── about.tsx             # Sobre la heladería
│   ├── gallery.tsx           # Galería de fotos estilo polaroid
│   ├── menu.tsx              # Menú digital
│   └── contact.tsx           # Contacto y ubicación
├── data/
│   └── menu-data.tsx         # Datos del menú (productos)
├── public/
│   └── images/               # Imágenes de productos y logo
├── lib/
│   └── utils.ts              # Utilidades
└── netlify.toml              # Configuración Netlify
```

## 🎨 Paleta de Colores

- **Primary (Rojo Giovanini)**: `oklch(0.55 0.22 25)`
- **Secondary (Rosa Cremoso)**: `oklch(0.85 0.08 15)`
- **Accent (Crema/Vainilla)**: `oklch(0.96 0.03 80)`
- **Tonos adicionales**: Chocolate, Menta, Limón

## 📝 Próximos Pasos

### Para completar el menú:

1. Abrí `data/menu-data.tsx`
2. Actualizá los precios en cada item (reemplazá "Consultar" con el precio real)
3. Agregá o modificá sabores y productos según lo que ofrezcan

Ejemplo:
```typescript
{ name: "Cucurucho Simple", description: "1 sabor", price: "1500" }
```

### Para agregar más fotos:

1. Copiá las imágenes a `public/images/`
2. Agregá el objeto en el array de `components/gallery.tsx`:

```typescript
{
  src: "/images/tu-foto.jpg",
  alt: "Descripción",
  caption: "Tu Caption"
}
```

## 🌐 Deploy en Netlify

### Opción 1: Desde Git

1. Pusheá el código a GitHub/GitLab
2. Conectá el repo en Netlify
3. Netlify detectará Next.js automáticamente
4. Deploy! 🚀

### Opción 2: CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

El archivo `netlify.toml` ya está configurado.

## 📍 Información del Local

- **Dirección**: Av. Corrientes 1255, San Nicolás, C1043, Buenos Aires
- **Instagram**: [@heladosviagiovanni](https://www.instagram.com/heladosviagiovanni/)
- **Horarios**: Lunes a Domingo, 12:00 - 23:00 hs

## ✨ Características Destacadas

### Header
- Logo clickeable
- Navegación smooth scroll
- Responsive con menú hamburguesa
- Sticky en scroll

### Hero
- Imagen de fondo impactante
- Animaciones de helados flotantes
- CTAs prominentes
- Badge de ubicación

### About
- Tono cálido y porteño
- Cards con hover effects
- Íconos animados
- Mensaje auténtico

### Gallery
- Estilo polaroid con rotación sutil
- 11 fotos reales de productos
- Efecto hover con zoom
- Link directo a Instagram

### Menu
- Estructura por categorías con íconos
- Cards interactivas
- Preparado para precios dinámicos
- Nota informativa

### Contact
- Mapa de Google Maps embebido
- Links a redes sociales
- Horarios destacados
- CTA final

## 🔧 Personalización

### Cambiar colores:
Editá las variables CSS en `app/globals.css`

### Cambiar tipografías:
Modificá los imports en `app/layout.tsx`

### Modificar secciones:
Cada componente es independiente en `components/`

## 📱 SEO Optimizado

- Meta tags configurados
- Open Graph para redes sociales
- Imágenes optimizadas
- Sitemap ready

## 🙏 Soporte

Para consultas o modificaciones, contactá al desarrollador.

---

**¡Que disfruten del helado más rico de Buenos Aires!** 🍦❤️
