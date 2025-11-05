"use client"

import { cn } from "@/lib/utils"
import { motion, useInView, type Variants } from "framer-motion"
import type React from "react"
import { useRef } from "react"

type AnimationDirection = "up" | "down" | "left" | "right" | "none"
type AnimationType = "fade" | "slide" | "scale" | "rotate" | "custom"

type AnimatedProps = {
  children: React.ReactNode
  className?: string

  // Animation controls
  type?: AnimationType
  direction?: AnimationDirection
  duration?: number
  delay?: number
  staggerChildren?: number
  repeat?: boolean

  // Custom animation properties
  initial?: Record<string, any>
  animate?: Record<string, any>
  exit?: Record<string, any>

  // For container animations
  isContainer?: boolean
  stagger?: boolean

  id?:string

  // Custom variants
  variants?: Variants
}

const Animated = ({
  children,
  className,
  type = "fade",
  direction = "up",
  duration = 1.5,
  delay = 0,
  staggerChildren = 0.1,
  repeat = false,
  initial,
  animate,
  exit,
  isContainer = false,
  stagger = false,
  variants,
}: AnimatedProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: !repeat, amount: 0.2 })

  // Default animation variants based on type and direction
  const getDefaultVariants = (): Variants => {
    // Base initial and animate states
    let initialState = {}
    let animateState = {}

    // Configure based on animation type
    switch (type) {
      case "fade":
        initialState = { opacity: 0 }
        animateState = { opacity: 1 }
        break

      case "slide":
        initialState = { opacity: 0 }
        animateState = { opacity: 1 }

        // Add direction-specific properties
        switch (direction) {
          case "up":
            initialState = { ...initialState, y: 50 }
            animateState = { ...animateState, y: 0 }
            break
          case "down":
            initialState = { ...initialState, y: -50 }
            animateState = { ...animateState, y: 0 }
            break
          case "left":
            initialState = { ...initialState, x: 50 }
            animateState = { ...animateState, x: 0 }
            break
          case "right":
            initialState = { ...initialState, x: -50 }
            animateState = { ...animateState, x: 0 }
            break
        }
        break

      case "scale":
        initialState = { opacity: 0, scale: 0.8 }
        animateState = { opacity: 1, scale: 1 }
        break

      case "rotate":
        initialState = { opacity: 0, rotate: direction === "left" ? -10 : 10 }
        animateState = { opacity: 1, rotate: 0 }
        break
    }

    // Container-specific variants for staggered children
    if (isContainer && stagger) {
      return {
        hidden: {
          ...initialState,
        },
        visible: {
          ...animateState,
          transition: {
            staggerChildren,
            delayChildren: delay,
            duration,
          },
        },
        exit: exit || { opacity: 0 },
      }
    }

    // Regular variants
    return {
      hidden: initialState,
      visible: {
        ...animateState,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Smooth easing
        },
      },
      exit: exit || { opacity: 0 },
    }
  }

  // Use custom variants if provided, otherwise use defaults
  const animationVariants = variants || getDefaultVariants()

  return (
    <motion.div
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      className={cn("", className)}
      // Allow custom initial/animate to override defaults
      {...(initial && { initial })}
      {...(animate && { animate })}
    >
      {children}
    </motion.div>
  )
}

// Child component for staggered animations
export const AnimatedItem = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  type = "fade",
  direction = "up",
  variants,
}: Omit<AnimatedProps, "isContainer" | "stagger" | "staggerChildren">) => {
  // Default item variants
  const getItemVariants = (): Variants => {
    let initialState = {}
    let animateState = {}

    switch (type) {
      case "fade":
        initialState = { opacity: 0 }
        animateState = { opacity: 1 }
        break

      case "slide":
        initialState = { opacity: 0 }
        animateState = { opacity: 1 }

        switch (direction) {
          case "up":
            initialState = { ...initialState, y: 20 }
            animateState = { ...animateState, y: 0 }
            break
          case "down":
            initialState = { ...initialState, y: -20 }
            animateState = { ...animateState, y: 0 }
            break
          case "left":
            initialState = { ...initialState, x: 20 }
            animateState = { ...animateState, x: 0 }
            break
          case "right":
            initialState = { ...initialState, x: -20 }
            animateState = { ...animateState, x: 0 }
            break
        }
        break

      case "scale":
        initialState = { opacity: 0, scale: 0.9 }
        animateState = { opacity: 1, scale: 1 }
        break
    }

    return {
      hidden: initialState,
      visible: {
        ...animateState,
        transition: {
          duration,
          delay,
        },
      },
    }
  }

  const itemVariants = variants || getItemVariants()

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

export default Animated
