# Return My Time — reclaimmytime.com

> Reclaim 5–10 hours a week with AI tools — without becoming a tech person.

A modern, production-ready marketing landing page for **Return My Time**, an AI productivity consultancy that helps time-strapped business owners automate repetitive tasks through a custom AI toolstack assessment.

---

## 🚀 Live Site

**[reclaimmytime.com](https://reclaimmytime.com)**

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📐 Design System

| Token | Value |
|---|---|
| Background | `#F5F0E8` — warm cream |
| Accent / Gold | `#B8A46A` — muted gold |
| Dark | `#1A1A1A` — near black |
| Heading font | Playfair Display (serif) |
| Body font | Inter (sans-serif) |

---

## 🗂 Project Structure

```
reclaimmytime.com/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Tailwind directives + component classes
├── components/
│   ├── Navbar.tsx          # Sticky nav + audience tabs + mobile menu
│   ├── HeroSection.tsx     # Hero headline with fade-up animations
│   ├── ToolsGrid.tsx       # 6 AI tools grid (Claude, Fathom, Zapier…)
│   ├── AssessmentSection.tsx # Dark/cream two-column offer section
│   ├── HowItWorks.tsx      # 3-step process with connector line
│   ├── StatsBar.tsx        # Animated stat counters (5–10 hrs, 48 hrs…)
│   ├── Testimonials.tsx    # 3-column desktop / carousel mobile
│   ├── FAQ.tsx             # Accordion with smooth height animations
│   ├── AnnieChat.tsx       # Chat with Annie UI mockup
│   ├── CTASection.tsx      # Dark full-width CTA
│   └── Footer.tsx          # 3-column footer with links
├── public/                 # Static assets
├── tailwind.config.js      # Custom color palette + fonts
├── next.config.mjs
└── package.json
```

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/1yakub/reclaimmytime.com.git
cd reclaimmytime.com

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## ✨ Features

- **Fully responsive** — mobile, tablet, and desktop
- **Scroll-triggered animations** via Framer Motion
- **Animated stat counters** that trigger on scroll
- **Sticky navbar** with blur effect on scroll
- **Audience tabs** (Owners / Executives / Coaches / Operations)
- **FAQ accordion** with smooth expand/collapse
- **Mobile testimonial carousel** with dot navigation
- **Annie chat mockup** with animated typing indicator
- **SEO-optimized** — title, meta description, Open Graph tags
- **Google Fonts** — Playfair Display + Inter

---

## 🚢 Deployment

This project is deployed on **Vercel**. Every push to `master` triggers an automatic deployment.

To deploy your own fork:
1. Fork this repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects Next.js
4. Click Deploy

---

## 📄 License

Private — © Return My Time. All rights reserved.
