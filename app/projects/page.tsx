"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Storefront",
      description:
        "A modern, responsive e-commerce user interface built with Next.js and Tailwind CSS. Features dynamic product listings, shopping cart functionality, and a seamless checkout flow.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Context"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Task Management Dashboard",
      description:
        "An intuitive and interactive task management dashboard developed with React. Includes drag-and-drop task reordering, real-time updates, and customizable views for enhanced productivity.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Redux", "Framer Motion", "CSS Modules"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Interactive Data Visualization",
      description:
        "A web application for visualizing complex datasets through interactive charts and graphs. Built using React and D3.js, providing a dynamic and insightful user experience.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "D3.js", "SVG", "Data Fetching"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application providing real-time forecasts and detailed weather information based on user location. Features dynamic backgrounds and smooth transitions.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "OpenWeather API", "Styled Components", "Geolocation API"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This very portfolio website, showcasing my frontend development skills, projects, and experience. Built with Next.js, Tailwind CSS, and Framer Motion for interactive animations.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Responsive Design"],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "Markdown Blog Reader",
      description:
        "A sleek blog platform designed for optimal readability, featuring markdown rendering, syntax highlighting, and a responsive layout for various devices.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "MDX", "CSS-in-JS", "Static Site Generation"],
      github: "#",
      live: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of frontend projects that showcase my skills and passion for crafting innovative user
            interfaces
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group overflow-hidden rounded-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        className="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={project.live} className="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link href={project.github} className="bg-transparent px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 font-semibold cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:bg-blue-500 hover:text-white hover:translate-y-[-2px]">
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                    <Link href={project.live} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg border-none cursor-pointer transition-all duration-300 ease inline-flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(59,130,246,0.3)]">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.live} className="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
