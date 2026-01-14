"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/retroui/Button" // Use RetroUI Button
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
    <section id="contact" className="py-24 bg-background border-t-2 border-black relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
            <div className="px-4 py-1.5 bg-background border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-foreground font-black uppercase tracking-widest mb-4 rotate-1">
                Contact
            </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase">Get In Touch</h2>
          <p className="max-w-2xl text-muted-foreground text-lg font-medium">
            Ready to build something extraordinary? Send me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border-2 border-black p-6 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary border-2 border-black rounded-md text-secondary-foreground">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-foreground font-bold mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm mb-2">contact@devcharles.me</p>
                        <a
                            href="mailto:contact@devcharles.me"
                            className="text-primary font-bold hover:underline"
                        >
                            Send an email
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-card border-2 border-black p-6 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary border-2 border-black rounded-md text-secondary-foreground">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-foreground font-bold mb-1">Phone</h3>
                        <p className="text-muted-foreground text-sm mb-2">+254 797810469</p>
                        <a href="tel:+254797810469" className="text-primary font-bold hover:underline">
                            Call me
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-card border-2 border-black p-6 rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary border-2 border-black rounded-md text-secondary-foreground">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-foreground font-bold mb-1">Location</h3>
                        <p className="text-muted-foreground text-sm">Nyeri, KE</p>
                        <p className="text-green-600 font-bold text-xs mt-2 uppercase tracking-wide border border-green-600/20 bg-green-50 inline-block px-1 rounded">Remote Available</p>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-accent border-2 border-black rounded-md">
              <h3 className="text-black font-bold mb-3">Availability</h3>
              <p className="text-black/70 mb-4 text-sm">
                Currently available for freelance projects, contract work, and full-time positions.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse border border-black"></div>
                <span className="text-black font-bold text-sm">Open to work</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-card border-2 border-black p-8 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 border-2 border-black rounded-full flex items-center justify-center mb-4 text-green-700">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-foreground">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="bg-background border-2 border-black focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-foreground">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="bg-background border-2 border-black focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        required
                        className="bg-background border-2 border-black focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-foreground">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        required
                        rows={6}
                        className="bg-background border-2 border-black focus-visible:ring-0 focus-visible:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
