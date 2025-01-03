import { Home, Users, Bed, Bath } from 'lucide-react'

export default function CondoDetails() {
  return (
    <section id="details" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Condo Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Welcome to our stunning oceanfront condo in the heart of Garden City. 
              This beautifully appointed 2-bedroom, 2-bathroom condo offers breathtaking 
              views of the Atlantic Ocean and easy access to all the attractions that 
              make Myrtle Beach a premier vacation destination.
            </p>
            <p className="text-lg mb-4">
              Our condo features a spacious living area, a fully equipped kitchen, 
              and a private balcony where you can relax and enjoy the ocean breeze. 
              Whether you're here for a family vacation, a romantic getaway, or a 
              golf trip with friends, our condo provides the perfect home base for 
              your Myrtle Beach adventure.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Home className="mr-2" />
                <span>1,350 sq ft</span>
              </li>
              <li className="flex items-center">
                <Users className="mr-2" />
                <span>Sleeps up to 6 guests</span>
              </li>
              <li className="flex items-center">
                <Bed className="mr-2" />
                <span>2 Bedrooms (1 King, 2 twins, Queen (sofa bed)</span>
              </li>
              <li className="flex items-center">
                <Bath className="mr-2" />
                <span>2 Full Bathrooms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

