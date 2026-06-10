'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="book" className="py-24 px-6 bg-dark-800" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold-400 mb-5">
            Get started today
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream-100 leading-tight mb-6 text-balance">
            Ready to reclaim 5–10 hours a week?
          </h2>
          <p className="font-sans text-sm text-cream-400 leading-relaxed mb-10 max-w-md mx-auto">
            Book your AI Tools Assessment. We&apos;ll map your workflows live and send
            a custom report to your inbox — within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#assessment"
              id="cta-book-assessment"
              className="btn-gold gap-2 px-8 py-4 text-sm shadow-lg shadow-gold-500/20"
            >
              Book AI Tools Assessment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#chat"
              className="text-sm font-sans text-cream-300 hover:text-cream-100 transition-colors underline underline-offset-4"
            >
              or chat with Annie first
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
