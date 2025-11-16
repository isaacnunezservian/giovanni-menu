"use client"

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 px-4 bg-gradient-to-b from-red-50/20 via-pink-50 to-white overflow-hidden">
      {/* Textura de fondo */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjQiIGZpbGw9IiNlZjQ0NDQiLz48L3N2Zz4=')]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Decoración superior */}
        <div className="mb-12 flex items-center justify-center gap-4 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">📍</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>

        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-8 text-center relative">
          <span style={{ textShadow: '3px 3px 0px rgba(255,182,193,0.3)' }}>
            Vení a Visitarnos
          </span>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-red-600 via-pink-500 to-red-600 rounded-full" />
        </h2>

        <p className="text-center text-gray-600 text-lg md:text-xl mb-16 max-w-2xl mx-auto">
          Estamos en pleno San Nicolás, esperándote con los mejores helados de Buenos Aires
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Ubicación */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl">📍</span>
                </div>
                <div>
                  <h3 className="font-display text-red-600 text-2xl font-bold mb-3">Ubicación</h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    Av. Corrientes 1255
                    <br />
                    San Nicolás, C1043
                    <br />
                    Buenos Aires, Argentina
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Av.+Corrientes+1255,+San+Nicolás,+Buenos+Aires" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-red-600 hover:text-red-500 font-semibold underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-3xl">📱</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-red-600 text-2xl font-bold mb-4">Seguinos en Instagram</h3>
                  <a
                    href="https://www.instagram.com/heladosviagiovanni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105 font-bold"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 11.806-2.806 1.44 1.44 0 01-.806 2.806z" />
                    </svg>
                    <span className="text-lg">@heladosviagiovanni</span>
                  </a>
                  <p className="text-gray-600 text-sm mt-3">Enterate de nuestras promos y novedades</p>
                </div>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🕐</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4">Horarios de Atención</h3>
                  <div className="space-y-2 text-lg">
                    <p className="font-semibold">Lunes a Domingo</p>
                    <p className="text-white/90">12:00 - 23:00 hs</p>
                  </div>
                  <p className="text-sm mt-4 text-white/80">
                    ¡Vení cuando quieras! Te esperamos con helado fresco todos los días.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[600px] md:h-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative rounded-3xl overflow-hidden h-full border-4 border-white shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168847916843!2d-58.38470492425484!3d-34.60367557295838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf3e2b13c5%3A0x7e7756e2b56c3d0a!2sAv.%20Corrientes%201255%2C%20C1043%20CABA!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Heladerías Giovanini"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-20 text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 border-2 border-red-200 shadow-xl">
          <h3 className="font-display text-3xl md:text-4xl text-red-600 font-bold mb-4">
            ¿Te dieron ganas de un helado?
          </h3>
          <p className="text-gray-700 text-xl mb-6">
            Pasá por el local o hacenos tu pedido. ¡Te esperamos con los mejores sabores!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-4xl animate-float">🍦</span>
            <span className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🍨</span>
            <span className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🍧</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Heladerías Giovanini - Todos los derechos reservados
          </p>
          <p className="text-red-600 font-semibold mt-2">
            Hecho con ❤️ en Buenos Aires
          </p>
        </div>

        {/* Decoración inferior */}
        <div className="mt-12 flex items-center justify-center gap-4 text-red-400/50">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-red-400/50" />
          <span className="text-3xl">🍓</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-red-400/50" />
        </div>
      </div>
    </section>
  )
}
