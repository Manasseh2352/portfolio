"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Star,
  Users,
  Coffee,
  Award,
  Calendar,
  CheckCircle,
} from "lucide-react"

export default function Home() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Technologies" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Nathaniel delivered an exceptional e-commerce platform frontend that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CEO at StartupXYZ",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Nathaniel was a game-changer for our startup. He transformed our ideas into a beautiful, functional web application that our users love.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Nathaniel's UI/UX skills are outstanding. He created a website that not only looks amazing but also converts visitors into customers. Highly recommended!",
      rating: 5,
    },
  ]

  const recentWork = [
    {
      title: "E-Commerce Storefront",
      description: "Responsive and interactive e-commerce user interface.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Task Management Dashboard",
      description: "Intuitive dashboard for real-time task organization.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Redux", "CSS Modules"],
    },
    {
      title: "Interactive Data Visualization",
      description: "Dynamic charts and graphs for complex datasets.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["D3.js", "React", "SVG"],
    },
  ]

  const services = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks like React and Next.js.",
      icon: "🎨",
      features: ["Responsive Design", "Performance Optimization", "Modern Frameworks", "Cross-browser Compatibility"],
    },
    {
      title: "UI/UX Design Implementation",
      description: "Translating design mockups into pixel-perfect, user-friendly web interfaces.",
      icon: "✨",
      features: [
        "Pixel-Perfect Conversion",
        "User-Centered Design",
        "Interactive Prototypes",
        "Design System Integration",
      ],
    },
    {
      title: "Web Performance Optimization",
      description: "Optimizing websites for speed, responsiveness, and a seamless user experience.",
      icon: "⚡",
      features: ["Core Web Vitals", "Code Splitting", "Image Optimization", "Lazy Loading"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-slate-500/10 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Nathaniel Unachi
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Frontend Developer
            </motion.p>

            <motion.p
              className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              I create beautiful, functional, and user-centered digital experiences that solve real-world problems and
              drive business growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/projects" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg border-none cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="bg-transparent px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 font-semibold cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:bg-blue-500 hover:text-white hover:translate-y-[-2px]">
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ArrowDown className="h-6 w-6 text-blue-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I specialize in creating engaging and performant user interfaces that deliver exceptional user
              experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Recent Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my latest projects that showcase my skills and creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recentWork.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-300 mb-4">{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/projects" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg border-none cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what some of my clients have to say about working with me.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here's how I approach every frontend project to ensure the best results for my clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals, requirements, and target audience.",
                icon: <Users className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating wireframes, user flows, and technical specifications.",
                icon: <Calendar className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with clean, scalable, and maintainable code.",
                icon: <Coffee className="w-8 h-8" />,
              },
              {
                step: "04",
                title: "Launch",
                description: "Testing, deployment, and ongoing support to ensure success.",
                icon: <Award className="w-8 h-8" />,
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{process.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm here to help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg border-none cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/projects" className="bg-transparent px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 font-semibold cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:bg-blue-500 hover:text-white hover:translate-y-[-2px]">
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
