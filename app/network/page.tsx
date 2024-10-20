"use client"

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sampleData = {
  nodes: [
    { id: 'Supplier A', type: 'supplier' },
    { id: 'Manufacturer B', type: 'manufacturer' },
    { id: 'Distributor C', type: 'distributor' },
    { id: 'Retailer D', type: 'retailer' },
  ],
  links: [
    { source: 'Supplier A', target: 'Manufacturer B' },
    { source: 'Manufacturer B', target: 'Distributor C' },
    { source: 'Distributor C', target: 'Retailer D' },
  ],
}

export default function NetworkVisualization() {
  const svgRef = useRef(null)

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      const width = 800
      const height = 600

      svg.selectAll("*").remove()

      const simulation = d3.forceSimulation(sampleData.nodes)
        .force('link', d3.forceLink(sampleData.links).id(d => d.id))
        .force('charge', d3.forceManyBody().strength(-400))
        .force('center', d3.forceCenter(width / 2, height / 2))

      const link = svg.append('g')
        .selectAll('line')
        .data(sampleData.links)
        .enter().append('line')
        .attr('stroke', '#999')
        .attr('stroke-opacity', 0.6)
        .attr('stroke-width', 2)

      const node = svg.append('g')
        .selectAll('circle')
        .data(sampleData.nodes)
        .enter().append('circle')
        .attr('r', 10)
        .attr('fill', d => {
          switch (d.type) {
            case 'supplier': return 'var(--color-neon-blue)'
            case 'manufacturer': return 'var(--color-neon-green)'
            case 'distributor': return 'var(--color-neon-purple)'
            case 'retailer': return 'var(--color-neon-orange)'
            default: return '#9E9E9E'
          }
        })
        .call(d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended))

      node.append('title')
        .text(d => d.id)

      simulation.on('tick', () => {
        link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)

        node
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
      })

      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        event.subject.fx = event.subject.x
        event.subject.fy = event.subject.y
      }

      function dragged(event) {
        event.subject.fx = event.x
        event.subject.fy = event.y
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0)
        event.subject.fx = null
        event.subject.fy = null
      }
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-neon-blue">Supply Chain Network Visualization</h1>
      <Card className="bg-[#09090B]">
        <CardContent>
          <svg ref={svgRef} width="800" height="600" className="mx-auto"></svg>
        </CardContent>
      </Card>
    </div>
  )
}