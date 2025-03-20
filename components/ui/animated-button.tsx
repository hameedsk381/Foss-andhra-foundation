"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  tapScale?: number
}

export function AnimatedButton({
  children,
  className,
  hoverScale = 1.05,
  tapScale = 0.98,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={cn(className)} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}

