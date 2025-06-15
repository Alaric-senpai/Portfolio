import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, User } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"

const codingApproaches:string[]=[
                        "User-centered design",
                        "Clean, maintainable code",
                        "Performance optimization",
                        "Accessibility first",
                        "Readable code","Writing Reusable code"]

export default function AboutSection() {
  return (
    <Animated repeat={true}
    delay={1}
    isContainer 
    stagger
    duration={1.5}

    >
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
              <User className="w-6 h-6 text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
            <p className="max-w-2xl text-slate-400">
              Get to know more about me, my background, and what drives me as a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left side - Image and quick info */}
            <Card className="md:col-span-2 bg-gradient-to-br py-0 from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[6/5] relative bg-gradient-to-tr from-violet-500/10 to-purple-500/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center border border-violet-500/30">
                      <div className="w-44 h-44 rounded-full bg-midnight-800 flex items-center justify-center text-6xl font-bold text-violet-300">
                        CK
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <span className="text-slate-300">Nyeri, CA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Experience</h3>
                    <span className="text-slate-300">2+ Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Availability</h3>
                    <span className="text-green-400">Available</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0">
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Right side - Tabs with content */}
            <div className="md:col-span-3 space-y-6">
              <Tabs defaultValue="bio" className="w-full text-white">
                <TabsList className="grid text-white grid-cols-3 bg-midnight-800/50 border border-violet-500/20">
                  <TabsTrigger value="bio" className="text-white data-[state=active]:bg-violet-500/20 data-[state=active]:text-white">
                    Bio
                  </TabsTrigger>
{/*                  <TabsTrigger value="experience" className="text-white data-[state=active]:bg-violet-500/20 data-[state=active]:text-white">
                    Experience
                  </TabsTrigger>*/}
                  <TabsTrigger value="education" className=" text-white data-[state=active]:bg-violet-500/20 data-[state=active]:text-white">
                    Education
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="bio" className="mt-6 space-y-4 text-slate-300">
                  <p>
                    I'm a passionate Full-Stack Developer with over 2 years of experience building web applications that
                    solve real-world problems. My journey in tech began when I built my first website at 18, and I've been
                    hooked ever since.
                  </p>
                  <p>
                    I specialize in creating robust, scalable applications using modern technologies like Angular, Next.js,
                    and Nest.js. My approach combines clean code principles with thoughtful UX design to deliver
                    exceptional digital experiences.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, mentoring junior developers.
                     I believe in continuous learning and pushing the boundaries of what's
                    possible with code.
                  </p>
                  <div className="pt-4">
                    <h4 className="text-white font-medium mb-3">My approach to development:</h4>
                    <ul className="space-y-2">
                      {codingApproaches.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

{/*                <TabsContent value="experience" className="mt-6 space-y-6">
                  {[
                    {
                      role: "Senior Frontend Developer",
                      company: "TechCorp Inc.",
                      period: "2021 - Present",
                      description:
                        "Led the frontend development team in building a SaaS platform with React and TypeScript. Improved performance by 40% and implemented CI/CD pipelines.",
                    },
                    {
                      role: "Full-Stack Developer",
                      company: "WebSolutions",
                      period: "2018 - 2021",
                      description:
                        "Developed and maintained multiple client projects using Next.js, Node.js, and MongoDB. Collaborated with designers to implement responsive UI/UX.",
                    },
                    {
                      role: "Junior Developer",
                      company: "StartupX",
                      period: "2016 - 2018",
                      description:
                        "Assisted in building MVPs for early-stage startups. Worked with React, Express, and PostgreSQL to create scalable applications.",
                    },
                  ].map((job, i) => (
                    <div key={i} className="relative pl-8 pb-6 border-l border-violet-500/20 last:border-0 last:pb-0">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-violet-500/20 border border-violet-400"></div>
                      <h4 className="text-white font-medium">{job.role}</h4>
                      <div className="flex items-center text-sm text-violet-300 mb-2">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.company} | {job.period}
                      </div>
                      <p className="text-slate-400">{job.description}</p>
                    </div>
                  ))}
                </TabsContent>*/}

                <TabsContent value="education" className="mt-6 space-y-6">
                  {[

                    {
                      degree: "B.S. Computer Science",
                      school: "Dedan Kimathi University Of Technology",
                      period: "2022 - ",
                      description:
                        "Pursuing a degree in Computer Science. Focused on Web development",
                    },
                  ].map((edu, i) => (
                    <div key={i} className="relative pl-8 pb-6 border-l border-violet-500/20 last:border-0 last:pb-0">
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-violet-500/20 border border-violet-400"></div>
                      <h4 className="text-white font-medium">{edu.degree}</h4>
                      <div className="flex items-center text-sm text-violet-300 mb-2">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {edu.school} | {edu.period}
                      </div>
                      <p className="text-slate-400">{edu.description}</p>
                    </div>
                  ))}

                  <div className="pt-4">
                    <h4 className="text-white font-medium mb-3">Certifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "AWS Certified Developer",
                        "Google Cloud Professional",
                        "MongoDB Certified Developer",
                        "React Advanced Certification",
                      ].map((cert, i) => (
                        <div
                          key={i}
                          className="flex items-center bg-midnight-800/50 border border-violet-500/20 rounded-lg p-3"
                        >
                          <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                          <span className="text-slate-300 text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      </Animated>
  )
}
