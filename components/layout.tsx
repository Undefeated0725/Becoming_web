import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-sky-100">
      <header className="bg-sky-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WechatIMG54-4xPytXOdMbMrZIURwUPaYiViqZUSDK.jpg" 
                alt="Becoming Logo" 
                width={50} 
                height={50} 
                className="rounded-full"
              />
              <span className="text-2xl font-bold">Becoming Global</span>
            </Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/programs" className="hover:underline">Programs</Link></li>
              <li><Link href="/get-involved" className="hover:underline">Get Involved</Link></li>
              <li><Link href="/resources" className="hover:underline">Resources</Link></li>
              <li><Link href="/community" className="hover:underline">Community</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-sky-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Becoming Global Student Association. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:underline">Privacy Policy</Link>
              <Link href="#" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}