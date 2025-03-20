"use client"

import type { Variants } from "framer-motion"

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

// Fade down animation
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

// Fade left animation
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

// Fade right animation
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

// Scale animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

// Staggered list animation
export const listContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const listItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
}

// Page transition
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

// Hover animation for cards
export const cardHover = {
  rest: { scale: 1, transition: { duration: 0.2 } },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
}

// Button hover animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
}

// Scroll triggered animations
export const scrollFadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export const scrollFadeLeft = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export const scrollFadeRight = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

// Float animation
export const float: Variants = {
  hidden: { y: 0 },
  show: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
}

// Pulse animation
export const pulse: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
}

// Rotate animation
export const rotate: Variants = {
  hidden: { rotate: 0 },
  show: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "linear",
    },
  },
}

