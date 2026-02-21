"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter, Menu, X } from "lucide-react"

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Skills", href: "/skills", icon: Code },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Manasseh2352", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/nathaniel-unachi-42a90b25b", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/ManassehUnachi", icon: Twitter },
  ]

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        className="hidden md:flex fixed left-0 top-0 h-full w-[280px] bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 flex-col"
      >
        <div className="p-6">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Nathaniel Unachi
          </Link>
          <p className="text-gray-400 text-sm mt-2">Frontend Developer</p>
        </div>

        <div className="flex-1 px-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-blue-400"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div layoutId="activeIndicator" className="ml-auto w-2 h-2 bg-blue-400 rounded-full" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex justify-center space-x-4 mb-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
          <div className="text-center text-xs text-gray-500">© 2024 Nathaniel Unachi</div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Bar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-white/10 z-50"
      >
        <div className="flex justify-around items-center py-2">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive ? "text-blue-400" : "text-gray-400 hover:text-blue-400"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.name}</span>
                {isActive && (
                  <motion.div layoutId="mobileActiveIndicator" className="w-1 h-1 bg-blue-400 rounded-full" />
                )}
              </Link>
            )
          })}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Menu className="w-5 h-5" />
            <span className="text-xs font-medium">More</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="absolute bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-white/10 rounded-t-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Menu</h3>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "text-gray-300 hover:bg-white/5 hover:text-blue-400"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          className="p-3 text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                          aria-label={social.name}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
