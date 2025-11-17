export default function About() {
  return (
    <section id="nosotros" className="relative px-4 py-24 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Decoración de fondo - helados flotantes */}
      <div className="absolute top-20 left-10 text-8xl opacity-5 animate-float">🍦</div>
      <div className="absolute bottom-40 right-20 text-9xl opacity-5 animate-float" style={{ animationDelay: '1s' }}>🍨</div>
      <div className="absolute top-1/2 right-10 text-7xl opacity-5 animate-float" style={{ animationDelay: '2s' }}>🍧</div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Decoración superior */}
        <div className="flex items-center justify-center gap-4 mb-12 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍓</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>

        {/* Título */}
        <h2 className="relative mb-12 text-5xl font-bold text-center text-red-600 font-display md:text-6xl lg:text-7xl">
          <span className="relative inline-block" style={{ textShadow: '3px 3px 0px rgba(255,182,193,0.3)' }}>
            Nuestra Historia
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 rounded-full" />
        </h2>

        {/* Contenido en cards con tono porteño */}
        <div className="space-y-8">
          <div className="p-8 transition-all duration-300 transform border-2 border-red-100 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl md:p-10 hover:border-red-300 hover:shadow-2xl hover:-translate-y-1">
            <p className="text-lg leading-relaxed text-center text-gray-700 md:text-xl">
              En <span className="font-bold text-red-600">Heladerías Giovanni</span>, llevamos la tradición italiana del helado artesanal 
              a las calles de <span className="font-bold text-red-600">Buenos Aires</span>. Cada cucurucho, cada sabor, es una invitación 
              a disfrutar de lo auténtico, de lo que se hace con pasión y dedicación.
            </p>
          </div>

          <div className="p-8 transition-all duration-300 transform border-2 border-red-200 shadow-xl bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl md:p-10 hover:border-red-400 hover:shadow-2xl hover:-translate-y-1">
            <p className="text-lg leading-relaxed text-center text-gray-700 md:text-xl">
              En pleno <span className="font-bold text-red-600">San Nicolás</span>, te esperamos con helados cremosos, 
              tortas caseras y un café que invita a quedarse. Acá no vendemos solo helado: te ofrecemos un momento de felicidad, 
              un gustito que te hace sonreír, como debe ser.
            </p>
          </div>

          <div className="p-8 transition-all duration-300 transform border-2 border-red-100 shadow-xl bg-white/80 backdrop-blur-sm rounded-3xl md:p-10 hover:border-red-300 hover:shadow-2xl hover:-translate-y-1">
            <p className="font-serif text-lg italic leading-relaxed text-center text-gray-700 md:text-xl">
              "Porque un buen helado no es solo un postre, es un pedacito de alegría"
            </p>
          </div>
        </div>

        {/* Features destacados estilo porteño */}
        <div className="grid grid-cols-1 gap-8 mt-20 md:grid-cols-3">
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-white transition-transform rounded-full shadow-lg bg-gradient-to-br from-red-500 to-pink-500 group-hover:scale-110">
              <span className="text-4xl">🍦</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-red-600 font-display">Artesanales</h3>
            <p className="text-sm text-gray-600">Hechos con amor y dedicación</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-white transition-transform rounded-full shadow-lg bg-gradient-to-br from-pink-500 to-red-500 group-hover:scale-110">
              <span className="text-4xl">🎂</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-red-600 font-display">Tortas & Café</h3>
            <p className="text-sm text-gray-600">Para endulzar tu día</p>
          </div>

          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-white transition-transform rounded-full shadow-lg bg-gradient-to-br from-red-500 to-pink-500 group-hover:scale-110">
              <span className="text-4xl">❤️</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-red-600 font-display">Con Cariño</h3>
            <p className="text-sm text-gray-600">Atención de primera</p>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="flex items-center justify-center gap-4 mt-16 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍒</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>
      </div>
    </section>
  )
}
