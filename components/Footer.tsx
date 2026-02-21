"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Frontend Development", href: "/services/frontend" },
    { name: "UI/UX Design Implementation", href: "/services/design" },
    { name: "Web Performance Optimization", href: "/services/performance" },
    { name: "Consulting", href: "/services/consulting" },
    { name: "Maintenance", href: "/services/maintenance" },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup")
  }

  return (
    <footer className="bg-black/40 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 block"
            >
              Nathaniel Unachi
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Frontend Developer passionate about crafting intuitive and visually appealing digital experiences. Let's
              build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <a
                href="mailto:nathaniel.unachi@email.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Mail className="w-4 h-4 mr-3 group-hover:text-blue-400" />
                nathaneilunachi@email.com
              </a>
              <a
                href="tel:+2347010690347"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-4 h-4 mr-3 group-hover:text-blue-400" />
                +234 701-069-0347
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                Abuja, Nigeria
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">Get the latest updates on my projects and blog posts.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 text-sm py-2 px-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                  required 
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-2 rounded-lg transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>© {currentYear} Nathaniel Unachi. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>using Next.js & Tailwind CSS</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-shadow z-40"
        aria-label="Back to top"
      >
        <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          ↑
        </motion.div>
      </motion.button>
    </footer>
  )
}

export default Footer
