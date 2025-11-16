"use client"

import Image from "next/image"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/573258842_1194705369378487_8243016905811934003_n.jpg"
          alt="Helados Giovanini"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay vibrante */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/40 via-pink-500/30 to-white/60"></div>
        
        {/* Textura de puntos */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        {/* Decoración superior - copitos de helado */}
        <div className="mb-8 flex items-center gap-6 text-white/80">
          <span className="text-4xl animate-float">🍦</span>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <span className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🍨</span>
          <div className="w-32 h-px bg-gradient-to-l from-transparent via-white/50 to-transparent" />
          <span className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🍧</span>
        </div>

        {/* Título principal con efecto helado */}
        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-6 tracking-wider relative">
          <span 
            className="relative inline-block drop-shadow-2xl"
            style={{
              textShadow: '4px 4px 0px rgba(220,38,38,0.8), -2px -2px 0px rgba(255,255,255,0.3), 0 0 60px rgba(255,182,193,0.6)',
              letterSpacing: '0.05em'
            }}
          >
            GIOVANNI
          </span>
        </h1>
        
        {/* Subtítulo elegante */}
        <p className="font-serif text-red-600 text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold italic tracking-wide drop-shadow-lg">
          Helados Artesanales
        </p>

        {/* Badge de ubicación */}
        <div className="mb-8 px-6 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-xl border-2 border-red-200">
          <p className="text-red-700 font-semibold text-sm tracking-wide">
            📍 San Nicolás, Buenos Aires
          </p>
        </div>
        
        {/* Descripción */}
        <p className="text-gray-800 max-w-2xl mb-12 text-lg sm:text-xl font-medium leading-relaxed bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
          La tradición del helado  en el corazón de CABA. 
          <br className="hidden sm:block" />
          <span className="text-red-600 font-bold">Sabores auténticos que te hacen feliz.</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("menu")}
            className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-full hover:from-red-500 hover:to-pink-500 transition-all duration-300 text-lg shadow-2xl shadow-red-900/40 hover:shadow-red-900/60 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Nuestros Helados
              <span className="text-2xl">🍦</span>
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity blur-xl"></div>
          </button>

          <button
            onClick={() => scrollToSection("contacto")}
            className="px-10 py-4 bg-white text-red-600 font-bold rounded-full hover:bg-red-50 transition-all duration-300 text-lg shadow-2xl hover:scale-105 border-2 border-red-600"
          >
            Visitanos
          </button>
        </div>

        {/* Decoración inferior */}
        <div className="mt-12 flex items-center gap-4 text-white/70">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-white/40" />
          <span className="text-2xl">❄️</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-white/40" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-red-600/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
