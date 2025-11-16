import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Quicksand, Fredoka, Playfair_Display } from 'next/font/google'

// Tipografías creativas que resuenan con heladería
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
})

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Heladerías Giovanini - Helados Artesanales CABA",
  description: "Helados artesanales, tortas y café en San Nicolás, Buenos Aires. La tradición del helado italiano en el corazón de CABA.",
  keywords: ["helados artesanales", "heladería", "Buenos Aires", "San Nicolás", "tortas", "café", "helados italianos"],
  openGraph: {
    title: "Heladerías Giovanini - Helados Artesanales",
    description: "La tradición del helado italiano en el corazón de Buenos Aires",
    type: "website",
    locale: "es_AR",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${quicksand.variable} ${fredoka.variable} ${playfairDisplay.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
