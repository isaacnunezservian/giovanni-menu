# 🚀 Guía Rápida - Deploy Heladerías Giovanini

## ✅ ¿Qué está listo?

- ✅ Estructura completa del proyecto Next.js
- ✅ Diseño responsive con Tailwind CSS
- ✅ 6 Secciones: Header, Hero, Nosotros, Galería, Menú, Contacto
- ✅ 11 fotos de productos copiadas
- ✅ Paleta de colores de marca Giovanini
- ✅ Tipografías creativas (Quicksand, Fredoka, Playfair Display)
- ✅ Animaciones y efectos visuales
- ✅ Tono porteño auténtico
- ✅ Google Maps integrado
- ✅ Link a Instagram
- ✅ Configuración para Netlify

## ⚠️ Pendiente

### 1. **Agregar el Logo**
- Copiá el logo de Giovanini como `logo.png` en `public/images/`
- Ver instrucciones completas en `LOGO-INSTRUCTIONS.md`

### 2. **Completar Precios del Menú**
- Abrí `data/menu-data.tsx`
- Reemplazá "Consultar" con los precios reales
- Ejemplo: `price: "1500"` o `price: "$1500"`

### 3. **Verificar Sabores de Helado**
- Revisá que los sabores en el menú sean los correctos
- Agregá o quitá según lo que ofrezcan

## 🎯 Pasos para Levantar el Proyecto

### 1. Instalar Dependencias

```bash
cd giovanini-web
pnpm install
```

*(Si no tenés pnpm: `npm install -g pnpm`)*

### 2. Modo Desarrollo

```bash
pnpm dev
```

Abrir: [http://localhost:3000](http://localhost:3000)

### 3. Verificar Todo

- ✅ El logo se ve (si lo agregaste)
- ✅ Las 11 fotos cargan en la galería
- ✅ El menú muestra todas las categorías
- ✅ El mapa de Google funciona
- ✅ Los links de Instagram funcionan
- ✅ La navegación es suave

## 📦 Build para Producción

```bash
pnpm build
```

Esto genera la carpeta `.next/` optimizada.

## 🌐 Deploy en Netlify

### Opción A: Desde GitHub (Recomendado)

1. **Crear repo en GitHub**
   ```bash
   cd giovanini-web
   git init
   git add .
   git commit -m "Initial commit - Heladerias Giovanini"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/giovanini-web.git
   git push -u origin main
   ```

2. **En Netlify**
   - Ir a [netlify.com](https://netlify.com)
   - "Add new site" → "Import from Git"
   - Elegir el repo
   - Netlify detecta Next.js automáticamente
   - Click "Deploy" 🚀

### Opción B: Deploy Directo

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 🎨 Personalización Rápida

### Cambiar Colores
Editar `app/globals.css` (líneas 8-35)

### Modificar Textos
- **Hero**: `components/hero.tsx`
- **Nosotros**: `components/about.tsx`
- **Menú**: `data/menu-data.tsx`
- **Contacto**: `components/contact.tsx`

### Agregar/Quitar Fotos
Editar el array en `components/gallery.tsx`

## 📱 URLs Importantes

- **Ubicación**: Av. Corrientes 1255, San Nicolás, C1043, CABA
- **Instagram**: https://www.instagram.com/heladosviagiovanni/
- **Google Maps**: (integrado en la página)

## 🐛 Troubleshooting

### "Cannot find module" error
```bash
rm -rf node_modules .next
pnpm install
```

### Las imágenes no cargan
- Verificar que estén en `public/images/`
- Nombres correctos (respetando mayúsculas/minúsculas)

### Error de tipografía
- Asegurate de tener conexión a internet (Google Fonts)
- Las fuentes se descargan automáticamente

## 📞 Soporte

Si tenés algún problema:
1. Revisar la consola del navegador (F12)
2. Revisar la terminal donde corre `pnpm dev`
3. Verificar que todas las dependencias estén instaladas

---

## ✨ Próximos pasos opcionales

- [ ] Agregar WhatsApp Business link
- [ ] Integrar sistema de pedidos online
- [ ] Agregar más fotos del local
- [ ] Crear página de blog/novedades
- [ ] Agregar sistema de reviews

---

**¡Tu página está lista para brillar! 🍦✨**
