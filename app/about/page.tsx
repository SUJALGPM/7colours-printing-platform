import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">About 7 Colours Printing Solution</h1>
          <p className="text-xl text-gray-600 text-center">
            Your trusted partner for comprehensive printing and packaging solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                7 Colours Printing Solution is a professional printing company offering Digital Printing, Flexo
                Printing, and Offset Printing, providing a complete paper printing and converting setup under one roof.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We specialize in packaging, branding, and commercial print solutions for businesses of all sizes. Our
                commitment to quality, reliability, and customization has made us a trusted partner in the printing
                industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With state-of-the-art equipment and experienced professionals, we deliver premium results that bring
                your vision to life.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/whatsapp-image-3.jpeg"
                alt="7 Colours printing facility"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Strengths */}
          <div className="bg-gradient-to-r from-cyan-50 to-magenta-50 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Complete printing and converting setup in one location",
                "Multiple printing technologies (Digital, Flexo, Offset)",
                "Custom packaging solutions tailored to your needs",
                "High-quality materials and finishes",
                "Fast turnaround times without compromising quality",
                "Competitive pricing for all project sizes",
                "Professional team with years of industry experience",
                "Committed to customer satisfaction and reliability",
              ].map((strength, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{strength}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
