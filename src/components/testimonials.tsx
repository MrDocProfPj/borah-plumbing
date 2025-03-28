"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Sioux Falls, SD",
    text: "Borah Plumbing saved us during a major water leak emergency. They arrived within an hour and fixed the problem quickly. Their professionalism and expertise are unmatched!",
    rating: 5,
  },
  {
    name: "Mike Peterson",
    location: "Rapid City, SD",
    text: "We hired Borah for our bathroom renovation and couldn't be happier with the results. Fair pricing, quality workmanship, and they finished ahead of schedule.",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    location: "Aberdeen, SD",
    text: "After struggling with low water pressure for months, Borah Plumbing diagnosed and fixed the issue in one visit. Excellent service and very knowledgeable team.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [isAnimating])

  const goToPrevious = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [isAnimating])

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(goToNext, 8000) // Slightly longer than image carousel
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <section className="relative overflow-hidden bg-primary py-16">
      {/* Enhanced plumbing-themed decorative elements */}
      <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"></div>
      <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"></div>

      {/* Pipe connectors */}
      <div className="absolute left-4 top-4 h-10 w-10 rounded-full border-2 border-secondary/30"></div>
      <div className="absolute right-4 bottom-4 h-10 w-10 rounded-full border-2 border-secondary/30"></div>

      {/* Horizontal pipes */}
      <div className="absolute left-0 top-1/3 h-2 w-full bg-gradient-to-r from-primary/0 via-secondary/10 to-primary/0"></div>
      <div className="absolute left-0 bottom-1/3 h-2 w-full bg-gradient-to-r from-primary/0 via-secondary/10 to-primary/0"></div>

      {/* Animated plumbing icons with cascading animations - BETTER DISTRIBUTED */}

      {/* Left side icons */}
      <div className="absolute left-[5%] bottom-0 animate-[moveUpTestimonial_25s_linear_infinite]">
        <img src="/icons/plunger.png" alt="Plunger" width={10} height={10} className="h-auto w-auto opacity-30" />
      </div>

      <div
        className="absolute left-[15%] bottom-0 animate-[moveUpTestimonial_28s_linear_infinite]"
        style={{ animationDelay: "3s" }}
      >
        <img
          src="/icons/water-drops.png"
          alt="Water Drops"
          width={10}
          height={10}
          className="h-auto w-auto opacity-30"
        />
      </div>

      <div
        className="absolute left-[25%] bottom-0 animate-[moveUpTestimonial_22s_linear_infinite]"
        style={{ animationDelay: "7s" }}
      >
        <img
          src="/icons/pipe-wrench.png"
          alt="Pipe Wrench"
          width={10}
          height={10}
          className="h-auto w-auto opacity-30"
        />
      </div>

      <div
        className="absolute left-[35%] bottom-0 animate-[moveUpTestimonial_26s_linear_infinite]"
        style={{ animationDelay: "5s" }}
      >
        <img src="/icons/shower.png" alt="Shower" width={8} height={8} className="h-auto w-auto opacity-30" />
      </div>

      <div
        className="absolute left-[45%] bottom-0 animate-[moveUpTestimonial_30s_linear_infinite]"
        style={{ animationDelay: "9s" }}
      >
        <img src="/icons/toilet.png" alt="Toilet" width={10} height={10} className="h-auto w-auto opacity-30" />
      </div>

      {/* Right side icons */}
      <div
        className="absolute right-[5%] top-0 animate-[moveDownTestimonial_27s_linear_infinite]"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/icons/toilet-paper.png"
          alt="Toilet Paper"
          width={8}
          height={8}
          className="h-auto w-auto opacity-30"
        />
      </div>

      <div
        className="absolute right-[15%] top-0 animate-[moveDownTestimonial_24s_linear_infinite]"
        style={{ animationDelay: "6s" }}
      >
        <img src="/icons/drain.png" alt="Drain" width={8} height={8} className="h-auto w-auto opacity-30" />
      </div>

      <div
        className="absolute right-[25%] top-0 animate-[moveDownTestimonial_29s_linear_infinite]"
        style={{ animationDelay: "4s" }}
      >
        <img src="/icons/tools.png" alt="Tools" width={10} height={10} className="h-auto w-auto opacity-30" />
      </div>

      <div
        className="absolute right-[35%] top-0 animate-[moveDownTestimonial_23s_linear_infinite]"
        style={{ animationDelay: "8s" }}
      >
        <img
          src="/icons/water-supply.png"
          alt="Water Supply"
          width={12}
          height={12}
          className="h-auto w-auto opacity-30"
        />
      </div>

      <div
        className="absolute right-[45%] top-0 animate-[moveDownTestimonial_26s_linear_infinite]"
        style={{ animationDelay: "1s" }}
      >
        <img
          src="/icons/water-drops.png"
          alt="Water Drops"
          width={8}
          height={8}
          className="h-auto w-auto opacity-30 rotate-45"
        />
      </div>

      {/* Additional icons for better distribution */}
      <div
        className="absolute left-[55%] bottom-0 animate-[moveUpTestimonial_24s_linear_infinite]"
        style={{ animationDelay: "11s" }}
      >
        <img src="/icons/plunger.png" alt="Plunger" width={9} height={9} className="h-auto w-auto opacity-30" />
      </div>

      <div
        className="absolute right-[55%] top-0 animate-[moveDownTestimonial_28s_linear_infinite]"
        style={{ animationDelay: "10s" }}
      >
        <img
          src="/icons/pipe-wrench.png"
          alt="Pipe Wrench"
          width={9}
          height={9}
          className="h-auto w-auto opacity-30"
        />
      </div>

      <div
        className="absolute left-[75%] bottom-0 animate-[moveUpTestimonial_27s_linear_infinite]"
        style={{ animationDelay: "13s" }}
      >
        <img src="/icons/drain.png" alt="Drain" width={7} height={7} className="h-auto w-auto opacity-30" />
      </div>

      <div
        className="absolute right-[75%] top-0 animate-[moveDownTestimonial_25s_linear_infinite]"
        style={{ animationDelay: "12s" }}
      >
        <img src="/icons/shower.png" alt="Shower" width={7} height={7} className="h-auto w-auto opacity-30" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-white md:text-4xl">What Our Customers Say</h2>
        <p className="mb-12 text-center text-white/80">
          Don't just take our word for it - hear from our satisfied customers
        </p>

        <div className="relative mx-auto max-w-4xl">
          {/* Decorative elements */}
          <div className="absolute -left-4 -top-4 h-16 w-16 text-secondary opacity-20">
            <Quote size={64} />
          </div>
          <div className="absolute -bottom-4 -right-4 h-16 w-16 rotate-180 text-secondary opacity-20">
            <Quote size={64} />
          </div>

          {/* Testimonial cards */}
          <div className="relative h-[300px] overflow-hidden rounded-lg bg-white p-8 shadow-lg">
            {/* Pipe-themed decorative corners */}
            <div className="absolute left-0 top-0 h-8 w-8 border-b-4 border-r-4 border-secondary/20"></div>
            <div className="absolute right-0 top-0 h-8 w-8 border-b-4 border-l-4 border-secondary/20"></div>
            <div className="absolute bottom-0 left-0 h-8 w-8 border-t-4 border-r-4 border-secondary/20"></div>
            <div className="absolute bottom-0 right-0 h-8 w-8 border-t-4 border-l-4 border-secondary/20"></div>

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 flex flex-col justify-between p-8 transition-opacity duration-500",
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
              >
                <div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={cn("h-5 w-5", i < testimonial.rating ? "text-secondary" : "text-gray-300")}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 text-lg italic text-gray-700">{testimonial.text}</p>
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-6 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white/10"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-all",
                    index === currentIndex ? "bg-white w-4" : "bg-white/50",
                  )}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="sr-only">Go to testimonial {index + 1}</span>
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white/10"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

