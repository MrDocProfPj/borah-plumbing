import { useState } from "react"
import { Menu, Phone } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="Borah Plumbing LLC" width={220} height={90} className="h-auto w-[220px]" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-primary transition-colors hover:text-secondary">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Call button */}
        <div className="hidden md:block">
          <Button className="bg-secondary text-white hover:bg-secondary/90">
            <Phone className="mr-2 h-4 w-4" />
            <a href="tel:6057434302">(605) 743-4302</a>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col gap-8 pt-6">
              <a href="/" className="mx-auto" onClick={() => setIsMenuOpen(false)}>
                <img src="/logo.png" alt="Borah Plumbing LLC" width={220} height={90} className="h-auto w-[220px]" />
              </a>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-primary transition-colors hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <Button className="mt-4 bg-secondary text-white hover:bg-secondary/90">
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:6057434302">(605) 743-4302</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

