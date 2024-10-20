"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RouteOptimization() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [route, setRoute] = useState(null)

  const optimizeRoute = () => {
    // This is a placeholder for the actual optimization algorithm
    setRoute({
      path: [start, 'Intermediate Stop', end],
      cost: Math.floor(Math.random() * 1000) + 500,
      time: Math.floor(Math.random() * 24) + 1,
      distance: Math.floor(Math.random() * 1000) + 100,
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-neon-green">Route Optimization</h1>
      <Card className="bg-[#09090B] mb-6">
        <CardContent className="flex flex-col space-y-4 p-4">
          <div>
            <Label htmlFor="start" className="text-white">Start Point</Label>
            <Input 
              id="start" 
              value={start} 
              onChange={(e) => setStart(e.target.value)} 
              placeholder="Enter start point" 
              className="text-white placeholder-gray-400"
            />
          </div>
          <div>
            <Label htmlFor="end" className="text-white">End Point</Label>
            <Input 
              id="end" 
              value={end} 
              onChange={(e) => setEnd(e.target.value)} 
              placeholder="Enter end point" 
              className="text-white placeholder-gray-400"
            />
          </div>
          <Button onClick={optimizeRoute} disabled={!start || !end} className="bg-neon-green text-black hover:bg-neon-green-dark">
            Optimize Route
          </Button>
        </CardContent>
      </Card>
      {route && (
        <Card className="bg-[#09090B]">
          <CardHeader>
            <CardTitle className="text-neon-green">Optimized Route</CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            <p>Path: {route.path.join(' → ')}</p>
            <p>Cost: ${route.cost}</p>
            <p>Time: {route.time} hours</p>
            <p>Distance: {route.distance} km</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}