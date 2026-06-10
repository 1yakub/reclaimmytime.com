'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Book your assessment',
    description: 'A 45-minute call to map your workflows live.',
  },
  {
    number: '2',
    title: 'Get your custom report',
    description: 'Delivered to your inbox within 48 hours.',
  },
  {
    number: '3',
    title: 'Reclaim your hours',
    description: 'Follow the 7-day plan — quick wins first.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-24 px-6 bg-cream-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label text-center mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          How it works
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-cream-300" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative flex flex-col items-center md:items-start text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative z-10 w-16 h-16 rounded-full border-2 border-cream-300 bg-cream-50 flex items-center justify-center mb-6 flex-shrink-0">
                <span className="font-serif text-2xl font-bold text-gold-600">{step.number}</span>
              </div>
              <h3 className="font-serif text-xl text-dark-800 mb-3 leading-tight">{step.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#book" className="btn-gold px-10 py-4 shadow-lg shadow-gold-500/20">
            Book Your Assessment
          </a>
        </motion.div>
      </div>
    </section>
  )
}
