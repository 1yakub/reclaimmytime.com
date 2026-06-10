'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send } from 'lucide-react'

const messages = [
  { type: 'bot', text: 'Are you regularly using AI tools in your business?' },
  {
    type: 'user',
    text: "Yes — I'm using AI tools like ChatGPT or Claude at least a few times per week.",
  },
  {
    type: 'bot',
    text: "Great! What's taking up most of your time right now — admin, client work, or content?",
  },
]

export default function AnnieChat() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 bg-cream-100" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center">
                  <span className="text-gold-400 font-serif font-bold text-lg">A</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-cream-100" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-dark-800">Annie</p>
                <p className="font-sans text-xs text-muted">Your AI Guide · Online</p>
              </div>
            </div>

            <p className="section-label mb-3">Meet Annie, your AI guide</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-800 leading-tight mb-5">
              Not ready to book?
              <br />
              Chat with Annie.
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-8">
              Annie finds your first quick win in a 2-minute chat — then emails
              you a personalized action plan. No pressure, no tech skills.
            </p>
            <a href="#chat" className="btn-gold gap-2 text-sm">
              Chat with Annie
              <Send className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Right — Chat UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-cream-50 border border-cream-300 rounded-3xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-cream-300 bg-white/40">
                <div className="w-8 h-8 rounded-full bg-dark-800 flex items-center justify-center">
                  <span className="text-gold-400 font-serif font-bold">A</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-dark-800">Annie</p>
                  <p className="font-sans text-xs text-green-500 font-medium">● Online</p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[220px]">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.25 }}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-xs font-sans leading-relaxed ${
                        msg.type === 'user'
                          ? 'bg-dark-800 text-cream-100 rounded-br-sm'
                          : 'bg-white border border-cream-300 text-dark-700 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.3 }}
                >
                  <div className="bg-white border border-cream-300 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                    {[0, 1, 2].map((j) => (
                      <span
                        key={j}
                        className="w-1.5 h-1.5 bg-cream-400 rounded-full animate-bounce"
                        style={{ animationDelay: `${j * 150}ms` }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-white border border-cream-300 rounded-full px-4 py-2.5">
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    className="flex-1 bg-transparent text-xs font-sans text-dark-700 placeholder-cream-400 outline-none"
                    readOnly
                  />
                  <button className="w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 hover:bg-gold-600 transition-colors">
                    <Send className="w-3 h-3 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
