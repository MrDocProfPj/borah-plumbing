import { useState } from "react"
import { Wrench, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      // Reset form after successful submission
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <section className="relative bg-accent py-16" id="contact">
      {/* Enhanced decorative pipe elements */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"></div>
      <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0"></div>

      {/* Pipe joints and connectors */}
      <div className="absolute left-6 top-6 h-10 w-10 rounded-full border-2 border-primary/20 bg-white/50"></div>
      <div className="absolute right-6 bottom-6 h-10 w-10 rounded-full border-2 border-primary/20 bg-white/50"></div>


      {/* Water droplets */}
      <div className="absolute left-1/5 top-10 animate-bounce" style={{ animationDelay: "0.5s" }}>
        <svg width="15" height="22" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 0C10 0 0 15 0 20C0 25.5 4.5 30 10 30C15.5 30 20 25.5 20 20C20 15 10 0 10 0Z"
            fill="#165786"
            fillOpacity="0.2"
          />
        </svg>
      </div>
      <div className="absolute right-1/5 bottom-10 animate-bounce" style={{ animationDelay: "1.2s" }}>
        <svg width="12" height="18" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 0C10 0 0 15 0 20C0 25.5 4.5 30 10 30C15.5 30 20 25.5 20 20C20 15 10 0 10 0Z"
            fill="#165786"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold text-primary md:text-4xl">Contact Us</h2>
            <p className="text-gray-600">
              Need plumbing services? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact information */}
            <div className="relative rounded-lg bg-primary p-8 text-white shadow-lg">
              {/* Pipe connector decorations */}
              <div className="absolute -left-2 -top-2 h-8 w-8 rounded-full border-2 border-secondary/30 bg-primary"></div>
              <div className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full border-2 border-secondary/30 bg-primary"></div>

              <h3 className="mb-6 flex items-center text-2xl font-bold">
                <Wrench className="mr-2 h-6 w-6" />
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:6057434302" className="hover:text-secondary">
                      (605) 743-4302
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:info@borahplumbing.com" className="hover:text-secondary">
                      info@borahplumbing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>Serving Sioux Falls and surrounding areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-2 font-medium">Business Hours</h4>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  <strong>Emergency services available 24/7</strong>
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="relative rounded-lg bg-white p-8 shadow-lg">
              {/* Pipe connector decorations */}
              <div className="absolute -left-2 -top-2 h-8 w-8 rounded-full border-2 border-primary/30 bg-white"></div>
              <div className="absolute -right-2 -bottom-2 h-8 w-8 rounded-full border-2 border-primary/30 bg-white"></div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="mb-4">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div className="mb-6">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your plumbing needs"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary text-white hover:bg-secondary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="mt-4 rounded-md bg-green-50 p-3 text-green-800">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 rounded-md bg-red-50 p-3 text-red-800">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

