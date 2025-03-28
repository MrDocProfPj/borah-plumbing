import { Phone } from "lucide-react"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-24">
      {/* Enhanced decorative pipe elements */}
      <div className="absolute -left-10 top-0 h-20 w-20 rotate-45 rounded-full border-4 border-secondary/20"></div>
      <div className="absolute -right-10 bottom-0 h-16 w-16 rotate-12 rounded-full border-4 border-secondary/20"></div>
      <div className="absolute left-1/4 top-1/2 h-8 w-8 rounded-full bg-secondary/10"></div>
      <div className="absolute right-1/3 top-1/3 h-12 w-12 rounded-full bg-secondary/10"></div>

      {/* New pipe elements */}
      <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"></div>
      <div className="absolute right-0 top-0 h-full w-4 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0"></div>

      {/* Pipe joints */}
      <div className="absolute left-4 top-1/4 h-8 w-8 rounded-full border-2 border-secondary/30"></div>
      <div className="absolute right-4 top-3/4 h-8 w-8 rounded-full border-2 border-secondary/30"></div>

      {/* Animated plumbing icons with cascading animations - Using new smaller icons */}

      {/* Plunger - moving up */}
      <div className="absolute left-1/4 bottom-0 animate-[moveUpHero_15s_linear_infinite]">
        <img src="/icons/plunger.png" alt="Plunger" width={12} height={12} className="h-auto w-auto opacity-40" />
      </div>

      {/* Toilet paper - moving down */}
      <div
        className="absolute right-1/4 top-0 animate-[moveDownHero_18s_linear_infinite]"
        style={{ animationDelay: "2s" }}
      >
        <img
          src="/icons/toilet-paper.png"
          alt="Toilet Paper"
          width={10}
          height={10}
          className="h-auto w-auto opacity-40"
        />
      </div>

      {/* Toilet - moving up */}
      <div
        className="absolute left-1/6 bottom-0 animate-[moveUpHero_22s_linear_infinite]"
        style={{ animationDelay: "7s" }}
      >
        <img src="/icons/toilet.png" alt="Toilet" width={12} height={12} className="h-auto w-auto opacity-40" />
      </div>

      {/* Water drops - moving down */}
      <div
        className="absolute right-1/6 top-0 animate-[moveDownHero_14s_linear_infinite]"
        style={{ animationDelay: "4s" }}
      >
        <img
          src="/icons/water-drops.png"
          alt="Water Drops"
          width={12}
          height={12}
          className="h-auto w-auto opacity-40"
        />
      </div>

      {/* Drain - moving up */}
      <div
        className="absolute left-1/3 bottom-0 animate-[moveUpHero_19s_linear_infinite]"
        style={{ animationDelay: "6s" }}
      >
        <img src="/icons/drain.png" alt="Drain" width={10} height={10} className="h-auto w-auto opacity-40" />
      </div>

      {/* Pipe wrench - moving down */}
      <div
        className="absolute right-1/3 top-0 animate-[moveDownHero_16s_linear_infinite]"
        style={{ animationDelay: "3s" }}
      >
        <img
          src="/icons/pipe-wrench.png"
          alt="Pipe Wrench"
          width={12}
          height={12}
          className="h-auto w-auto opacity-40"
        />
      </div>

      {/* Water supply - moving up */}
      <div
        className="absolute left-2/3 bottom-0 animate-[moveUpHero_20s_linear_infinite]"
        style={{ animationDelay: "5s" }}
      >
        <img
          src="/icons/water-supply.png"
          alt="Water Supply"
          width={14}
          height={14}
          className="h-auto w-auto opacity-40"
        />
      </div>

      {/* Tools - moving down */}
      <div
        className="absolute right-2/3 top-0 animate-[moveDownHero_17s_linear_infinite]"
        style={{ animationDelay: "1s" }}
      >
        <img src="/icons/tools.png" alt="Tools" width={12} height={12} className="h-auto w-auto opacity-40" />
      </div>

      {/* Shower - moving up */}
      <div
        className="absolute left-1/2 bottom-0 animate-[moveUpHero_21s_linear_infinite]"
        style={{ animationDelay: "8s" }}
      >
        <img src="/icons/shower.png" alt="Shower" width={10} height={10} className="h-auto w-auto opacity-40" />
      </div>

      {/* Additional water drops - moving down */}
      <div
        className="absolute right-1/2 top-0 animate-[moveDownHero_13s_linear_infinite]"
        style={{ animationDelay: "9s" }}
      >
        <img
          src="/icons/water-drops.png"
          alt="Water Drops"
          width={8}
          height={8}
          className="h-auto w-auto opacity-40 rotate-45"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold text-white md:text-5xl">Professional Plumbing Services You Can Trust</h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          From emergency repairs to complete installations, we provide top-quality plumbing services for residential and
          commercial properties.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
            <Phone className="mr-2 h-5 w-5" />
            <a href="tel:6057434302" className="text-lg font-bold">
              Call (605) 743-4302</a>
          </Button>

          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  )
}

