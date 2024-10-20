import Link from 'next/link'
import { Button } from "../../components/ui/button"

export default function Navigation() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-neon-blue">SupplyFlow</Link>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/network" className="hover:text-neon-green transition-colors">Network</Link></li>
          <li><Link href="/optimize" className="hover:text-neon-green transition-colors">Optimize</Link></li>
          <li><Link href="/suppliers" className="hover:text-neon-green transition-colors">Suppliers</Link></li>
          <li><Link href="/shipments" className="hover:text-neon-green transition-colors">Shipments</Link></li>
        </ul>
      </nav>
      <Button className="bg-neon-green text-black hover:bg-neon-green-dark transition-colors">
        Login
      </Button>
    </header>
  )
}