'use client'

import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const audienceTabs = ['Owners', 'Executives', 'Coaches', 'Operators']

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
  const [activeTab, setActiveTab] = useState('Owners')

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-20 px-6 overflow-hidden">
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
            or
            <span className="flex items-center gap-2 group-hover:underline">
              <div className="w-5 h-5 rounded-full bg-dark-800 flex items-center justify-center">
                <span className="text-gold-400 font-serif font-bold text-[10px]">A</span>
              </div>
              chat with Annie
            </span>
          </a>
        </motion.div>

        {/* Audience Tabs - Floating */}
        <motion.div
          className="mt-12 flex justify-center"
          initial="hidden"
          animate="visible"
          custom={0.28}
          variants={fadeUp}
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {audienceTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-sans font-medium transition-all duration-200 border ${
                  activeTab === tab
                    ? 'border-dark-800 text-dark-800 bg-transparent'
                    : 'border-cream-300 text-dark-700 bg-white hover:border-dark-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
