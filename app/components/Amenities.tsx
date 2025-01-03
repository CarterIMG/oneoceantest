import { CheckCircle } from 'lucide-react'

const amenities = [
  "Oceanfront Views",
  "Private Balcony",
  "Fully Equipped Kitchen",
  "In-unit Washer/Dryer",
  "Free Wi-Fi",
  "Cable TV",
  "Air Conditioning",
  "Linens and Towels Provided",
  "Beach Chairs and Umbrellas",
  "Swimming Pool + jacuzzi Access (2 Pool 2 jacuzzi)",
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="text-green-500" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

