'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, AlertCircle, Clock } from "lucide-react"
import Animated, { AnimatedItem } from "@/components/Animated"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
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
            // Validate form data
            if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
                throw new Error('Please fill in all required fields')
            }

            // Send email using the mailer function
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
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            value: "contact@devcharles.me",
            link: "mailto:contact@devcharles.me"
        },
        {
            icon: <FaWhatsappSquare className="w-5 h-5" />,
            title: "WhatsApp",
            value: "+254 797810469",
            link: "https://wa.me/+254797810469"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Location",
            value: "Nyeri, Kenya",
            link: null
        }
    ]

    const socialLinks = [
        { icon: <FaGithub className="w-5 h-5" />, href: personalLinks.github, label: "GitHub" },
        { icon: <FaLinkedin className="w-5 h-5" />, href: personalLinks.linkedin, label: "LinkedIn" },
        { icon: <FaTwitter className="w-5 h-5" />, href: personalLinks.twitter, label: "Twitter" }
    ]

    return (
        <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Animated>
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-500/10 mb-8 backdrop-blur-sm border border-violet-500/20">
                            <Mail className="w-10 h-10 text-violet-400" />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Touch</span>
                        </h1>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto mb-8"></div>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </p>
                    </Animated>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <AnimatedItem delay={0.2}>
                        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden shadow-xl">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl text-white flex items-center">
                                    <Send className="w-6 h-6 mr-3 text-violet-400" />
                                    Send a Message
                                </CardTitle>
                                <p className="text-slate-400">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </p>
                            </CardHeader>
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-slate-300">Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="bg-slate-800/50 border-violet-500/20 text-white placeholder-slate-500 focus:border-violet-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-slate-300">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="bg-slate-800/50 border-violet-500/20 text-white placeholder-slate-500 focus:border-violet-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-slate-300">Subject *</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="bg-slate-800/50 border-violet-500/20 text-white placeholder-slate-500 focus:border-violet-400"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-slate-300">Message *</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={10}
                                            className="bg-slate-800/50 border-violet-500/20 text-white placeholder-slate-500 focus:border-violet-400 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/20"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>

                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                                            <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
                                        </motion.div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                                        >
                                            <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                                            <span className="text-red-400">
                                                Failed to send message. Please check your connection and try again, or contact me directly at contact@devcharles.me
                                            </span>
                                        </motion.div>
                                    )}
                                </form>
                            </CardContent>
                        </Card>
                    </AnimatedItem>

                    {/* Contact Information */}
                    <AnimatedItem delay={0.4} className="space-y-8">
                        {/* Contact Details */}
                        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden shadow-xl">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                                <p className="text-slate-400">
                                    Feel free to reach out through any of these channels.
                                </p>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 10 }}
                                            className="flex items-start"
                                        >
                                            <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 mr-4">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-white font-medium mb-1">{info.title}</h3>
                                                {info.link ? (
                                                    <Link                                                 href={info.link}
                                                        target="_blank"
                                                        className="text-violet-300 hover:text-violet-200 transition-colors"
                                                    >
                                                        {info.value}
                                                    </Link>
                                                ) : (
                                                    <p className="text-slate-300">{info.value}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Response Time */}
                        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden shadow-xl">
                            <CardContent className="p-6">
                                <div className="flex items-start">
                                    <div className="p-3 rounded-lg bg-violet-500/10 text-violet-400 mr-4">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Response Time</h3>
                                        <p className="text-slate-300">
                                            I typically respond to messages within 24-48 hours. For urgent inquiries,
                                            please indicate so in your message.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Links */}
                        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden shadow-xl">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl text-white">Connect With Me</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            whileHover={{ y: -5 }}
                                            className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800/50 border border-violet-500/20 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400 transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Availability */}
                        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-violet-500/20 overflow-hidden shadow-xl">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                                        <span className="text-white font-medium">Available for Work</span>
                                    </div>
                                    <span className="text-slate-400 text-sm">Full-time & Freelance</span>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedItem>
                </div>
            </div>
        </div>
    )
}