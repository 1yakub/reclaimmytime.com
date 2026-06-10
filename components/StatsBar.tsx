'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: '5–10', suffix: ' hrs', label: 'Saved per week' },
  { value: '48', suffix: ' hrs', label: 'Report delivery' },
  { value: '3–7', suffix: '', label: 'Tools recommended' },
  { value: '0', suffix: '', label: 'Tech skills needed' },
]

function CountUp({ value }: { value: string }) {
  const isPlain = /^\d+$/.test(value)
  const [display, setDisplay] = useState(isPlain ? '0' : value)
  const animated = useRef(false)

  useEffect(() => {
    if (!isPlain || animated.current) return
    animated.current = true
    const target = parseInt(value, 10)
    const duration = 1400
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * target).toString())
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isPlain, value])

  return <>{isPlain ? display : value}</>
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (inView) setStarted(true)
  }, [inView])

  return (
    <section className="py-16 bg-dark-800" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-8 px-4 border-r border-dark-700 last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-cream-100 leading-none mb-2">
                {started ? (
                  <>
                    <CountUp value={stat.value} />
                    <span className="text-gold-400">{stat.suffix}</span>
                  </>
                ) : (
                  <span className="opacity-0">{stat.value}</span>
                )}
              </p>
              <p className="font-sans text-xs text-cream-400 tracking-widest uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
