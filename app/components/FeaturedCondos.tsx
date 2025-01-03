import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const condos = [
  { id: 1, name: "Oceanfront Luxury", price: 250, image: "/placeholder.svg?height=300&width=400" },
  { id: 2, name: "Beachside Retreat", price: 200, image: "/placeholder.svg?height=300&width=400" },
  { id: 3, name: "Sunset View Suite", price: 180, image: "/placeholder.svg?height=300&width=400" },
]

export default function FeaturedCondos() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Condos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {condos.map((condo) => (
            <Card key={condo.id}>
              <CardHeader>
                <Image src={condo.image} alt={condo.name} width={400} height={300} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{condo.name}</CardTitle>
                <p className="text-2xl font-bold text-blue-600">${condo.price}/night</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

