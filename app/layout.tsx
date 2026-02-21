import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nathaniel Unachi - Portfolio",
  description: "Frontend Developer Portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="main-content ml-0 md:ml-[280px] pb-24 md:pb-0">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
