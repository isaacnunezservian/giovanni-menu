# Migración a Firebase Firestore - Completada

## ✅ Cambios Realizados

### 1. **lib/firebaseClient.ts**
- Configuración del cliente Firebase para el lado del cliente
- Inicialización de Firestore con variables de entorno
- Project ID predeterminado: `digital-menu-4e904`

### 2. **components/MenuWrapper.tsx** (Server Component)
- Fetches data desde las 6 colecciones de Firestore:
  - `promociones-especiales`
  - `combos`
  - `sandwiches`
  - `avocado-toast`
  - `ensaladas-saludable`
  - `brunch-para-compartir`
- Ordena los ítems por el campo `orden`
- Mapea los campos de Firestore (`nombre`, `descripcion`, `precio`, `orden`) a la estructura del componente
- Pasa los datos al componente Menu como props

### 3. **components/menu.tsx**
- Ahora acepta `data` como prop en lugar de usar `menuData` hardcodeado
- Tipos TypeScript actualizados para `MenuItem` y `MenuCategory`
- Formato de precio actualizado: `item.price.toLocaleString('es-AR')`
- La UI y estilos permanecen intactos

### 4. **app/page.tsx**
- Actualizado para usar `MenuWrapper` en lugar de `Menu`

### 5. **.env.local.example**
- Template para las variables de entorno requeridas

## 🔧 Pasos para Completar la Configuración

### 1. Crear archivo `.env.local`

Copia el archivo `.env.local.example` a `.env.local`:

```bash
cp .env.local.example .env.local
```

### 2. Obtener las credenciales de Firebase

1. Ve a la [Consola de Firebase](https://console.firebase.google.com/)
2. Selecciona tu proyecto: `digital-menu-4e904`
3. Ve a **Configuración del proyecto** (ícono de engranaje) → **General**
4. En la sección "Tus apps", busca tu app web o crea una nueva
5. Copia la configuración de Firebase

### 3. Actualizar `.env.local`

Reemplaza los valores en `.env.local` con tus credenciales reales:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=digital-menu-4e904.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=digital-menu-4e904
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=digital-menu-4e904.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789...
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:...
```

### 4. Verificar la Estructura de Firestore

Asegúrate de que tus colecciones en Firestore tengan la siguiente estructura:

**Colecciones:**
- `promociones-especiales`
- `combos`
- `sandwiches`
- `avocado-toast`
- `ensaladas-saludable`
- `brunch-para-compartir`

**Campos de cada documento:**
```typescript
{
  nombre: string,      // "PROMO 1", "Latte + Croissant"
  descripcion: string, // Puede estar vacío
  precio: number,      // 9400, 7500 (como número, no string)
  orden: number        // 1, 2, 3... (para ordenamiento)
}
```

### 5. Reiniciar el Servidor de Desarrollo

```bash
npm run dev
```

El servidor necesita reiniciarse para cargar las nuevas variables de entorno.

## 🎯 Características

- ✅ **Server-Side Rendering**: Los datos se obtienen en el servidor, mejorando el SEO y la performance
- ✅ **Datos en Tiempo Real**: Los cambios en Firestore se reflejarán en la próxima carga de página
- ✅ **Tipado TypeScript**: Todo está completamente tipado
- ✅ **Orden Preservado**: Los ítems se ordenan por el campo `orden`
- ✅ **Formato de Moneda**: Los precios se formatean automáticamente para Argentina
- ✅ **Sin Cambios en la UI**: La apariencia y funcionalidad permanecen idénticas

## 📝 Notas Importantes

1. **Variables de Entorno**: Las variables que empiezan con `NEXT_PUBLIC_` son accesibles en el cliente. Esto es seguro para Firebase ya que las reglas de seguridad protegen los datos.

2. **Reglas de Firestore**: Según tu configuración, tienes `allow read: if true;`, lo que permite lectura pública. Esto es correcto para un menú público.

3. **Precio como Número**: En Firestore, asegúrate de que el campo `precio` sea de tipo `number`, no `string`. Esto permite operaciones matemáticas futuras si las necesitas.

4. **Cache de Next.js**: Por defecto, Next.js cachea las páginas. Si quieres que los datos se actualicen más frecuentemente, puedes agregar opciones de revalidación en el futuro.

## 🐛 Solución de Problemas

### Error: "Cannot find module 'firebase/app'"
- Ejecuta: `npm install firebase`

### Los datos no se cargan
- Verifica las variables de entorno en `.env.local`
- Verifica que los nombres de las colecciones sean exactamente los especificados
- Revisa la consola del navegador para errores

### Precios no se muestran correctamente
- Verifica que el campo `precio` en Firestore sea de tipo `number`, no `string`
