'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const testimonials = [
  {
    quote: "I used to spend hours on comparative market analysis. Reclaim My Time identified tools I didn't even know existed. Now I have systems that run themselves.",
    name: 'Kaila Koivisto',
    title: 'Top DJ Realtor, Charlotte NC',
    initial: 'K',
    color: 'bg-gold-500',
  },
  {
    quote: "As a solo consultant, I was drowning in client follow-ups and proposal writing. The audit revealed 13 hours of weekly waste I didn't even know I had.",
    name: 'Marcus Chen',
    title: 'Strategy Consultant, Austin TX',
    initial: 'M',
    color: 'bg-dark-700',
  },
  {
    quote: "We tried building automations ourselves. In one 45-minute call, they mapped our entire workflow and showed us exactly where to start.",
    name: 'Sarah Williams',
    title: 'Agency Owner, Miami FL',
    initial: 'S',
    color: 'bg-[#5B8A6F]',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-24 px-6 bg-cream-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <p className="section-label mb-3">Real words. Real impact.</p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-800">
            Don&apos;t just take our word for it
          </h2>
        </motion.div>

        {/* Desktop: 3 columns */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-cream-50 border border-cream-300 rounded-2xl p-8 flex flex-col gap-6"
              whileHover={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
              style={{ transition: 'box-shadow 180ms ease' }}
            >
              <Quote className="w-6 h-6 text-gold-400 flex-shrink-0" />
              <p className="font-sans text-sm text-dark-700 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cream-300">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-sans font-semibold">{t.initial}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-dark-800">{t.name}</p>
                  <p className="font-sans text-xs text-muted">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="bg-cream-50 border border-cream-300 rounded-2xl p-8 flex flex-col gap-6"
            >
              <Quote className="w-6 h-6 text-gold-400" />
              <p className="font-sans text-sm text-dark-700 leading-relaxed">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cream-300">
                <div className={`w-9 h-9 rounded-full ${testimonials[current].color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-sans font-semibold">{testimonials[current].initial}</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-dark-800">{testimonials[current].name}</p>
                  <p className="font-sans text-xs text-muted">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-cream-300 flex items-center justify-center hover:bg-cream-200"
              style={{ transition: 'background-color 150ms ease' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-dark-700" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full ${i === current ? 'bg-dark-800 w-6' : 'bg-cream-300 w-1.5'}`}
                  style={{ transition: 'width 200ms ease, background-color 200ms ease' }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-cream-300 flex items-center justify-center hover:bg-cream-200"
              style={{ transition: 'background-color 150ms ease' }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-dark-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
