'use client'

import { motion } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const steps = [
  { number: '1', title: 'Book your assessment', description: 'A 45-minute call to map your workflows live.' },
  { number: '2', title: 'Get your custom report', description: 'Delivered to your inbox within 48 hours.' },
  { number: '3', title: 'Reclaim your hours', description: 'Follow the 7-day plan — quick wins first.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-cream-50">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          How it works
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col items-center md:items-start text-center md:text-left"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
            >
              {/* Large gold numeral — matches original */}
              <span className="font-serif text-7xl font-bold text-gold-400 leading-none mb-4 select-none">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-dark-800 mb-2 leading-tight">{step.title}</h3>
              <p className="font-sans text-sm text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.45, delay: 0.35, ease: EASE }}
        >
          <a href="#book" className="btn-gold px-10 py-4 shadow-lg shadow-gold-500/20">
            Book Your Assessment
          </a>
        </motion.div>
      </div>
    </section>
  )
}
