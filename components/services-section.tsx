import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Layout, Server, Database, Smartphone, Sparkles } from "lucide-react"
import Animated, { AnimatedItem } from "./Animated"

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
      features: [ "AngularJs","Next.js", "TypeScript", "Responsive Design", "SEO Optimization"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Robust server-side solutions that power your applications with secure, scalable, and efficient code.",
      features: ["Node/Express", "NestJs","API Development", "Authentication", "Database Integration"],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with functionality to create intuitive and engaging interfaces.",
      features: [ "Prototyping", "User Testing", "Design Systems"],
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture that ensures data integrity, security, and optimal performance.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "NoSQL/SQL"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that provide native-like experiences with a single codebase.",
      features: ["React Native", "Push Notifications", "Offline Support"],
    },
    {
      icon: Sparkles,
      title: "Performance Optimization",
      description: "Enhance your existing applications with improved speed, efficiency, and user experience.",
      features: ["Code Auditing", "Load Time Reduction", "Caching Strategies", "Bundle Optimization"],
    },
  ]

  return (
    <Animated repeat duration={1.5} isContainer staggerChildren>
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <Sparkles className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            <p className="max-w-2xl text-slate-400">
              Comprehensive development services to bring your ideas to life with cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <AnimatedItem
                  key={index}
                  delay={0.2 * index}
                  repeat 
                >
                <Card
                  className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden group hover:border-violet-400/40 transition-all duration-300 h-full"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="default"
                      className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
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
            <p className="text-slate-400 mb-6">Need something custom? Let's discuss your project requirements.</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
            >
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </Animated>
  )
}
