"use client";

const testimonials = [
  {
    quote:
      "njokojunior transformed our brand's visual identity. Their design work exceeded all our expectations and helped us stand out in the market.",
    author: "Serge Celestin",
    role: "Marketing Director",
    rating: 5,
  },
  {
    quote:
      "The web development team built us a blazing-fast WordPress site that increased our conversions by 40%. Highly professional and responsive.",
    author: "Larissa Tchinda",
    role: "Journalist",
    rating: 5,
  },
  {
    quote:
      "Their online training program upskilled our entire team in just 4 weeks. The mentorship and hands-on approach made all the difference.",
    author: "Wase Rogers",
    role: "IT CEO",
    rating: 5,
  },
  {
    quote:
      "Working with njokojunior was a game-changer for our startup. He understood our vision and delivered exceptional results on time and within budget.",
    author: "Clinton",
    role: "Software Developer",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by businesses of all sizes. Here's what some clients have to
            share about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-secondary shadow-sm hover:shadow-lg transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-foreground mb-6 leading-relaxed group-hover:text-primary/90 transition-colors">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
