"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

const images = [
  {
    src: "/carousel/kitchen.jpg",
    alt: "Kitchen sink installation",
    caption: "Kitchen Sink Installation",
  },
  {
    src: "/carousel/bathroom.jpg",
    alt: "Bathroom renovation",
    caption: "Complete Bathroom Renovation",
  },
  {
    src: "/carousel/pipes.jpg",
    alt: "Water heater repair",
    caption: "Water Heater Repair & Installation",
  },
  {
    src: "/carousel/burstpipe.jpg",
    alt: "Pipe repair",
    caption: "Emergency Pipe Repair",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [isAnimating])

  const goToPrevious = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [isAnimating])

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext])

  return (
    <section className="relative bg-accent py-16">
      {/* Plumbing-themed decorative elements */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary/10"></div>
      <div className="absolute right-0 top-0 h-full w-1 bg-primary/10"></div>

      {/* Pipe connectors */}
      <div className="absolute left-4 top-4 h-12 w-12">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 6V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6Z"
            stroke="#165786"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
          <path d="M8 12H16" stroke="#165786" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 8V16" stroke="#165786" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-4 right-4 h-12 w-12">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#165786" strokeOpacity="0.2" strokeWidth="2" />
          <path d="M12 8V16" stroke="#165786" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 12H16" stroke="#165786" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">Our Quality Work</h2>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg shadow-lg">
          {/* Carousel container */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
                )}
              >
                <img 
                  src={image.src || "/placeholder.svg"} 
                  alt={image.alt} 
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/800x600?text=Image+Not+Found";
                  }}
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="text-lg font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/30 text-white backdrop-blur-sm hover:bg-white/50"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/30 text-white backdrop-blur-sm hover:bg-white/50"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "bg-white w-4" : "bg-white/50",
                )}
                onClick={() => setCurrentIndex(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
