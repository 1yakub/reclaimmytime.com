'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 'faq-technical',
    question: "I'm not technical. Will I be able to implement this?",
    answer:
      "Absolutely. We specifically design your toolstack around your actual skill level. Most clients are up and running within a day or two — no coding, no complex setups. We give you step-by-step instructions and pick tools that are genuinely beginner-friendly.",
  },
  {
    id: 'faq-business',
    question: 'Will this work for my kind of business?',
    answer:
      "Yes — we've worked with realtors, consultants, coaches, agency owners, and operations leads. The assessment is designed to understand your specific workflows, not apply a generic template. If AI can help your business (and it almost certainly can), we'll find where.",
  },
  {
    id: 'faq-brand-new',
    question: "What if I'm brand new to AI?",
    answer:
      "That's actually ideal. You haven't built bad habits or invested in the wrong tools yet. We'll start you with exactly the right foundation — no overwhelm, no rabbit holes, just the tools that move the needle for your specific situation.",
  },
  {
    id: 'faq-implement',
    question: 'Do you implement the automations for me?',
    answer:
      "Our core offering is the assessment and custom report — we tell you exactly what to build and how to do it. Many clients implement everything themselves using our 7-day plan. We also offer done-for-you implementation as an add-on for those who'd rather hand it off entirely.",
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-24 px-6 bg-cream-50" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-dark-800">
            Questions you might be asking
          </h2>
        </motion.div>

        <motion.div
          className="divide-y divide-cream-300 border-y border-cream-300"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              <button
                id={faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={openId === faq.id}
              >
                <span className="font-sans text-sm font-medium text-dark-800 leading-snug group-hover:text-dark-600 transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                  {openId === faq.id ? (
                    <Minus className="w-3.5 h-3.5 text-gold-500" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-dark-700" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openId === faq.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-sm text-muted leading-relaxed pb-5 pr-10">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
