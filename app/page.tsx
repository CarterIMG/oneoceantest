import Header from './components/Header'
import Hero from './components/Hero'
import CondoDetails from './components/CondoDetails'
import Amenities from './components/Amenities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CondoDetails />
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

