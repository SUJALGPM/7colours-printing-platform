import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "7 Colours Printing Solution - Professional Printing & Packaging Services",
  description:
    "Complete printing and packaging solutions. Digital, Flexo, and Offset Printing. Rigid boxes, labels, brochures, and more.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-white text-gray-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
