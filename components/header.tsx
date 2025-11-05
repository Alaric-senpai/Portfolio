"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Moon, Sun, Code, User, Briefcase, Mail, Star, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@radix-ui/react-dialog"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <Code className="w-4 h-4" />
    },
    {
      name: "About",
      href: "/about",
      icon: <User className="w-4 h-4" />
    },
    {
      name: "Skills",
      href: "/skills",
      icon: <Star className="w-4 h-4" />
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      name: "Contact",
      href: "/contact",
      icon: <Mail className="w-4 h-4" />
    },
  ]

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + custom * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "py-3 bg-slate-900/90 backdrop-blur-xl shadow-lg"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo with animated icon */}
            <motion.div variants={logoVariants} className="flex items-center">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-violet-500/30">
                    <Code className="w-5 h-5 text-violet-400" />
                  </div>
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="text-xl font-bold text-white">Charles</span>
                  <span className="text-xs text-violet-400 font-medium">Full-Stack Dev</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={navItemVariants}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300",
                      pathname === item.href
                        ? "text-white bg-violet-500/10"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                    )}
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activePage"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">


              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/20 rounded-full px-6"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    Let's Talk
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <DialogTitle className="sr-only">
                    mobile nav
                  </DialogTitle>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-300 hover:text-white hover:bg-violet-500/10 rounded-full"
                    >
                      <Menu className="w-6 h-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[300px] sm:w-[350px] bg-slate-900 border-violet-500/20 backdrop-blur-xl"
                  >
                    <div className="flex flex-col h-full">
                      {/* Mobile Menu Header */}
                      <div className="flex items-center justify-between py-6 border-b border-slate-800">
                        <Link
                          href="/"
                          className="flex items-center space-x-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full blur-md opacity-75"></div>
                            <div className="relative w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-violet-500/30">
                              <Code className="w-4 h-4 text-violet-400" />
                            </div>
                          </div>
                          <div className="flex flex-col -space-y-1">
                            <span className="text-lg font-bold text-white">Charles</span>
                            <span className="text-xs text-violet-400 font-medium">Full-Stack Dev</span>
                          </div>
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-slate-300 hover:text-white rounded-full"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <X className="w-5 h-5" />
                        </Button>
                      </div>

                      {/* Mobile Navigation */}
                      <nav className="flex-1 py-6">
                        <div className="space-y-2">
                          {navItems.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.1 * index, duration: 0.3 },
                              }}
                            >
                              <Link
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                  "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300",
                                  pathname === item.href
                                    ? "bg-violet-500/20 text-white border border-violet-500/30"
                                    : "text-slate-300 hover:bg-slate-800/50"
                                )}
                              >
                                <div className={cn(
                                  "p-2 rounded-lg",
                                  pathname === item.href
                                    ? "bg-violet-500/20"
                                    : "bg-slate-800/50"
                                )}>
                                  {item.icon}
                                </div>
                                <span className="font-medium">{item.name}</span>
                                {pathname === item.href && (
                                  <motion.div
                                    layoutId="activeMobilePage"
                                    className="ml-auto w-2 h-2 bg-violet-400 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                )}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </nav>

                      {/* Mobile Menu Footer */}
                      <div className="py-6 border-t border-slate-800 space-y-4">

                        <Button
                          className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-violet-500/20"
                          asChild
                        >
                          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                            Let's Talk
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}