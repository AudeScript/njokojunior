import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Graphic Design",
      description: "Create stunning visual identities for your brand",
      features: [
        "Logo Design & Branding",
        "Marketing Materials",
        "UI/UX Design",
        "Print & Digital Assets",
        "Brand Guidelines",
        "Packaging Design",
      ],
      image: "/tipstricks.jpg",
    },
    {
      title: "Web Development",
      description: "Build powerful, responsive web solutions",
      features: [
        "Custom Web Development",
        "WordPress Development",
        "E-commerce Solutions",
        "Responsive Design",
        "Performance Optimization",
        "SEO Integration",
      ],
      image: "/tequilaHero.png",
    },
    {
      title: "Online Training",
      description: "Upskill your team with professional courses",
      features: [
        "Design Fundamentals",
        "Web Development Basics",
        "Advanced Coding",
        "WordPress Mastery",
        "Digital Marketing",
        "Personal Mentoring",
      ],
      image: "/onlineTeaching.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-beach py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Comprehensive tech solutions designed to help startups, SMEs,
              enterprises, and individuals succeed.
            </p>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-primary mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="bg-muted rounded-lg h-80 flex items-center justify-center border border-border overflow-hidden">
                  <Image
                    height={200}
                    width={200}
                    alt={service.title}
                    src={service.image}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary text-primary-foreground rounded-lg p-12 md:p-16 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Which Service Is Right for You?
              </h2>
              <p className="text-lg opacity-90">
                Let's have a consultation to find the perfect solution for your
                needs.
              </p>
              <Link
                href="#contact"
                className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
