import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-primary pt-12 text-white">
      {/* Pipe-themed decorative elements */}
      <div className="absolute left-0 top-0 h-4 w-full bg-secondary"></div>

      {/* Pipe connectors */}
      <div className="absolute left-1/4 top-4 h-8 w-8 -translate-y-1/2 rounded-full border-4 border-primary bg-secondary"></div>
      <div className="absolute right-1/4 top-4 h-8 w-8 -translate-y-1/2 rounded-full border-4 border-primary bg-secondary"></div>

      {/* Vertical pipes */}
      <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-secondary/0 via-secondary/10 to-secondary/0"></div>
      <div className="absolute right-10 top-0 h-full w-1 bg-gradient-to-b from-secondary/0 via-secondary/10 to-secondary/0"></div>

      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* About */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="mb-4 text-lg font-bold">About Borah Plumbing</h3>
            <p className="mb-4 text-sm text-white/80">
              Professional plumbing services for residential and commercial properties. Licensed, insured, and committed
              to quality workmanship since 2024.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Our Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-secondary">
                  Emergency Repairs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Drain Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Water Heater Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Bathroom Remodeling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Kitchen Plumbing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Sewer Line Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Connect With Us</h3>
            <div className="mb-4 flex space-x-4">
              <a href="#" className="text-white hover:text-secondary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>

            <div>
              <h4 className="mb-2 font-medium">Contact Us</h4>
              <p className="mb-1 text-sm text-white/80">
                <a href="tel:6057434302" className="hover:text-secondary">
                  (605) 743-4302
                </a>
              </p>
              <p className="mb-1 text-sm text-white/80">
                <a href="mailto:info@borahplumbing.com" className="hover:text-secondary">
                  info@borahplumbing.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/20 py-6 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Borah Plumbing LLC. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative pipe element */}
      <div className="h-3 bg-secondary"></div>
    </footer>
  )
}

