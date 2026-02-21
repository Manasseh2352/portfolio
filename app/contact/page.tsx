"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a frontend project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new frontend projects and opportunities. Whether you're a company
                looking to hire, or you're a fellow developer wanting to collaborate, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  content: "nathaneilunachi@email.com",
                  href: "mailto:nathaneilunachi@email.com",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Phone",
                  content: "+234 701 069-0347",
                  href: "tel:+2347010690347",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: "Location",
                  content: "Abuja, Nigeria",
                  href: "#",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                  <div className="text-blue-400">{contact.icon}</div>
                  <div>
                    <h3 className="font-semibold">{contact.title}</h3>
                    <a href={contact.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                      {contact.content}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <h3 className="text-xl font-bold mb-4">Response Time</h3>
              <p className="text-gray-300">
                I typically respond to emails within 24 hours. For urgent matters, feel free to call or send a message
                on LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input type="text" required placeholder="John" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input type="text" required placeholder="Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input type="email" required placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Input type="text" required placeholder="Frontend Project Inquiry" className="bg-white/5 border-white/10 text-white placeholder:text-white/40" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    required
                    placeholder="Tell me about your frontend project..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[120px]"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg border-none cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)] w-full justify-center"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "Yes! I work with clients worldwide. I'm comfortable with remote collaboration and can adjust my schedule to accommodate different time zones for meetings and communication.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "I specialize in modern frontend technologies including React, Next.js, TypeScript, and various CSS frameworks. I'm always learning new technologies to stay current with industry trends.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, I offer ongoing maintenance and support packages for all projects. This includes bug fixes, security updates, and feature enhancements as needed.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <h3 className="font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
