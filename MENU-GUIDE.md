# 📝 Cómo Actualizar el Menú

## Ubicación del archivo
`data/menu-data.tsx`

## Estructura actual

El menú tiene 6 categorías:

1. **Helados Artesanales** 🍦 (tamaños y formatos)
2. **Sabores Clásicos** 🍨 (sabores tradicionales)
3. **Sabores Premium** ✨ (sabores especiales)
4. **Copas & Especialidades** 🍧
5. **Tortas Heladas** 🎂
6. **Cafetería** ☕

## Cómo agregar precios

### Ejemplo ANTES:
```typescript
{ name: "Cucurucho Simple", description: "1 sabor a elección", price: "Consultar" }
```

### Ejemplo DESPUÉS:
```typescript
{ name: "Cucurucho Simple", description: "1 sabor a elección", price: "1800" }
```

## Cómo agregar un nuevo sabor

```typescript
// En la categoría "Sabores Clásicos"
items: [
  { name: "Dulce de Leche", description: "El clásico argentino", price: "" },
  { name: "Chocolate", description: "Intenso y cremoso", price: "" },
  // AGREGAR ACÁ:
  { name: "Nuevo Sabor", description: "Descripción del sabor", price: "" },
]
```

## Cómo agregar una nueva categoría

```typescript
export const menuData = [
  // ... categorías existentes ...
  
  // NUEVA CATEGORÍA
  {
    category: "Promociones Especiales",
    icon: "🎉",
    items: [
      { name: "Combo Familiar", description: "1kg + 6 cucuruchos", price: "5500" },
      { name: "2x1 Martes", description: "Todos los martes", price: "Consultar" },
    ],
  },
]
```

## Íconos disponibles (emojis)

Podés usar cualquier emoji como ícono:
- 🍦 Helado cucurucho
- 🍨 Copa de helado
- 🍧 Granizado
- 🎂 Torta
- ☕ Café
- 🍓 Frutilla
- 🍫 Chocolate
- 🍋 Limón
- ✨ Especial
- 🎉 Promoción
- 💝 Regalo
- 🌟 Destacado

## Ejemplos completos

### Sabor con precio

```typescript
{
  name: "Chocolate con Almendras",
  description: "Chocolate belga con almendras tostadas",
  price: "2200"
}
```

### Producto sin descripción

```typescript
{
  name: "Café Americano",
  description: "",
  price: "950"
}
```

### Producto sin precio (consultar)

```typescript
{
  name: "Torta Personalizada",
  description: "Consultar por pedidos especiales",
  price: "Consultar"
}
```

## Formato de precios

Podés usar cualquiera de estos formatos:

```typescript
price: "1500"           // Recomendado (más limpio)
price: "$1500"          // Con símbolo
price: "1.500"          // Con punto
price: "$1.500"         // Completo
price: "Consultar"      // Sin precio fijo
price: ""               // Sin mostrar precio
```

## Tips de Diseño

1. **Descripciones cortas**: Máximo 1 línea
2. **Nombres claros**: Que se entienda qué es
3. **Agrupar por tipo**: Mantener las categorías organizadas
4. **Orden lógico**: De más simple a más elaborado

## Quitar un ítem

Simplemente borrá las 3 líneas del objeto:

```typescript
// BORRAR ESTO:
{ name: "Producto a eliminar", description: "...", price: "..." },
```

## Ver los cambios

1. Guardá el archivo
2. El navegador se recarga automáticamente
3. Revisá que todo se vea bien

---

**Nota**: Después de modificar el menú, revisá la página en diferentes dispositivos (mobile, tablet, desktop) para asegurarte que todo se vea bien.
