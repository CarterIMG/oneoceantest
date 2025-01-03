export default function Hero() {
  return (
    <div className="relative bg-blue-600 text-white py-24 pt-32">
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Luxurious Oceanfront Condo in Garden City Beach, SC</h1>
        <p className="text-xl mb-8">Experience the perfect beach getaway with breathtaking views</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{backgroundImage: "url('/placeholder.svg?height=600&width=1200')"}}
      ></div>
    </div>
  )
}

