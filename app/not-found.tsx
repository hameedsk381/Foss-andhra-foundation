"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the
          homepage.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link href="/">
          <AnimatedButton className="flex items-center">
            <Home className="mr-2 h-4 w-4" /> Return to Homepage
          </AnimatedButton>
        </Link>
        <button onClick={() => window.history.back()}>
          <AnimatedButton variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </AnimatedButton>
        </button>
      </motion.div>

      <motion.div
        className="absolute -z-10 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-[200px] sm:text-[300px] md:text-[400px] font-bold text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          404
        </div>
      </motion.div>
    </div>
  )
}
