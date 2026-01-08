import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ToolsSection } from "@/components/tools-section";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance">
              About njokojunior
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Passionate professional dedicated to delivering exceptional tech
              services that drive real business results.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To empower businesses and individuals with professional tech
                solutions that combine creativity, technical excellence, and
                strategic thinking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From startups to enterprises, clients achieve their goals
                through innovative design, robust development, and continuous
                learning.
              </p>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center border border-border overflow-hidden">
              {/* <div className="text-center text-muted-foreground overflow-hidden"> */}
              <Image
                alt="njokojunior"
                height={200}
                width={200}
                className="md:w-96 md:h-96 md:mt-30 object-cover rounded-full"
                src={"/aude-profile.jpg"}
              ></Image>
              {/* </div> */}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
              Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  desc: "Deliver high-quality work that exceeds expectations.",
                },
                {
                  title: "Trust",
                  desc: "Transparency and reliability are at the core of our relationships.",
                },
                {
                  title: "Innovation",
                  desc: "Embrace new technologies and creative approaches.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-background rounded-lg p-8 border border-border"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section
        <section className="py-20 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* Tools Section */}
        <ToolsSection />
      </main>

      <Footer />
    </div>
  );
}
