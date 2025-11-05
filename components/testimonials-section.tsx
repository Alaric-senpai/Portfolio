"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageSquareQuote } from "lucide-react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState, useCallback, useRef } from "react"
import { testimonials } from "@/lib/hardcoded"

export default function TestimonialsSection() {


  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-play configuration
  const autoPlayDelay = 5000 // 5 seconds between slides

  const startAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
    }

    if (autoPlayEnabled && api) {
      autoPlayIntervalRef.current = setInterval(() => {
        api.scrollNext()
      }, autoPlayDelay)
    }
  }, [api, autoPlayEnabled, autoPlayDelay])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
      autoPlayIntervalRef.current = null
    }
  }, [])

  const toggleAutoPlay = useCallback(() => {
    setAutoPlayEnabled((prev) => !prev)
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)

    // Start auto-play
    startAutoPlay()

    // Pause auto-play on user interaction
    const handlePointerDown = () => stopAutoPlay()
    const handlePointerUp = () => {
      // Resume auto-play after a short delay
      setTimeout(startAutoPlay, 1000)
    }

    api.on("pointerDown", handlePointerDown)
    api.on("pointerUp", handlePointerUp)

    return () => {
      api.off("select", handleSelect)
      api.off("pointerDown", handlePointerDown)
      api.off("pointerUp", handlePointerUp)
      stopAutoPlay()
    }
  }, [api, startAutoPlay, stopAutoPlay])

  // Restart auto-play when autoPlayEnabled changes
  useEffect(() => {
    if (autoPlayEnabled) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }
  }, [autoPlayEnabled, startAutoPlay, stopAutoPlay])

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
            <MessageSquareQuote className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
          <p className="max-w-2xl text-slate-400">What clients and colleagues have to say about working with me.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 text-violet-500/10 pointer-events-none z-0">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
          </div>

          {/* Testimonial carousel */}
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-violet-400/50">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                          <div className="mb-6">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <span key={i} className="text-violet-400 text-xl">
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="text-slate-300 text-lg italic mb-6">"{testimonial.content}"</p>
                          <h4 className="text-white font-medium">{testimonial.name}</h4>
                          <p className="text-violet-300 text-sm">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-midnight-800/50 border-violet-500/20 text-violet-300 hover:bg-violet-500/10 hover:text-violet-200 hover:border-violet-400" />
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-violet-400 w-6" : "bg-violet-400/30"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="relative inset-0 translate-y-0 bg-midnight-800/50 border-violet-500/20 text-violet-300 hover:bg-violet-500/10 hover:text-violet-200 hover:border-violet-400" />
              <button
                onClick={toggleAutoPlay}
                className={`ml-4 p-2 rounded-full transition-all ${autoPlayEnabled ? "bg-violet-500/20 text-violet-300" : "bg-midnight-800/50 text-slate-400"
                  }`}
                aria-label={autoPlayEnabled ? "Pause auto-play" : "Start auto-play"}
                title={autoPlayEnabled ? "Pause auto-play" : "Start auto-play"}
              >
                {autoPlayEnabled ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
