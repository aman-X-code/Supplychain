import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, GitBranch, Map, Truck } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Optimize Your Supply Chain</h1>
        <p className="text-xl text-gray-400 mb-8">Visualize, manage, and streamline your entire supply network</p>
        <Button asChild className="bg-neon-green text-black hover:bg-neon-green-dark transition-colors">
          <Link href="/network">
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
      
      <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<GitBranch className="w-12 h-12 text-neon-blue" />}
          title="View Network"
          description="Visualize your entire supply chain as an interactive network"
        />
        <FeatureCard
          icon={<Map className="w-12 h-12 text-neon-green" />}
          title="Optimize Route"
          description="Find the most efficient routes for your goods"
        />
        <FeatureCard
          icon={<BarChart2 className="w-12 h-12 text-neon-purple" />}
          title="Supplier Management"
          description="Manage and analyze your supplier relationships"
        />
        <FeatureCard
          icon={<Truck className="w-12 h-12 text-neon-orange" />}
          title="Track Shipments"
          description="Real-time tracking and updates for all your shipments"
        />
      </div>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}