"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98, transition: { duration: 0.1 } },
  }

  return (
    <section className="container py-20 text-center md:py-32" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Master C++ Programming
          <br />
          <span className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">with comprehensive guides</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mx-auto max-w-[42rem] text-lg text-muted-foreground">
          Learn C++ from the ground up with our detailed tutorials, reference guides, and community support.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
            <Button asChild className="h-11 px-8 transition-all duration-200">
              <Link href="/tutorials/introduction">Get Started</Link>
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
            <Button variant="outline" className="h-11 px-8 transition-all duration-200">
              <Link href="/reference">Reference</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

