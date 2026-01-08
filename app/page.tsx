import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"
import { Brands } from "@/components/brands"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="space-y-6 animate-slide-up">
          <h1 className="text-balance font-serif font-bold text-5xl md:text-6xl text-foreground">
            I Transform Your Vision Into Reality
          </h1>
          <p className="text-pretty text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Professional design, development, and training services for startups, SMEs, enterprises, and
            individuals seeking excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link
              href="/services"
              className="px-8 py-3 gradient-primary text-white rounded font-medium hover:shadow-lg hover:shadow-primary/40 transition-all hover:scale-105 text-center"
            >
              Explore Services
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-muted text-foreground rounded font-medium hover:bg-muted/80 transition-all hover:scale-105 text-center border border-border"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Brands />

      {/* Services Preview */}
      <section className="bg-muted py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center animate-slide-up">
            Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-background rounded-lg p-8 border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 animate-slide-up hover:scale-105">
              <div className="w-12 h-12 gradient-primary rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267M7 21H5m12 0h2m0-4V5m0 16H9m3-10l2.5-2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stunning visual designs that communicate your brand message and captivate your audience with
                professional aesthetics.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-background rounded-lg p-8 border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 animate-slide-up hover:scale-105">
              <div className="w-12 h-12 gradient-primary rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Custom coding and WordPress solutions that deliver fast, responsive, and scalable web experiences for
                your business.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-background rounded-lg p-8 border border-border hover:border-secondary hover:shadow-lg transition-all duration-300 animate-slide-up hover:scale-105">
              <div className="w-12 h-12 gradient-primary rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Online Training</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive courses and mentorship to upskill your team in design, development, and digital
                transformation.
              </p>
            </div>
          </div>

          {/* <div className="text-center mt-12 animate-slide-up">
            <Link
              href="/services"
              className="inline-block px-8 py-3 gradient-primary text-white rounded font-medium hover:shadow-lg hover:shadow-primary/40 transition-all hover:scale-105"
            >
              View All Services
            </Link>
          </div> */}
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="gradient-primary text-white rounded-lg p-12 md:p-16 text-center space-y-6 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Hire me now and let&apos;s transform your business.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-primary rounded font-medium hover:bg-white/90 transition-all hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
