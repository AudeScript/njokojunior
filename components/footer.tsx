import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="gradient-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12 animate-slide-up">
          {/* Brand */}
          <div>
            <div className="font-serif font-semibold text-lg mb-4">njokojunior</div>
            <p className="text-sm opacity-90">Professional tech services for your business transformation.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/services" className="hover:opacity-100 hover:text-white transition-all group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">Graphic Design</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 hover:text-white transition-all group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">Web Development</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 hover:text-white transition-all group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">Online Training</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link href="/about" className="hover:opacity-100 hover:text-white transition-all group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:opacity-100 hover:text-white transition-all group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 hover:text-white transition-all group">
                  <span className="group-hover:translate-x-1 inline-block transition-transform">Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-sm mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href="mailto:njokojunior1@gmail.com"
                  className="hover:opacity-100 hover:text-white transition-opacity"
                >
                  njokojunior1@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+237658538657" className="hover:opacity-100 hover:text-white transition-opacity">
                  +237 658-538-657
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center items-center text-sm opacity-90">
          <p>&copy; {currentYear} njokojunior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
