'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE, delay },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] pt-20 pb-16 px-6 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(184,164,106,0.1)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <motion.p
          className="section-label mb-6"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          For time-strapped business owners
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-dark-800 leading-[1.05] tracking-tight text-balance mb-6"
          initial="hidden"
          animate="visible"
          custom={0.08}
          variants={fadeUp}
        >
          Stop researching AI.
          <br />
          Start using it.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="font-sans text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10"
          initial="hidden"
          animate="visible"
          custom={0.16}
          variants={fadeUp}
        >
          Reclaim My Time helps you automate repetitive tasks with AI and reclaim
          5–10 hours a week — without becoming a tech person.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          custom={0.22}
          variants={fadeUp}
        >
          <a
            href="#assessment"
            className="btn-gold gap-2 px-8 py-4 rounded-full shadow-lg shadow-gold-500/20"
          >
            Book Assessment
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 text-sm font-sans text-dark-700 hover:text-dark-900 group"
            style={{ transition: 'color 180ms ease' }}
          >
            See what&apos;s included
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-150" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
