'use client'

import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function CTASection() {
  return (
    <section id="book" className="py-24 px-6 bg-dark-800">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease: EASE }}
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
              Book the AI Tools Assessment →
            </a>
            <a
              href="#chat"
              className="flex items-center gap-2 text-sm font-sans text-cream-400 hover:text-cream-100 transition-colors group"
            >
              or
              <span className="flex items-center gap-2 underline decoration-cream-600 underline-offset-4 group-hover:decoration-cream-100">
                <div className="w-5 h-5 rounded-full bg-dark-900 border border-dark-700 flex items-center justify-center">
                  <span className="text-gold-400 font-serif font-bold text-[10px]">A</span>
                </div>
                chat with Annie
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
