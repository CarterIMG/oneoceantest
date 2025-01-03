import Image from 'next/image'

const images = [
  { src: "/placeholder.svg?height=300&width=400", alt: "Living Room" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Master Bedroom" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Kitchen" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Balcony View" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Bathroom" },
  { src: "/placeholder.svg?height=300&width=400", alt: "Building Exterior" },
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div key={index} className="relative h-64 md:h-80 lg:h-96">
          <Image 
            src={image.src} 
            alt={image.alt} 
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
            <p className="text-center">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

