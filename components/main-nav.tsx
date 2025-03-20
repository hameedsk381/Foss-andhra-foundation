"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { programInfo } from "@/lib/utils"
import Image from "next/image"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const programs = Object.entries(programInfo).map(([key, value]) => ({
    id: key,
    title: value.title,
    description: value.description,
    href: `/programs/${key}`,
    color: value.color,
    logo: value.logo,
  }))

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Programs", href: "#", hasChildren: true },
    { title: "Events", href: "/events" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contribute", href: "/contribute" },
  ]

  return (
    <div className="flex justify-between items-center py-4">
      <Link href="/" className="flex items-center space-x-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-10 h-10"
        >
          <Image
            src="/logos/light-logo.png"
            alt="FOSS Andhra Logo"
            width={100}
            height={100}
            className="block dark:hidden mt-3"
          />
          <Image
            src="/logos/dark-logo.jpg"
            alt="FOSS Andhra Logo"
            width={100}
            height={100}
            className="hidden dark:block mt-3"
          />
        </motion.div>
      
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) => {
              if (item.hasChildren) {
                return (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger
                      className={cn("text-base", pathname.startsWith("/programs") && "text-primary font-medium")}
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="w-[300px] md:w-[500px] lg:w-[600px] p-4 grid grid-cols-1 md:grid-cols-2 gap-3"
                      >
                        {programs.map((program) => (
                          <Link key={program.id} href={program.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                `hover:bg-${program.color}/10`,
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-8 h-8 rounded-full bg-${program.color} flex items-center justify-center text-white`}
                                >
                                  {program.title.charAt(0)}
                                </div>
                                <div className="text-sm font-medium leading-none">{program.title}</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {program.description}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        ))}
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              }

              return (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-base",
                        pathname === item.href && "text-primary font-medium",
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-4">
          <Link href="/programs/fosstar#membership">
            <Button className="bg-secondary text-white hover:bg-secondary/90">Join Us</Button>
          </Link>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/logos/light-logo.png"
                      alt="FOSS Andhra Logo"
                      width={32}
                      height={32}
                      className="block dark:hidden mt-2"
                    />
                    <Image
                      src="/logos/dark-logo.jpg"
                      alt="FOSS Andhra Logo"
                      width={32}
                      height={32}
                      className="hidden dark:block mt-2"
                    />
                  </div>
                  
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              <div className="space-y-4 flex-1">
                <AnimatePresence>
                  {navItems.map((item, index) => {
                    if (item.hasChildren) {
                      return (
                        <div key={index} className="space-y-2">
                          <div className="font-medium px-1 py-2">{item.title}</div>
                          <div className="pl-4 space-y-1 border-l-2 border-muted">
                            {programs.map((program) => (
                              <motion.div
                                key={program.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={program.href}
                                  className={cn(
                                    "flex items-center gap-2 py-2 px-1 rounded-md",
                                    pathname === program.href
                                      ? `text-${program.color} font-medium`
                                      : "text-foreground hover:text-primary",
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div
                                    className={`w-6 h-6 rounded-full bg-${program.color} flex items-center justify-center text-white text-xs`}
                                  >
                                    {program.title.charAt(0)}
                                  </div>
                                  <span>{program.title}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )
                    }

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-2 px-1 rounded-md",
                            pathname === item.href ? "text-primary font-medium" : "text-foreground hover:text-primary",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>

              <div className="pt-4 mt-auto">
                <Link href="/programs/fosstar#membership" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-secondary text-white hover:bg-secondary/90">Join Us</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
