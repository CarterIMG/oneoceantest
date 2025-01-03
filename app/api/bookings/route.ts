import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const bookingsFile = path.join(process.cwd(), 'bookings.json')

  try {
    if (fs.existsSync(bookingsFile)) {
      const fileContent = fs.readFileSync(bookingsFile, 'utf-8')
      const bookings = JSON.parse(fileContent)
      return NextResponse.json(bookings)
    } else {
      return NextResponse.json([])
    }
  } catch (error) {
    console.error('Error reading bookings:', error)
    return NextResponse.json({ message: 'Error reading bookings' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const booking = await request.json()
  const bookingsFile = path.join(process.cwd(), 'bookings.json')

  try {
    let bookings = []
    if (fs.existsSync(bookingsFile)) {
      const fileContent = fs.readFileSync(bookingsFile, 'utf-8')
      bookings = JSON.parse(fileContent)
    }

    bookings.push({ ...booking, id: Date.now() })
    fs.writeFileSync(bookingsFile, JSON.stringify(bookings, null, 2))

    return NextResponse.json({ message: 'Booking saved successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error saving booking:', error)
    return NextResponse.json({ message: 'Error saving booking' }, { status: 500 })
  }
}

