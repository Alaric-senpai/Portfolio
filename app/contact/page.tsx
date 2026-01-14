'use client'
import { useState } from "react"
import { Button } from "@/components/retroui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare, ArrowRight } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { motion } from "framer-motion"
import { sendEmail } from "@/lib/mailer"
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsappSquare } from "react-icons/fa"
import { personalLinks } from "@/lib/hardcoded"
import Link from "next/link"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
                throw new Error('Please fill in all required fields')
            }

            const emailSent = await sendEmail(
                formData.email,
                formData.name,
                formData.subject,
                formData.message
            )

            if (emailSent) {
                setSubmitStatus('success')
                setFormData({ name: "", email: "", subject: "", message: "" })
            } else {
                throw new Error('Failed to send email')
            }

        } catch (error) {
            console.error('Contact form error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            value: "contact@devcharles.me",
            link: "mailto:contact@devcharles.me",
            bg: "bg-primary"
        },
        {
            icon: <FaWhatsappSquare className="w-6 h-6" />,
            title: "WhatsApp",
            value: "+254 797810469",
            link: "https://wa.me/+254797810469",
            bg: "bg-green-500"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            value: "Nyeri, Kenya",
            link: null,
            bg: "bg-secondary"
        }
    ]

    const socialLinks = [
        { icon: <FaGithub className="w-6 h-6" />, href: personalLinks.github, label: "GitHub", color: "hover:bg-black hover:text-white" },
        { icon: <FaLinkedin className="w-6 h-6" />, href: personalLinks.linkedin, label: "LinkedIn", color: "hover:bg-[#0077b5] hover:text-white" },
        { icon: <FaTwitter className="w-6 h-6" />, href: personalLinks.twitter, label: "Twitter", color: "hover:bg-[#1da1f2] hover:text-white" }
    ]

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background overflow-hidden border-t-2 border-black">
            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Animated>
                        <div className="inline-block px-4 py-1 bg-white border-2 border-black font-black uppercase tracking-widest text-sm mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                             Contact
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-foreground mb-6 uppercase tracking-tighter leading-[0.8]">
                            Initiate <span className="text-white bg-black px-2">Protocol</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-muted-foreground max-w-3xl mx-auto">
                            Secure channel open. Awaiting mission parameters.
                        </p>
                    </Animated>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Form */}
                    <AnimatedItem delay={0.2}>
                         <div className="bg-white border-2 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_black] relative h-full">
                            <div className="absolute -top-3 -left-3 bg-secondary border-2 border-black p-2 z-10">
                                <MessageSquare className="w-8 h-8 text-black" />
                            </div>
                            
                            <h3 className="text-3xl font-black uppercase mb-2">Send a Message</h3>
                            <p className="text-muted-foreground font-bold text-sm mb-8 uppercase tracking-wide">I usually respond within 24 hours</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm font-black uppercase">Name *</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="h-12 bg-muted/30 border-2 border-black rounded-none shadow-none focus:shadow-[4px_4px_0px_0px_black] transition-all font-bold placeholder:uppercase placeholder:text-gray-400"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-black uppercase">Email *</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="h-12 bg-muted/30 border-2 border-black rounded-none shadow-none focus:shadow-[4px_4px_0px_0px_black] transition-all font-bold placeholder:uppercase placeholder:text-gray-400"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-sm font-black uppercase">Subject *</Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="h-12 bg-muted/30 border-2 border-black rounded-none shadow-none focus:shadow-[4px_4px_0px_0px_black] transition-all font-bold placeholder:uppercase placeholder:text-gray-400"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-black uppercase">Message *</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={8}
                                        className="bg-muted/30 border-2 border-black rounded-none shadow-none focus:shadow-[4px_4px_0px_0px_black] transition-all resize-none font-bold placeholder:uppercase placeholder:text-gray-400 p-4"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 bg-black text-white hover:bg-neutral-800 border-2 border-black shadow-[6px_6px_0px_0px_#ffde00] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-black uppercase text-lg"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                                            Encrypting...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-3" />
                                            Execute Transmission
                                        </>
                                    )}
                                </Button>

                                {submitStatus === 'success' && (
                                    <div className="flex items-center p-4 bg-green-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_black]">
                                        <CheckCircle className="w-6 h-6 mr-3" />
                                        <span className="font-bold uppercase">Message sent successfully!</span>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="flex items-center p-4 bg-red-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_black]">
                                        <AlertCircle className="w-6 h-6 mr-3" />
                                        <span className="font-bold uppercase">Failed to send. Try again later.</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </AnimatedItem>

                    {/* Contact Information & Socials */}
                    <div className="space-y-12">
                         {/* Contact Details */}
                        <div className="space-y-6">
                             <div className="inline-block bg-white border-2 border-black px-4 py-1 font-black uppercase text-sm shadow-[4px_4px_0px_0px_black]">
                                 Direct Channels
                             </div>
                             
                            {contactInfo.map((info, index) => (
                                <AnimatedItem key={index} delay={0.3 + index * 0.1}>
                                    <div className="group bg-white border-2 border-black p-4 flex items-center hover:shadow-[6px_6px_0px_0px_black] hover:-translate-y-1 transition-all">
                                        <div className={`p-4 border-2 border-black ${info.bg} text-white mr-5 shadow-[2px_2px_0px_0px_black]`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-black uppercase text-lg">{info.title}</h3>
                                            {info.link ? (
                                                <a href={info.link} target="_blank" className="text-muted-foreground font-bold hover:text-black hover:underline decoration-2 underline-offset-2">
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-muted-foreground font-bold">{info.value}</p>
                                            )}
                                        </div>
                                        {info.link && (
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                </AnimatedItem>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <div className="inline-block bg-white border-2 border-black px-4 py-1 font-black uppercase text-sm shadow-[4px_4px_0px_0px_black]">
                                 Social Profiles
                             </div>
                            
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <AnimatedItem key={index} delay={0.6 + index * 0.1}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        aria-label={social.label}
                                        className={`flex items-center justify-center w-16 h-16 bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 group ${social.color}`}
                                    >
                                        <span className="group-hover:scale-110 transition-transform duration-200">{social.icon}</span>
                                    </a>
                                    </AnimatedItem>
                                ))}
                            </div>
                        </div>

                         {/* Availability */}
                        <div className="bg-black text-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#8b5cf6]">
                             <h3 className="text-2xl font-black uppercase mb-4 flex items-center gap-3">
                                 <Clock className="w-6 h-6" /> Availability
                             </h3>
                             <p className="font-medium text-lg mb-4">
                                Bandwidth available for <span className="text-accent font-bold">Q1 2026</span> operations.
                             </p>
                             <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="font-bold text-green-400 uppercase tracking-wider">Online Now</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}