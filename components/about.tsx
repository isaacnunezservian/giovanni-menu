export default function About() {
  return (
    <section id="nosotros" className="relative py-24 px-4 bg-gradient-to-b from-white via-pink-50/30 to-white overflow-hidden">
      {/* Decoración de fondo - helados flotantes */}
      <div className="absolute top-20 left-10 text-8xl opacity-5 animate-float">🍦</div>
      <div className="absolute bottom-40 right-20 text-9xl opacity-5 animate-float" style={{ animationDelay: '1s' }}>🍨</div>
      <div className="absolute top-1/2 right-10 text-7xl opacity-5 animate-float" style={{ animationDelay: '2s' }}>🍧</div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Decoración superior */}
        <div className="mb-12 flex items-center justify-center gap-4 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍓</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>

        {/* Título */}
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-12 text-center relative">
          <span className="relative inline-block" style={{ textShadow: '3px 3px 0px rgba(255,182,193,0.3)' }}>
            Nuestra Historia
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 rounded-full" />
        </h2>

        {/* Contenido en cards con tono porteño */}
        <div className="space-y-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-red-100 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
              En <span className="font-bold text-red-600">Heladerías Giovanini</span>, llevamos la tradición italiana del helado artesanal 
              a las calles de <span className="font-bold text-red-600">Buenos Aires</span>. Cada cucurucho, cada sabor, es una invitación 
              a disfrutar de lo auténtico, de lo que se hace con pasión y dedicación.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl p-8 md:p-10 border-2 border-red-200 hover:border-red-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
              En pleno <span className="font-bold text-red-600">San Nicolás</span>, te esperamos con helados cremosos, 
              tortas caseras y un café que invita a quedarse. Acá no vendemos solo helado: te ofrecemos un momento de felicidad, 
              un gustito que te hace sonreír, como debe ser.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-red-100 hover:border-red-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center font-serif italic">
              "Porque un buen helado no es solo un postre, es un pedacito de alegría"
            </p>
          </div>
        </div>

        {/* Features destacados estilo porteño */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-4xl">🍦</span>
            </div>
            <h3 className="font-display text-red-600 text-2xl font-bold mb-2">Artesanales</h3>
            <p className="text-gray-600 text-sm">Hechos con amor y dedicación</p>
          </div>

          <div className="text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-4xl">🎂</span>
            </div>
            <h3 className="font-display text-red-600 text-2xl font-bold mb-2">Tortas & Café</h3>
            <p className="text-gray-600 text-sm">Para endulzar tu día</p>
          </div>

          <div className="text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="font-display text-red-600 text-2xl font-bold mb-2">Con Cariño</h3>
            <p className="text-gray-600 text-sm">Atención de primera</p>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="mt-16 flex items-center justify-center gap-4 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍒</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>
      </div>
    </section>
  )
}
