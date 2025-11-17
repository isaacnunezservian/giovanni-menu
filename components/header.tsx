"use client"

import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-red-100 shadow-lg bg-white/95 backdrop-blur-xl shadow-red-50/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="relative w-16 h-16">
              <Image
                src="/images/logo.jpg"
                alt="Heladerías Giovanni"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold leading-none tracking-tight text-red-600 font-display">
                GIOVANINI
              </div>
              <div className="text-xs tracking-widest text-red-400 uppercase">
                Helados & Café
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-8 md:flex">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="relative text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-red-600 group"
            >
              Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="relative text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-red-600 group"
            >
              Galería
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="relative text-sm font-medium tracking-wide text-gray-700 transition-colors hover:text-red-600 group"
            >
              Menú
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-500/30 hover:scale-105"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-red-600 transition-colors md:hidden hover:text-red-500"
            aria-label="Menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="pb-4 space-y-2 md:hidden animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full px-4 py-3 font-medium text-left text-gray-700 transition-all rounded-lg hover:text-red-600 hover:bg-red-50"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="block w-full px-4 py-3 font-medium text-left text-gray-700 transition-all rounded-lg hover:text-red-600 hover:bg-red-50"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="block w-full px-4 py-3 font-medium text-left text-gray-700 transition-all rounded-lg hover:text-red-600 hover:bg-red-50"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full px-4 py-3 font-bold text-left text-white transition-all rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
