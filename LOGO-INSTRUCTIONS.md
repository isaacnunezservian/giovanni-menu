# Heladerías Giovanini - Instrucciones para el Logo

## ⚠️ Importante: Agregar Logo

El proyecto está configurado para usar un logo en la carpeta `public/images/`.

### Cómo agregar el logo:

1. **Ubicá el logo de Giovanini** (idealmente en formato PNG con fondo transparente)
2. **Renombralo a `logo.png`**
3. **Copialo en**: `public/images/logo.png`

### Especificaciones recomendadas:
- **Formato**: PNG con transparencia
- **Tamaño**: 200x200px o similar (cuadrado)
- **Peso**: Menos de 100KB

### Si no tenés el logo aún:

Temporalmente, el sitio mostrará solo el texto "GIOVANINI" en el header. Una vez que agregues el logo, se verá automáticamente.

### Ubicación del logo en el proyecto:

El logo se usa en:
- `components/header.tsx` (línea ~20)

```tsx
<Image
  src="/images/logo.png"  // <-- Acá busca el logo
  alt="Heladerías Giovanini"
  fill
  className="object-contain"
  priority
/>
```

---

**Nota**: Si el logo tiene otro nombre (ej: `giovanini-logo.png`), actualizá la ruta en el archivo `components/header.tsx`.
