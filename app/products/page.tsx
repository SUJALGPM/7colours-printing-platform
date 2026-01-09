import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function Products() {
  const products = [
    {
      title: "Printing Equipment in Action",
      image: "/images/flexo-printing-system.jpeg",
      category: "Equipment",
    },
    {
      title: "Advanced Printing Press",
      image: "/images/digital-printing-press.jpeg",
      category: "Equipment",
    },
    {
      title: "Professional Print Samples",
      image: "/images/whatsapp-image-1.jpeg",
      category: "Samples",
    },
    {
      title: "Large Format Printing",
      image: "/images/whatsapp-image-2.jpeg",
      category: "Printing",
    },
    {
      title: "Digital Print Production",
      image: "/images/whatsapp-image-3.jpeg",
      category: "Equipment",
    },
    {
      title: "Complete Printing Setup",
      image: "/images/digital-printing-press.jpeg",
      category: "Facility",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Our Portfolio</h1>
          <p className="text-xl text-gray-600 text-center">See our state-of-the-art equipment and quality output</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden shadow-lg hover-lift cursor-pointer"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <p className="text-xs font-semibold text-cyan-300 mb-1">{product.category}</p>
                      <h3 className="font-bold">{product.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-magenta-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Impressed with our work?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss your next printing project</p>
          <a
            href="/contact"
            className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover-lift inline-block"
          >
            Request a Quote
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
