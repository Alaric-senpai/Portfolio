import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import { Code, Layout, Server, Database, Smartphone, Sparkles } from "lucide-react"
import Animated, { AnimatedItem } from "./Animated"
import { services } from "@/lib/hardcoded"

export default function ServicesSection() {
  const iconMap = {
    Code,
    Layout,
    Server,
    Database,
    Smartphone,
    Sparkles
  }

  return (
    <Animated repeat={false} isContainer>
      <section id="services" className="py-24 bg-background border-t-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
             <div className="px-3 py-1 bg-primary text-primary-foreground border-2 border-black rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider font-black text-xs mb-6">
                Capabilities
             </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Our Services</h2>
            <p className="max-w-2xl text-muted-foreground text-lg font-medium">
              End-to-end development solutions for the modern web.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              // @ts-expect-error
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles
              return (
                <AnimatedItem
                  key={index}
                  repeat={false}
                  delay={0.1 * index}
                >
                  <div className="h-full bg-card border-2 border-black rounded-lg p-6 flex flex-col hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded bg-accent border-2 border-black text-accent-foreground">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-foreground/80">
                          <div className="w-2 h-2 bg-primary border border-black mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                    //   variant="outline"
                      className="w-full mt-auto"
                    >
                      Learn More
                    </Button>
                  </div>
                </AnimatedItem>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg font-bold">Have a crazy idea? Let's build it.</p>
            <Button
              size="lg"
              className="font-black uppercase text-lg px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </Animated>
  )
}