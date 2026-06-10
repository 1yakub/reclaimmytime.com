'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, ChevronRight } from 'lucide-react'

const reportItems = [
  '3–7 AI tools matched to your business',
  'Impact vs. Effort priority matrix',
  'A prioritized toolstack',
  'Your 7-day implementation plan',
]

export default function AssessmentSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="assessment" className="py-24 px-6 bg-cream-100" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
          {/* Left — Dark Panel */}
          <motion.div
            className="bg-dark-800 p-10 lg:p-14 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-gold-400 mb-5">
                The AI Tools Assessment
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl text-cream-100 leading-tight mb-6">
                We find your hours.
                <br />
                We keep them.
              </h2>
              <p className="font-sans text-sm text-cream-400 leading-relaxed">
                A 45-minute call where we walk through your workflows live — then
                a custom report showing exactly how to reclaim 5–10 hours every
                week, without adding complexity.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-sm font-sans font-medium text-gold-400 hover:text-gold-300 transition-colors group"
              >
                See what&apos;s included
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right — Light Panel */}
          <motion.div
            className="bg-cream-50 p-10 lg:p-14 border border-cream-300 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-sans font-medium tracking-widest uppercase text-muted mb-6">
              Your custom report includes
            </p>
            <ul className="space-y-5">
              {reportItems.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-dark-700 leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-cream-300">
              <a href="#book" className="btn-gold w-full justify-center text-sm">
                Book Your Assessment
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
