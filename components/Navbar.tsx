'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'AI Tools Assessment', href: '#assessment' },
  { label: 'Resources', href: '#resources' },
]

const audienceTabs = ['Owners', 'Executives', 'Coaches', 'Operations']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Owners')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-cream-300'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 text-dark-800 font-sans font-semibold text-sm tracking-tight group"
            >
              <span className="w-6 h-6 rounded-full bg-dark-800 flex items-center justify-center transition-transform group-hover:-translate-x-0.5">
                <ArrowLeft className="w-3 h-3 text-cream-100" />
              </span>
              <span>Return My Time</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-sans text-dark-700 hover:text-dark-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <a href="#assessment" className="btn-gold text-sm px-5 py-2.5">
                Book Assessment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-dark-800"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Audience Tabs */}
        <div className="border-t border-cream-300 bg-cream-100/90">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-6 py-2.5 overflow-x-auto">
              {audienceTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-sans font-medium whitespace-nowrap pb-1 transition-all ${
                    activeTab === tab
                      ? 'text-dark-800 border-b border-dark-800'
                      : 'text-muted hover:text-dark-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-cream-100 pt-24 px-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-serif text-dark-800 border-b border-cream-300 pb-4"
            >
              {link.label}
            </a>
          ))}
          <a href="#assessment" className="btn-gold mt-4 text-center">
            Book Assessment
          </a>
        </div>
      )}
    </>
  )
}
