"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
            <Mail className="w-6 h-6 text-violet-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mb-6"></div>
          <p className="max-w-2xl text-slate-400">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-violet-500/10 text-violet-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-slate-400">ckcharles004@gmail.com</p>
                  <a
                    href="mailto:ckcharles004@gmail.com"
                    className="text-violet-400 text-sm hover:underline mt-1 inline-block"
                  >
                    Send an email
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-violet-500/10 text-violet-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-slate-400">+254 797810469</p>
                  <a href="tel:+15551234567" className="text-violet-400 text-sm hover:underline mt-1 inline-block">
                    Call me
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-full bg-violet-500/10 text-violet-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-slate-400">Nyeri, KE</p>
                  <p className="text-violet-400 text-sm mt-1">Available for remote work</p>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
              <h3 className="text-white font-medium mb-3">Availability</h3>
              <p className="text-slate-400 mb-4">
                Currently available for freelance projects, contract work, and full-time positions.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm">Available for new opportunities</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card className="bg-gradient-to-br from-midnight-800/50 to-shadow-800/50 border-violet-500/20 overflow-hidden">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mb-4">
                      <Send className="w-8 h-8 text-violet-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="bg-midnight-900/50 border-violet-500/20 focus:border-violet-400 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="bg-midnight-900/50 border-violet-500/20 focus:border-violet-400 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        required
                        className="bg-midnight-900/50 border-violet-500/20 focus:border-violet-400 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        required
                        rows={6}
                        className="bg-midnight-900/50 border-violet-500/20 focus:border-violet-400 text-white resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full "
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
