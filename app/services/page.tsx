import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-magenta-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Our Services</h1>
          <p className="text-xl text-gray-600 text-center">Comprehensive printing solutions for every business need</p>
        </div>
      </section>

      {/* Printing Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Printing Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🖨️",
                title: "Digital Printing",
                desc: "High-quality, vibrant prints with precise CMYK colors. Perfect for:",
                features: [
                  "Small to medium print runs",
                  "Quick turnaround time",
                  "Full color graphics",
                  "Variable data printing",
                ],
              },
              {
                icon: "⚙️",
                title: "Flexo Printing",
                desc: "Advanced flexographic printing for packaging and labels. Ideal for:",
                features: [
                  "High-volume production",
                  "Multiple substrate types",
                  "Consistent quality",
                  "Flexible designs",
                ],
              },
              {
                icon: "🏭",
                title: "Offset Printing",
                desc: "Professional offset printing for large scale projects. Best for:",
                features: [
                  "Large volume orders",
                  "Premium brochures",
                  "Catalogs & magazines",
                  "High-quality packaging",
                ],
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-white border-2 border-gray-200 hover-lift group hover:border-cyan-400"
              >
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.desc}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-cyan-600"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Packaging & Printing Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Rigid Boxes", desc: "Premium rigid packaging for luxury products", image: "/images/rigid-boxes.webp" },
              { name: "Gift Boxes", desc: "Elegant gift packaging with custom designs", image: "/images/gift-boxes.avif" },
              { name: "Corrugation Boxes", desc: "Durable shipping and storage boxes", image: "/images/corrugation-boxes.jpg" },
              { name: "Mono Cartons", desc: "Single-color professional carton packaging", image: "/images/mono-cartons.jpg" },
              { name: "Top + Bottom Boxes", desc: "Two-piece box solutions for retail", image: "/images/top-bottom-boxes.jpg" },
              { name: "Card Samples", desc: "Print samples and color proofs", image: "/images/whatsapp-image-2.jpeg" },
              { name: "Pamphlets & Brochures", desc: "Multi-page marketing collateral", image: "/images/pamphlets.webp" },
              { name: "Sticker Labels", desc: "Custom printed labels and stickers", image: "/images/sticker-labels.jpg" },
              { name: "Shredded Paper", desc: "Eco-friendly protective packaging", image: "/images/shredded-paper.jpg" },
              { name: "Tags", desc: "Product and hang tags", image: "/images/tags.avif" },
              { name: "Paper Bags", desc: "Branded paper bags for retail", image: "/images/paper-bags.webp" },
              { name: "Butter Paper", desc: "Premium wrapping and tissue options", image: "/images/butter-paper.jpg" },
              { name: "Visiting Cards", desc: "Professional business card printing", image: "/images/visiting-cards.png" },
              { name: "Ads Banner Printing", desc: "Large format promotional banners", image: "/images/ads-banner-printing.png" },
            ].map((product, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 hover-lift group overflow-hidden">
                <div className="relative h-48 w-full bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-600 transition-colors">{product.name}</h3>
                  <p className="text-gray-600">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
