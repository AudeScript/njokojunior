import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern, fast-loading e-commerce solution built with React and WordPress integration.",
      tags: ["React", "WordPress", "E-commerce"],
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete brand identity including logo, color palette, and marketing materials.",
      tags: ["Branding", "Logo Design", "Marketing"],
    },
    {
      title: "Web Development Course",
      category: "Online Training",
      description: "Comprehensive online course teaching modern web development practices to 200+ students.",
      tags: ["Training", "Development", "Education"],
    },
    {
      title: "Corporate Website Redesign",
      category: "Web Development",
      description: "Complete website redesign improving user experience and conversion rates by 45%.",
      tags: ["Web Design", "UX/UI", "Responsive"],
    },
    {
      title: "Digital Marketing Materials",
      category: "Graphic Design",
      description: "Eye-catching social media graphics and promotional materials for tech startup.",
      tags: ["Social Media", "Graphics", "Marketing"],
    },
    {
      title: "UI/UX Design Training",
      category: "Online Training",
      description: "Advanced UI/UX design course with hands-on projects and personalized mentoring.",
      tags: ["UI/UX", "Design", "Training"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Showcasing our finest work in graphic design, web development, and online training.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
              >
                {/* Image Placeholder */}
                <div className="bg-muted h-48 flex items-center justify-center border-b border-border">
                  <div className="text-center text-muted-foreground">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm font-medium text-primary mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-muted text-foreground px-3 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <button className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <Link
              href="#contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
