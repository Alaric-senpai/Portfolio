import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Layout, Server, Database, Smartphone, Sparkles } from "lucide-react"
import Animated, { AnimatedItem } from "./Animated"
import { services } from "@/lib/hardcoded"

export default function ServicesSection() {
  // Icon mapping for services
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
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <Sparkles className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            <p className="max-w-2xl text-slate-400">
              Comprehensive development services to bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {services.map((service, index) => {
              // @ts-expect-error
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles
              return (
                <AnimatedItem
                  key={index}
                  repeat={false}
                  delay={0.2 * index}
                >
                  <Card
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50 overflow-hidden group hover:border-violet-400/40 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-violet-500/10"
                  >
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{service.title}</h3>
                      <p className="text-slate-400 mb-4 flex-grow">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="default"
                        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-md shadow-violet-500/20 mt-auto"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedItem>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">Need something custom? Let's discuss your project requirements and create a tailored solution.</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/20"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </Animated>
  )
}