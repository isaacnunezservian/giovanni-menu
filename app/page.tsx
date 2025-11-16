import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import MenuWrapper from "@/components/MenuWrapper"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <MenuWrapper />
      <Contact />
    </main>
  )
}
