"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "",
    name: "",
    email: "",
    phone: ""
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, guests: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Booking Request Submitted",
          description: "We'll get back to you soon!",
        })
        setFormData({
          checkIn: "",
          checkOut: "",
          guests: "",
          name: "",
          email: "",
          phone: ""
        })
      } else {
        throw new Error('Failed to submit booking')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section id="booking" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Book Your Stay</h2>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="checkIn">Check-in Date</Label>
              <Input type="date" id="checkIn" required value={formData.checkIn} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="checkOut">Check-out Date</Label>
              <Input type="date" id="checkOut" required value={formData.checkOut} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <Select onValueChange={handleSelectChange} value={formData.guests}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5 Guests</SelectItem>
                  <SelectItem value="6">6 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input type="text" id="name" required value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" required value={formData.phone} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full">Request Booking</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

