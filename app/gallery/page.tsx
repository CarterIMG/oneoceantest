import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Our Condo Gallery</h1>
            <Link href="/">
              <Button variant="outline">Home</Button>
            </Link>
          </div>
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  )
}

