import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              7 Colours Printing
            </h3>
            <p className="text-gray-400 text-sm">Complete printing and packaging solutions for your business.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan-400 transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Digital Printing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Flexo Printing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Offset Printing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Custom Packaging
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex gap-2">
                <Mail size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:7coloursprint@gmail.com" className="hover:text-cyan-400">
                  7coloursprint@gmail.com
                </a>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Contact us for rates</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 7 Colours Printing Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
