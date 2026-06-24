import { MainLogo } from './icons/BrandIcons'

const footerLinks = {
  Offer: [
    { label: 'AI Tools Assessment', href: '#assessment' },
    { label: 'Chat with Annie', href: '#chat' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Resources: [
    { label: 'Blog', href: '#blog' },
    { label: 'Prompt Library', href: '#prompts' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Quick wins', href: '#quick-wins' },
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-dark-900 pt-16 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 text-cream-100 font-sans font-semibold text-sm mb-4 group">
              <span className="w-6 h-6 flex items-center justify-center transition-transform group-hover:-translate-x-0.5">
                <MainLogo className="w-6 h-6" />
              </span>
              <span>Reclaim My Time</span>
            </a>
            <p className="font-sans text-xs text-cream-400 leading-relaxed max-w-[180px]">
              Reclaim 5–10 hours a week with AI — without becoming a tech person.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-cream-400 mb-5">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-dark-600">
            © {new Date().getFullYear()} Reclaim My Time. All rights reserved.
          </p>
          <p className="font-sans text-xs text-dark-600">reclaimmytime.com</p>
        </div>
      </div>
    </footer>
  )
}
