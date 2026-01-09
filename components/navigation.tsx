"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 via-magenta-500 to-yellow-400 flex items-center justify-center text-white font-bold text-sm">
              7C
            </div>
            <span className="hidden sm:inline font-bold text-lg bg-gradient-to-r from-cyan-600 via-magenta-600 to-yellow-500 bg-clip-text text-transparent">
              7 Colours
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Products
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-cyan-600 to-magenta-600 text-white rounded-full font-semibold hover-lift"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              About
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Services
            </Link>
            <Link href="/products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Products
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
