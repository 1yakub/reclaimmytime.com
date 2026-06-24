'use client'

import { motion, type Variants } from 'framer-motion'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const tools = [
  { name: 'Claude', category: 'Writing + thinking', bg: '#C96442', letter: 'C' },
  { name: 'Fathom', category: 'Meeting notes', bg: '#4F7CFF', letter: 'F' },
  { name: 'WarpFlow', category: 'Talk-to-type', bg: '#2D2D2D', letter: 'W' },
  { name: 'GoHighLevel', category: 'CRM & follow-up', bg: '#0FA57A', letter: 'G' },
  { name: 'Zapier', category: 'Automation', bg: '#FF4A00', letter: 'Z' },
  { name: 'OpenAI', category: 'ChatGPT + everyday AI', bg: '#10A37F', letter: 'O' },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
}

export default function ToolsGrid() {
  return (
    <section className="py-20 px-6 bg-cream-100">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="section-label text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          You don&apos;t need 47 tools, you need 6
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={cardVariants}
              className="group flex items-center gap-4 bg-cream-50 border border-cream-300 rounded-2xl p-5 cursor-default"
              style={{ transition: 'border-color 180ms ease, box-shadow 180ms ease' }}
              whileHover={{ borderColor: '#C4A96B', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                style={{ backgroundColor: tool.bg }}
              >
                <span className="text-white font-sans font-bold text-sm">{tool.letter}</span>
              </div>
              <div>
                <p className="font-sans font-semibold text-sm text-dark-800">{tool.name}</p>
                <p className="font-sans text-xs text-muted mt-0.5">{tool.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
