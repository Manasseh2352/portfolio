"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "HTML5/CSS3", level: 98 },
        { name: "Redux/Zustand", level: 80 },
        { name: "Framer Motion", level: 75 },
        { name: "Responsive Design", level: 93 },
        { name: "Web Performance", level: 87 },
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma (Design Handoff)", level: 80 },
        { name: "Jest / React Testing Library", level: 75 },
        { name: "Webpack / Vite", level: 70 },
        { name: "NPM / Yarn", level: 90 },
        { name: "Accessibility (A11y)", level: 85 },
        { name: "Cross-Browser Compatibility", level: 88 },
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to craft exceptional user interfaces
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white shadow-sm transition-all duration-300 ease hover:translate-y-[-8px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">{category.title}</h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
