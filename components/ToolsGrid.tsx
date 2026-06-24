'use client'

import { motion, type Variants } from 'framer-motion'
import { ClaudeLogo, FathomLogo, WisprFlowLogo, GoHighLevelLogo, ZapierLogo, OpenAILogo } from './icons/BrandIcons'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const tools = [
  { name: 'Claude', category: 'Writing + thinking', bg: '#FAF7F2', Icon: ClaudeLogo },
  { name: 'Fathom', category: 'Meeting notes', bg: '#FAF7F2', Icon: FathomLogo },
  { name: 'WisprFlow', category: 'Talk-to-type', bg: '#FAF7F2', Icon: WisprFlowLogo },
  { name: 'GoHighLevel', category: 'CRM & follow-up', bg: '#FAF7F2', Icon: GoHighLevelLogo },
  { name: 'Zapier', category: 'Automation', bg: '#FAF7F2', Icon: ZapierLogo },
  { name: 'OpenAI', category: 'ChatGPT + everyday AI', bg: '#FAF7F2', Icon: OpenAILogo },
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
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-cream-300 bg-white"
              >
                <tool.Icon className="w-6 h-6" />
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
