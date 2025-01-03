import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Ocean View Condo</h3>
          <p className="mb-4">Experience luxury and comfort in the heart of Garden city beach, SC</p>
          <p>&copy; {new Date().getFullYear()} Blazic Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

