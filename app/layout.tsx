import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SupplyFlow - Optimize Your Supply Chain',
  description: 'Visualize, manage, and streamline your entire supply network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#09090B] text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}