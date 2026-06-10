import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Return My Time — Reclaim 5–10 Hours/Week with AI Tools',
  description:
    'Return My Time helps time-strapped business owners automate repetitive tasks with AI and reclaim 5–10 hours a week — without becoming a tech person.',
  keywords: ['AI tools', 'productivity', 'automation', 'business owners', 'reclaim time'],
  openGraph: {
    title: 'Return My Time — Reclaim 5–10 Hours/Week with AI Tools',
    description:
      'A 45-minute call where we walk through your workflows and build a custom AI toolstack — so you get your time back.',
    url: 'https://reclaimmytime.com',
    siteName: 'Return My Time',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
