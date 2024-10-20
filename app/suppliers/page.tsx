"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const suppliers = [
  { id: 1, name: 'Supplier A', performance: 92, reliability: 88 },
  { id: 2, name: 'Supplier B', performance: 87, reliability: 90 },
  { id: 3, name: 'Supplier C', performance: 95, reliability: 93 },
  { id: 4, name: 'Supplier D', performance: 89, reliability: 85 },
]

export default function SupplierManagement() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-neon-purple">Supplier Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {suppliers.map((supplier) => (
          <Card key={supplier.id} className="bg-[#09090B]">
            <CardHeader>
              <CardTitle className="text-neon-purple">{supplier.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <p>Performance: {supplier.performance}%</p>
              <p>Reliability: {supplier.reliability}%</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}