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
      <section id="services" className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
             <div className="px-4 py-1.5 bg-secondary/10 border border-secondary text-secondary font-mono text-sm uppercase tracking-wide mb-4">
                ● Capabilities
             </div>
            <h2 className="text-4xl md:text-5xl font-sans text-foreground mb-6">My Services</h2>
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
                  <div className="h-full bg-card border border-border p-6 flex flex-col transition-all duration-200">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-secondary/20 border border-secondary text-secondary">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-sans text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow text-sm">{service.description}</p>
                    <ul className="space-y-3 mb-6 font-mono text-sm">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-foreground/80">
                          <div className="w-1 h-1 bg-primary mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedItem>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-lg">Have a crazy idea? Let's build it.</p>
            <Button
              size="lg"
              className="font-sans text-lg px-8 border border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary transition-all"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </Animated>
  )
}