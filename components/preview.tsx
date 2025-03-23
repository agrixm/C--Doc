"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { DocPreview } from "./doc-preview"

export function Preview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="container pb-20" ref={ref}>
      <motion.div
        className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg border bg-background shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <DocPreview />
      </motion.div>
    </section>
  )
}

