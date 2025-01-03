import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed w-full z-10 transition-colors duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${
          isScrolled ? 'text-blue-600' : 'text-white'
        }`}>One ocean place</Link>
        <nav className="flex items-center space-x-4">
          <Link 
            href="/gallery" 
            className={`hover:text-blue-600 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}
          >
            Gallery
          </Link>
          <Button 
            variant={isScrolled ? "default" : "secondary"}
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  )
}

