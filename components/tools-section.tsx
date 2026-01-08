"use client"

import { useEffect, useRef } from "react"

export function ToolsSection() {
  const toolsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tools = entry.target.querySelectorAll(".tool-item")
            tools.forEach((tool, index) => {
              setTimeout(() => {
                tool.classList.add("tool-opacity")
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (toolsRef.current) {
      observer.observe(toolsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const tools = [
    { name: "Photoshop", category: "Design", icon: "🎨" },
    { name: "Adobe Illustrator", category: "Design", icon: "✏️" },
    { name: "HTML", category: "Frontend", icon: "<>" },
    { name: "CSS", category: "Frontend", icon: "🎯" },
    { name: "TypeScript", category: "Frontend", icon: "TS" },
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Next.js", category: "Frontend", icon: "▲" },
    { name: "Node.js", category: "Backend", icon: "⬢" },
    { name: "SQL", category: "Database", icon: "🗄️" },
    { name: "Prisma", category: "Database", icon: "🔗" },
    { name: "JavaScript", category: "Frontend", icon: "JS" },
    { name: "Figma", category: "Design", icon: "🎨" },
    { name: "Notion", category: "Tools", icon: "📝" },
    { name: "Sass", category: "Frontend", icon: "🎨" },
    { name: "Firebase", category: "Backend", icon: "🔥" },
    { name: "Docker", category: "Backend", icon: "🐳" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "Vercel", category: "Tools", icon: "▲" },
    { name: "VS Code", category: "Tools", icon: "💻" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    // { name: "Linear", category: "Tools", icon: "📋" },
    // { name: "Arc Browser", category: "Tools", icon: "🔗" },
  ]

  const categories = ["Design", "Frontend", "Backend", "Database", "Tools"]

  return (
    <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div ref={toolsRef}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">Tools & Technologies</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I work with industry-leading tools and technologies to deliver exceptional results for design, development,
          and digital solutions.
        </p>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-lg font-semibold mb-6 text-primary capitalize">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {tools
                .filter((tool) => tool.category === category)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="tool-item bg-background border border-border rounded-lg p-6 text-center hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <div className="text-4xl mb-3 group-hover:tool-animate">{tool.icon}</div>
                    <p className="font-medium text-sm">{tool.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
