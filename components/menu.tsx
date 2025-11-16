"use client"

interface MenuItem {
  name: string;
  description?: string;
  price: number;
  orden: number;
}

interface MenuCategory {
  category: string;
  icon: string;
  items: MenuItem[];
}

interface MenuProps {
  data: MenuCategory[];
}

export default function Menu({ data }: MenuProps) {
  return (
    <section id="menu" className="relative px-4 py-24 overflow-hidden bg-gradient-to-b from-pink-50/30 via-white to-red-50/20">
      {/* Textura de fondo */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjQiIGZpbGw9IiNlZjQ0NDQiLz48L3N2Zz4=')]"></div>
      
      {/* Decoración de helados flotantes */}
      <div className="absolute top-10 left-5 text-7xl opacity-10 animate-float">🍦</div>
      <div className="absolute top-40 right-10 text-8xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🍨</div>
      <div className="absolute text-6xl bottom-20 left-20 opacity-10 animate-float" style={{ animationDelay: '2s' }}>🍧</div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Título principal */}
        <h2 className="relative mb-8 text-5xl font-extrabold tracking-wider text-center text-red-600 font-display md:text-7xl">
          <span className="relative inline-block" style={{
            textShadow: '4px 4px 0px rgba(255,182,193,0.3), -1px -1px 0px rgba(255,255,255,0.5)',
            letterSpacing: '0.05em'
          }}>
            NUESTRO MENÚ
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 rounded-full" />
        </h2>

        <p className="max-w-2xl mx-auto mb-16 text-lg text-center text-gray-600 md:text-xl">
          Dale, elegí tu favorito. Tenemos de todo para que te lleves el mejor helado de la zona 🍦
        </p>

        {/* Grid del menú */}
        <div className="space-y-16">
          {data.map((category, idx) => (
            <div key={idx} className="relative">
              {/* Encabezado de categoría con estilo divertido */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {category.icon}
                </span>
                <h3 className="relative inline-block text-4xl font-bold text-red-600 font-display md:text-5xl">
                  {category.category}
                  <div className="absolute left-0 right-0 h-1 rounded-full -bottom-2 bg-gradient-to-r from-red-400 via-pink-400 to-transparent" />
                </h3>
              </div>
              
              {/* Items del menú */}
              <div className="grid gap-4 md:gap-6">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="relative p-6 transition-all duration-300 transform border-2 border-red-100 group bg-white/90 backdrop-blur-sm rounded-2xl md:p-8 hover:border-red-400 hover:shadow-xl hover:shadow-red-100 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        {/* Nombre del producto */}
                        <h4 className="mb-2 text-xl font-bold text-gray-800 transition-colors md:text-2xl group-hover:text-red-600">
                          {item.name}
                        </h4>
                        
                        {/* Descripción si existe */}
                        {item.description && (
                          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                            {item.description}
                          </p>
                        )}
                      </div>
                      
                      {/* Precio */}
                      {item.price !== undefined && (
                        <div className="flex flex-col items-end">
                          <div className="text-2xl font-black text-red-600 md:text-3xl whitespace-nowrap font-display">
                            {item.price.toLocaleString('es-AR')}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Línea decorativa inferior */}
                    <div className="absolute bottom-0 h-px transition-opacity opacity-0 left-8 right-8 bg-gradient-to-r from-transparent via-red-200 to-transparent group-hover:opacity-100" />
                  </div>
                ))}
              </div>

              {/* Separador decorativo entre categorías */}
              {idx < data.length - 1 && (
                <div className="flex items-center justify-center mt-12">
                  <div className="w-full h-px max-w-md bg-gradient-to-r from-transparent via-red-300 to-transparent" />
                  <div className="mx-6 text-3xl text-red-400/60">✦</div>
                  <div className="w-full h-px max-w-md bg-gradient-to-r from-transparent via-red-300 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nota de precios */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 text-white transition-transform transform shadow-2xl bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl hover:scale-105">
            <p className="mb-2 text-xl font-bold md:text-2xl">📱 ¿Querés saber los precios actualizados?</p>
            <p className="text-base md:text-lg opacity-90">
              Consultanos por WhatsApp o pasá por el local. ¡Te esperamos!
            </p>
          </div>
        </div>

        {/* Footer decorativo */}
        <div className="flex items-center justify-center gap-4 mt-20 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍒</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>
      </div>
    </section>
  )
}
