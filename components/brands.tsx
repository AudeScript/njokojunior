"use client"

const brands = [
  { name: "Tech Startup A", logo: "🚀" },
  { name: "Enterprise Corp", logo: "🏢" },
  { name: "Creative Studio", logo: "🎨" },
  { name: "Digital Agency", logo: "💼" },
  { name: "E-commerce Store", logo: "🛍️" },
  { name: "SaaS Company", logo: "☁️" },
]

export function Brands() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wide animate-fade-in">
          Trusted by industry leaders
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-lg border border-border hover:border-secondary hover:bg-muted/50 transition-all duration-300 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{brand.logo}</span>
                <span className="text-xs font-medium text-foreground text-center line-clamp-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
