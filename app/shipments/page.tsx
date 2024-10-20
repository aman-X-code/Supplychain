"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Truck, Package, MapPin } from 'lucide-react'

const mockShipments = {
  'SHP001': { status: 'In Transit', origin: 'Supplier A', destination: 'Manufacturer B', eta: '2023-06-15' },
  'SHP002': { status: 'Delivered', origin: 'Manufacturer B', destination: 'Distributor C', eta: '2023-06-10' },
  'SHP003': { status: 'Processing', origin: 'Distributor C', destination: 'Retailer D', eta: '2023-06-20' },
}

export default function ShipmentTracking() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [shipment, setShipment] = useState(null)

  const handleTrack = () => {
    const foundShipment = mockShipments[trackingNumber]
    setShipment(foundShipment || { status: 'Not Found' })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-neon-orange">Shipment Tracking</h1>
      <Card className="bg-[#09090B] mb-6">
        <CardContent className="flex items-center space-x-4 p-4">
          <Input 
            placeholder="Enter tracking number" 
            value={trackingNumber} 
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="flex-grow text-white placeholder-gray-400"
          />
          <Button onClick={handleTrack} className="bg-neon-orange text-black hover:bg-neon-orange/80">Track</Button>
        </CardContent>
      </Card>
      {shipment && (
        <Card className="bg-[#09090B]">
          <CardHeader>
            <CardTitle className="text-neon-orange">Shipment Details</CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            {shipment.status === 'Not Found' ? (
              <p>No shipment found with the given tracking number.</p>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-neon-orange" />
                  <span>Status: {shipment.status}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-neon-orange" />
                  <span>Origin: {shipment.origin}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-neon-orange" />
                  <span>Destination: {shipment.destination}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>ETA: {shipment.eta}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}