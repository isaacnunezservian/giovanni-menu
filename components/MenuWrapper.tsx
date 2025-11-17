"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebaseClient";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import Menu from "./menu";

/**
 * Interface para metadata de categorías desde Firestore (_categoriesMeta)
 */
interface CategoryMeta {
  id: string;          // ID de la colección (ej: "promociones-especiales")
  displayName: string; // Nombre visible (ej: "Promociones Especiales")
  icon: string;        // Emoji (ej: "🎉")
  order: number;       // Número de ordenamiento (editable desde admin)
}

/**
 * Interface para items individuales del menú
 */
interface MenuItem {
  name: string;
  description?: string;
  price: number;
  orden: number;
}

/**
 * Interface para categorías completas con sus items
 */
interface MenuCategory {
  category: string;
  icon: string;
  items: MenuItem[];
}

/**
 * Fetch dinámico de metadata de categorías desde _categoriesMeta
 * Obtiene las 19 categorías ordenadas por el campo 'order'
 */
async function fetchCategoriesMetadata(): Promise<CategoryMeta[]> {
  try {
    const q = query(collection(db, "_categoriesMeta"), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);

    const categories: CategoryMeta[] = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: data.id,
        displayName: data.displayName,
        icon: data.icon,
        order: data.order,
      };
    });

    return categories;
  } catch (error) {
    console.error("Error fetching categories metadata:", error);
    return [];
  }
}

/**
 * Fetch de items de una categoría específica
 * Ordena por campo 'orden' ascendente
 */
async function fetchCategoryItems(categoryId: string): Promise<MenuItem[]> {
  try {
    const q = query(collection(db, categoryId), orderBy("orden", "asc"));
    const querySnapshot = await getDocs(q);

    const items: MenuItem[] = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        name: data.nombre,
        description: data.descripcion || "",
        price: data.precio,
        orden: data.orden,
      };
    });

    return items;
  } catch (error) {
    console.error(`Error fetching items for category ${categoryId}:`, error);
    return [];
  }
}

/**
 * Función principal: obtiene categorías dinámicas y sus items
 * Usa Promise.all() para paralelizar fetch de items (performance)
 */
async function fetchMenuDataFromFirestore(): Promise<MenuCategory[]> {
  // Paso 1: Obtener metadata de categorías ordenadas
  const categoriesMeta = await fetchCategoriesMetadata();

  if (categoriesMeta.length === 0) {
    console.warn("No categories found in _categoriesMeta");
    return [];
  }

  // Paso 2: Fetch paralelo de items para todas las categorías
  const menuDataPromises = categoriesMeta.map(async (categoryMeta) => {
    const items = await fetchCategoryItems(categoryMeta.id);

    return {
      category: categoryMeta.displayName,
      icon: categoryMeta.icon,
      items: items,
    };
  });

  // Esperar todas las queries en paralelo
  const menuData = await Promise.all(menuDataPromises);

  // Filtrar categorías sin items (opcional: mostrar categorías vacías con mensaje "Próximamente")
  // return menuData.filter(category => category.items.length > 0);
  
  // Retornar todas las categorías (incluso vacías)
  return menuData;
}

export default function MenuWrapper() {
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenu() {
      try {
        const fetchedMenuData = await fetchMenuDataFromFirestore();
        setMenuData(fetchedMenuData);
      } catch (error) {
        console.error("Error loading menu:", error);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  if (loading) {
    return (
      <section id="menu" className="relative px-4 py-24">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          Cargando menú...
        </div>
      </section>
    );
  }

  if (!menuData || menuData.length === 0) {
    return (
      <section id="menu" className="relative px-4 py-24">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          Cargando menú...
        </div>
      </section>
    );
  }

  return <Menu data={menuData} />;
}
