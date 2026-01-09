"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Zap, Palette, Package, Award } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-cyan-50 to-magenta-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-magenta-600 to-yellow-500 bg-clip-text text-transparent">
                  Printing & Packaging
                </span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-4">Digital Printing • Flexo Printing • Offset Printing</p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Everything your business needs under one roof. From custom boxes to branded banners, we deliver premium
                quality with fast turnaround.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-magenta-600 text-white rounded-lg font-semibold hover-lift flex items-center justify-center gap-2"
                >
                  Get a Quote <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-lg font-semibold hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2"
                >
                  View Services <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right - Image Updated with actual flexo printing equipment */}
            <div className="animate-slide-in-right hidden lg:block">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/whatsapp-image-1.jpeg"
                  alt="Flexographic printing machine in operation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose 7 Colours?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Palette, title: "Multiple Technologies", desc: "Digital, Flexo & Offset printing" },
              { icon: Package, title: "Complete Setup", desc: "Everything under one roof" },
              { icon: Award, title: "Premium Quality", desc: "Best materials & finishes" },
              { icon: Zap, title: "Fast Turnaround", desc: "Quick delivery times" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-gray-200 hover-lift hover:border-cyan-400 hover:shadow-lg group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-magenta-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase Section Added new section showcasing actual equipment */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background-image.jpeg"
            alt="Printing machinery background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gray-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">State-of-the-Art Equipment</h2>
          <p className="text-center text-gray-300 text-lg mb-12">Advanced machinery for premium quality results</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Digital Printing Equipment */}
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="relative h-72">
                <Image
                  src="/images/digital-printing-press.jpeg"
                  alt="Advanced digital printing press with color management system"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Digital Printing Press</h3>
                <p className="text-gray-200">High-precision color management with advanced printing technology</p>
              </div>
            </div>

            {/* Flexo Printing in Action */}
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="relative h-72">
                <Image
                  src="/images/flexo-printing-system.jpeg"
                  alt="Flexographic printing with color ink management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">Flexo Printing System</h3>
                <p className="text-gray-200">Color-precise ink cartridge system for vibrant packaging prints</p>
              </div>
            </div>
          </div>

          {/* Quality Control */}
          <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full min-h-[300px]">
                <Image
                  src="/images/whatsapp-image-2.jpeg"
                  alt="Color samples and quality control prints"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Color Precision & Quality Control</h3>
                <p className="text-gray-200">Extensive color sampling and quality verification for every print job to ensure your brand colors are perfect every time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Printing Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Printing Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Printing",
                desc: "High-quality, vibrant prints with precise colors. Perfect for small to medium print runs with quick turnaround.",
                color: "from-cyan-500 to-blue-500",
              },
              {
                title: "Flexo Printing",
                desc: "Ideal for packaging and labels. Excellent for high-volume production on various substrates.",
                color: "from-magenta-500 to-pink-500",
              },
              {
                title: "Offset Printing",
                desc: "Professional quality for large volume projects. Perfect for brochures, catalogs, and premium packaging.",
                color: "from-yellow-400 to-orange-500",
              },
            ].map((tech, i) => (
              <div key={i} className="p-8 rounded-xl bg-white border border-gray-200 hover-lift group">
                <div className={`h-2 mb-4 rounded-full bg-gradient-to-r ${tech.color} w-12`}></div>
                <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 text-lg">Wide range of printing and packaging solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {[
              // { name: "Rigid Boxes", image: "/images/rigid-boxes.webp" },
              // { name: "Gift Boxes", image: "/images/gift-boxes.avif" },
              { name: "Corrugation Boxes", image: "/images/corrugation-boxes.jpg" },
              { name: "Mono Cartons", image: "/images/mono-cartons.jpg" },
              { name: "Pamphlets", image: "/images/pamphlets.jpg" },
              { name: "Sticker Labels", image: "/images/sticker-labels.jpg" },
              { name: "Paper Bags", image: "/images/paper-bags.webp" },
              { name: "Visiting Cards", image: "/images/visiting-cards.png" },
              { name: "Shredded Paper", image: "/images/shredded-paper.jpg" },
              { name: "Ads Banner Printing", image: "/images/ads-banner-printing.png" },
            ].map((product, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-gray-200 text-center hover-lift cursor-pointer group bg-white"
              >
                <div className="w-full h-32 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="font-semibold text-gray-800">{product.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-magenta-600 text-white rounded-lg font-semibold hover-lift inline-flex items-center gap-2"
            >
              View Full Gallery <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-magenta-600 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Prints?</h2>
          <p className="text-xl mb-8 opacity-90">Get in touch with our team for a custom quote and consultation.</p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover-lift inline-flex items-center gap-2"
          >
            Contact Us Today <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
