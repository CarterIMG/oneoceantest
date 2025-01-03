import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>TBA</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>TBA</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>TBA</p>
          </div>
        </div>
      </div>
    </section>
  )
}

