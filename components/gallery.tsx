import Image from "next/image"

export default function Gallery() {
  const images = [
    {
      src: "/images/232643342_2605505669756707_2596715125860506940_n.jpg",
      alt: "",
      caption: "Cafés"
    },
    {
      src: "/images/241434211_376710810728787_7415691118948205833_n.jpg",
      alt: "Helado de frutilla Giovanini",
      caption: "Frutilla Cremosa"
    },
    {
      src: "/images/482852772_18295753003242658_1796975907914181387_n.jpg",
      alt: "Helados variados Giovanini",
      caption: "Sabores del Día"
    },
    {
      src: "/images/482920815_18295753033242658_5106177818216556866_n.jpg",
      alt: "Helado de chocolate Giovanini",
      caption: "Chocolate Puro"
    },
    {
      src: "/images/482989402_18295753012242658_3473891994819640055_n.jpg",
      alt: "Helado con toppings Giovanini",
      caption: "Con Toppings"
    },
    {
      src: "/images/483051278_18295753021242658_2467341560864339755_n.jpg",
      alt: "Cucurucho de helado Giovanini",
      caption: "Cucurucho Clásico"
    },
    {
      src: "/images/561355667_1183349220514102_2346942233310619893_n.jpg",
      alt: "Copa de helado Giovanini",
      caption: "Copa Especial"
    },
    {
      src: "/images/561849815_1183349210514103_7232452687521685825_n.jpg",
      alt: "Helado gourmet Giovanini",
      caption: "Edición Especial"
    },
    {
      src: "/images/565933114_1183350743847283_9218817774395012926_n.jpg",
      alt: "Combinación de sabores Giovanini",
      caption: "Mix de Sabores"
    },
    {
      src: "/images/573258842_1194705369378487_8243016905811934003_n.jpg",
      alt: "Helado cremoso Giovanini",
      caption: "Cremosidad Perfecta"
    },
    {
      src: "/images/574027301_1194705372711820_9121733835923739340_n.jpg",
      alt: "Helado artesanal Giovanini",
      caption: "100% Artesanal"
    },
  ]

  return (
    <section id="galeria" className="relative px-4 py-24 overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-pink-50/30">
      {/* Textura de fondo */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiIGZpbGw9IiNlZjQ0NDQiLz48L3N2Zz4=')]"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Decoración superior */}
        <div className="flex items-center justify-center gap-4 mb-12 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍨</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>

        <h2 className="relative mb-6 text-5xl font-bold text-center text-red-600 font-display md:text-6xl lg:text-7xl">
          <span style={{ textShadow: '3px 3px 0px rgba(255,182,193,0.3)' }}>
            Helado y Café
          </span>
        </h2>

        <p className="max-w-2xl mx-auto mb-16 text-lg text-center text-gray-600 md:text-xl">
          Mirá la calidad y el amor que le ponemos a cada cucurucho
        </p>

        {/* Grid de fotos estilo polaroid mejorado */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="relative transition-all duration-300 transform group hover:scale-105"
              style={{
                transform: `rotate(${idx % 2 === 0 ? '-' : ''}${Math.random() * 2 + 0.5}deg)`,
              }}
            >
              {/* Polaroid frame con sombra mejorada */}
              <div className="p-4 pb-16 transition-all duration-300 bg-white rounded-lg shadow-2xl hover:shadow-red-200">
                <div className="relative overflow-hidden bg-gray-100 rounded-md aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-red-600/20 to-transparent group-hover:opacity-100"></div>
                </div>
                
                {/* Caption handwritten style */}
                <div className="mt-4 text-center">
                  <p className="text-xl font-semibold text-red-600 font-display">
                    {image.caption}
                  </p>
                </div>
              </div>

              {/* Cinta adhesiva decorativa */}
              <div className="absolute w-24 h-10 transform rotate-0 -translate-x-1/2 border-l border-r shadow-lg -top-4 left-1/2 bg-red-200/40 backdrop-blur-sm border-red-300/30"></div>
            </div>
          ))}
        </div>

        {/* CTA para Instagram */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-lg text-gray-600">¿Querés ver más? Seguinos en Instagram</p>
          <a
            href="https://www.instagram.com/heladosviagiovanni/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 rounded-full shadow-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11.806-2.806 1.44 1.44 0 01-.806 2.806z" />
            </svg>
            <span className="text-lg">@heladosviagiovanni</span>
          </a>
        </div>

        {/* Decoración inferior */}
        <div className="flex items-center justify-center gap-4 mt-20 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍓</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>
      </div>
    </section>
  )
}
