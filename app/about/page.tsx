"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Frontend Developer with 3+ years of experience creating engaging and user-friendly web
            interfaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Nathaniel Unachi"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I started my journey in web development 3 years ago, driven by a passion for crafting intuitive and
              visually appealing user interfaces. What began as curiosity about how websites work has evolved into a
              career focused on building responsive, high-performance web applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in frontend development with expertise in React, Next.js, TypeScript, and modern CSS
              frameworks. I am dedicated to creating seamless user experiences and pixel-perfect designs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me creating mind blowing side projects, 
              competing in Hackertons, or exploring new frontend technologies. 
              I'm always excited to take on new challenges and collaborate with 
              like-minded individuals.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="#" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg border-none cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
                <Download className="w-4 h-4" />
                Download CV
              </Link>
              <div className="flex space-x-4">
                <Link href="#" className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                year: "2025 - Present",
                title: "Frontend Developer",
                company: "Shulioo",
                description:
                  "Leading development of complex user interfaces using React and Next.js. Focused on performance optimization, component reusability, and state management.",
              },
              {
                year: "2025 - Present",
                title: "Frontend Developer",
                company: "GDG Uni.Abuja",
                description:
                  "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces. Improved site performance by 40%.",
              },
              {
                year: "2019 - 2020",
                title: "Junior Frontend Developer",
                company: "StartupXYZ",
                description:
                  "Built and maintained company website and user-facing features. Gained experience in modern frontend frameworks and agile methodologies.",
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/4">
                    <span className="text-blue-400 font-semibold">{exp.year}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-blue-300 mb-3">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
