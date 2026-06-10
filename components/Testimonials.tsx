'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "I used to spend hours on comparative market analysis. Return My Time identified tools I didn't even know existed. Now I have systems that run themselves.",
    name: 'Kaila Koivisto',
    title: 'Top DJ Realtor, Charlotte NC',
    initial: 'K',
    color: 'bg-gold-500',
  },
  {
    quote:
      "As a solo consultant, I was drowning in client follow-ups and proposal writing. The audit revealed 13 hours of weekly waste I didn't even know I had.",
    name: 'Marcus Chen',
    title: 'Strategy Consultant, Austin TX',
    initial: 'M',
    color: 'bg-dark-700',
  },
  {
    quote:
      "We tried building automations ourselves. In one 45-minute call, they mapped our entire workflow and showed us exactly where to start.",
    name: 'Sarah Williams',
    title: 'Agency Owner, Miami FL',
    initial: 'S',
    color: 'bg-[#5B8A6F]',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-24 px-6 bg-cream-100" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Real words. Real impact.</p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-800">
            Don&apos;t just take our word for it
          </h2>
        </motion.div>

        {/* Desktop: 3 columns */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream-50 border border-cream-300 rounded-2xl p-8 flex flex-col gap-6 hover:shadow-md transition-shadow duration-200"
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
            </div>
          ))}
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-cream-50 border border-cream-300 rounded-2xl p-8 flex flex-col gap-6"
            >
              <Quote className="w-6 h-6 text-gold-400" />
              <p className="font-sans text-sm text-dark-700 leading-relaxed">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-cream-300">
                <div className={`w-9 h-9 rounded-full ${testimonials[current].color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-sans font-semibold">
                    {testimonials[current].initial}
                  </span>
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
              className="w-9 h-9 rounded-full border border-cream-300 flex items-center justify-center hover:bg-cream-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-dark-700" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-dark-800 w-6' : 'bg-cream-300 w-1.5'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full border border-cream-300 flex items-center justify-center hover:bg-cream-200 transition-colors"
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
