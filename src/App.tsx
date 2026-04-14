import { useState } from 'react'
import './App.css'

const PATENT_URL = 'https://www.search-for-intellectual-property.service.gov.uk/GB2513248.1'

function TextWithPatentLink({ text, className = 'text-ember hover:underline' }: { text: string; className?: string }) {
  const needle = 'filed a patent'
  const idx = text.indexOf(needle)
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <a href={PATENT_URL} target="_blank" rel="noopener noreferrer" className={className}>
        filed a patent
      </a>
      {text.slice(idx + needle.length)}
    </>
  )
}

const PITCH_DEMO_MAILTO = `mailto:james.h.millett@gmail.com?subject=${encodeURIComponent('Pitch & demo access request')}&body=${encodeURIComponent("Hi James,\n\nI'd like to request access to the pitch deck and demo.\n\n")}`

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const PROJECTS = [
  {
    name: 'GlobalNewly',
    url: 'https://www.globalnewly.com',
    description: 'Real-time global news intelligence map. Aggregates hundreds of RSS feeds across 50+ countries, clusters breaking stories by location, and delivers AI-powered briefings.',
    tags: ['React', 'TypeScript', 'Supabase', 'Leaflet', 'AI/NLP', 'Edge Functions'],
    accent: '#4A7C6F',
  },
  {
    name: 'Glovea (formerly DermaFlo)',
    url: 'https://www.glovea.co.uk',
    description: 'Biotech startup for Raynaud\'s disease: filed a patent, won grant funding, secured investment through a GMP manufacturing JV, ran user trials with 23 sufferers, dual regulatory strategy across cosmetic and medical device pathways — lab bench to commercial readiness.',
    tags: ['Founder CEO', 'GMP Manufacturing', 'IP Strategy', 'Regulatory', 'Brand'],
    accent: '#C84B31',
    deckUrl: '/deck.pdf',
  },
  {
    name: 'Gigstart',
    url: 'https://www.gig-start.com',
    description: 'Designed, built and shipped the full website for Gigstart — a specialist executive search firm placing non-technical leaders into technical companies. AI-powered chatbot, interactive hiring map, case studies, blog with 54 posts, PostHog analytics, and full SEO.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vercel', 'OpenAI', 'Web3Forms'],
    accent: '#4A6FA5',
  },
  {
    name: 'New Project — Coming Soon',
    url: PITCH_DEMO_MAILTO,
    description: 'Something big is in the works. Request access to the pitch deck and demo.',
    tags: ['Stealth', 'Request Access'],
    accent: '#C59849',
    isTeaser: true,
  },
]

const SKILLS = [
  { category: 'Pharma & Life Sciences', items: ['Market Access', 'Reimbursement Strategy', 'Clinical Trial Design', 'Competitive Landscaping', 'Regulatory Affairs', 'IP Strategy', 'GMP Manufacturing'] },
  { category: 'Strategy & Commercial', items: ['Go-to-Market', 'Brand Strategy', 'Sales Force Strategy', 'Due Diligence', 'Demand Studies', 'Financial Modelling', 'Pitch Decks'] },
  { category: 'Research & Analysis', items: ['Primary & Secondary Research', 'Survey Design & Analysis', 'Biological Modelling', 'Statistical Testing', 'Revenue Modelling', 'Market Sizing'] },
  { category: 'Technical', items: ['Python (scripting)', 'Data Analysis', 'Quantitative Modelling', 'Genetic Engineering', 'Lab Techniques'] },
]

const EXPERIENCE = [
  {
    period: '2024 — Present',
    role: 'Co-founder & CEO',
    company: 'DermaFlo / Cooden Cosmetics',
    description: 'Co-founded a biotech startup for Raynaud\'s disease, filed a patent, won grant funding, secured investment through a GMP manufacturing joint venture, ran user trials with 23 sufferers, and led a dual regulatory strategy across cosmetic and medical device pathways. Took it from lab bench to commercial readiness. Currently exploring new opportunities.',
  },
  {
    period: 'Apr 2022 — Oct 2023',
    role: 'Associate Consultant II & I (19 months)',
    company: 'Putnam Associates',
    description: 'Strategy consultant to Fortune 500 biopharma, biotech, and PE/VC clients. Built long-range revenue forecast models from primary demand studies. Delivered go/no-go investment assessments for early-stage pharmaceutical assets. Developed regulatory, market access, and reimbursement strategies for indication expansions. Informed brand strategy for major product launches. Created sales force strategies for advanced therapies. Produced regulatory and distribution frameworks for global vaccine rollouts.',
  },
  {
    period: '2022',
    role: 'Strategy Consultant (Pro Bono)',
    company: '180 Degrees Consulting',
    description: 'Marketing strategy consulting for a leading UK non-profit — consumer segmentation, ROI prediction, and go-to-market plan used to launch their app.',
  },
  {
    period: '2021',
    role: 'Business Strategy Intern',
    company: 'Multus Media (Clean Meat Biotech)',
    description: 'Designed and conducted market research for competitors, consumers, and trends. Findings communicated directly to the CEO, leading the company to modify its pipeline to address new markets.',
  },
  {
    period: 'Summer',
    role: 'Research Intern — Malaria Genetic Engineering Lab',
    company: 'Imperial College London (Gates Foundation funded)',
    description: 'Designed an approach to increase specificity when genetically editing mosquitoes. Constructed the design and quantified statistical significance vs. the previous approach. Collected, analysed, and presented data to peers and field experts.',
  },
]

const EDUCATION = [
  {
    degree: 'PGCE',
    institution: 'University of Cambridge',
    detail: '',
  },
  {
    degree: 'MRes Systems & Synthetic Biology — Merit',
    institution: 'Imperial College London',
    detail: 'Distinction in 4 of 5 modules. Quantitative modelling in Python, circuit design, biological modelling, programming robots, statistical testing. Used genetic engineering and modelling to design, build, and test engineering approaches for CBD synthesis in yeast.',
  },
  {
    degree: 'BSc (Hons) Biological Sciences — 2:1',
    institution: 'Imperial College London',
    detail: '1st in 3rd Year project and dissertation — examiner called it the "best dissertation I\'ve read". Awarded "Outstanding" in problem-solving/communication. 1st in all presentations. CRISPR gene-editing dissertation.',
  },
  {
    degree: 'A-Levels',
    institution: '',
    detail: 'Biology A*, Chemistry A, Maths A. AS-Levels: Maths A, Physics A.',
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <hr className="rule-accent" />
      <span className="text-[11px] font-semibold tracking-[3px] uppercase text-ember">{children}</span>
    </div>
  )
}

function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '96a97cf6-5e8b-464a-9f73-2deb18f757a3',
          name,
          email,
          message,
          subject: `New message from ${name} — jamesmillett.com`,
          from_name: 'James Millett Website',
        }),
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
    } catch {
      window.location.href = `mailto:james.h.millett@gmail.com?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(message)}`
    }
    setSubmitting(false)
  }

  return (
    <section id="contact" className="py-16 sm:py-28 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Contact</SectionLabel>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink mt-4">Let's talk</h3>
          <p className="text-ink-mid mt-4 text-lg">Have an idea, opportunity, or just want to say hello?</p>
        </div>

        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="bg-sage/10 border border-sage/20 rounded-2xl p-10 text-center">
              <svg className="w-12 h-12 text-sage mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-ink font-semibold text-lg">Message sent!</p>
              <p className="text-ink-mid text-sm mt-2">I'll get back to you as soon as I can.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-ink-mid mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-card-border bg-card px-5 py-3.5 text-ink text-[15px] outline-none focus:border-ember focus:ring-1 focus:ring-ember/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-ink-mid mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-card-border bg-card px-5 py-3.5 text-ink text-[15px] outline-none focus:border-ember focus:ring-1 focus:ring-ember/30 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-ink-mid mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-card-border bg-card px-5 py-3.5 text-ink text-[15px] outline-none focus:border-ember focus:ring-1 focus:ring-ember/30 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-ink text-cream font-medium rounded-xl hover:bg-ink-light transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="https://github.com/JamesMildog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3 border border-card-border text-ink-mid rounded-xl hover:border-ink hover:text-ink transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jhmillett/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3 border border-card-border text-ink-mid rounded-xl hover:border-ink hover:text-ink transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-lg border-b border-card-border/50">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-lg sm:text-xl font-semibold text-ink hover:text-ember transition-colors">
            James Millett
          </a>
          <div className="flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-ink-mid hover:text-ink transition-colors hidden md:block tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/JamesMildog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint hover:text-ink transition-colors hidden sm:block"
              aria-label="GitHub"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jhmillett/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faint hover:text-ink transition-colors hidden sm:block"
              aria-label="LinkedIn"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileNav(!mobileNav)}
              className="md:hidden text-ink-mid hover:text-ink transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                {mobileNav
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                }
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileNav && (
          <div className="md:hidden bg-cream border-t border-card-border/50 px-5 py-4 space-y-3">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileNav(false)}
                className="block text-[15px] text-ink-mid hover:text-ink transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/JamesMildog" target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/jhmillett/" target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-5 sm:px-6 pt-16">
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          {/* Mobile headshot */}
          <div className="lg:hidden animate-fade-in-up flex justify-center mt-4">
            <img
              src="/headshot.jpg"
              alt="James Millett"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover shadow-xl shadow-ink/10"
              style={{ border: '5px solid white' }}
            />
          </div>
          <div>
            <div className="animate-fade-in-up">
              <p className="text-[11px] font-semibold tracking-[3px] uppercase text-ember mb-6 text-center lg:text-left">London, UK</p>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] mb-6 animate-fade-in-up animate-delay-100 text-center lg:text-left">
              James<br />Millett
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-ink-light leading-relaxed mb-4 animate-fade-in-up animate-delay-200 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              I don't just have ideas — I patent them, build them, and ship them.
            </p>
            <p className="text-base sm:text-lg text-ink-mid animate-fade-in-up animate-delay-200 text-center lg:text-left">
              <span className="text-sage font-medium">Scientist</span> &middot;{' '}
              <span className="text-slate-blue font-medium">Strategist</span> &middot;{' '}
              <span className="text-warm-gold font-medium">Founder</span>
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10 animate-fade-in-up animate-delay-300">
              <a
                href="#projects"
                className="px-7 py-3.5 bg-ink text-cream font-medium rounded-xl hover:bg-ink-light transition-all text-sm"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-card-border text-ink-mid rounded-xl hover:border-ink hover:text-ink transition-all text-sm"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="animate-fade-in-up animate-delay-300 hidden lg:block">
            <img
              src="/headshot.jpg"
              alt="James Millett"
              className="w-64 xl:w-72 h-64 xl:h-72 rounded-3xl object-cover shadow-2xl shadow-ink/10"
              style={{ border: '6px solid white' }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-28 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>About</SectionLabel>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-10">A bit about me</h3>
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-5 text-ink-light leading-[1.85] text-[15px]">
              <p>
                I'm a London-based founder with a background in life sciences and pharma strategy. Imperial College London and Cambridge trained, and former strategy consultant at Putnam Associates — where I served Fortune 500 biopharma and PE/VC clients for 19 months.
              </p>
              <p>
                I co-founded a biotech startup for Raynaud&apos;s disease,{' '}
                <a href={PATENT_URL} target="_blank" rel="noopener noreferrer" className="text-ember hover:underline">filed a patent</a>, won grant funding, secured investment through a GMP manufacturing joint venture, ran user trials with 23 sufferers, and led a dual regulatory strategy across cosmetic and medical device pathways. Took it from lab bench to commercial readiness.
              </p>
            </div>
            <div className="space-y-5 text-ink-light leading-[1.85] text-[15px]">
              <p>
                I <a href="https://pubs.acs.org/doi/10.1021/acssynbio.4c00790" target="_blank" rel="noopener noreferrer" className="text-sage hover:underline">contributed to published research on a novel enzyme</a>, built news intelligence platforms, and launched consumer brands — from zero to live.
              </p>
              <p>
                Athletics captain who led 200+ athletes. Political society president who brought cabinet ministers to campus. Chaired a viral disease conference for 130+ attendees. I don't just build products — I build teams and communities around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-28 px-5 sm:px-6 bg-warm-white">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Projects</SectionLabel>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-14">What I've built</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => {
              const isTeaser = 'isTeaser' in project
              return (
                <div
                  key={project.name}
                  className={`group bg-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 ${isTeaser ? 'border-2 border-dashed border-warm-gold/40' : 'border border-card-border'}`}
                >
                  <a
                    href={project.url}
                    {...(!isTeaser ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block mb-5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full shrink-0 ${isTeaser ? 'animate-pulse' : ''}`}
                        style={{ backgroundColor: project.accent }}
                      />
                      <h4 className="text-xl font-semibold text-ink group-hover:text-ember transition-colors">
                        {project.name}
                      </h4>
                      {!isTeaser && (
                        <svg className="w-4 h-4 text-ink-faint ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      )}
                    </div>
                  </a>
                  <p className="text-ink-mid text-[14px] leading-relaxed mb-5">
                    <TextWithPatentLink text={project.description} />
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${tag === 'Request Access' ? 'bg-warm-gold/15 text-warm-gold' : 'bg-warm-white text-ink-mid'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {'deckUrl' in project && (
                    <a
                      href={(project as { deckUrl: string }).deckUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-sage hover:underline font-medium"
                    >
                      View pitch deck &rarr;
                    </a>
                  )}
                  {isTeaser && (
                    <a
                      href={PITCH_DEMO_MAILTO}
                      className="text-xs text-warm-gold hover:underline font-medium"
                    >
                      Request pitch &amp; demo access &rarr;
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 sm:py-28 px-5 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Skills</SectionLabel>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-14">What I work with</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((group) => (
              <div key={group.category} className="bg-card border border-card-border rounded-2xl p-7">
                <h4 className="text-[13px] font-semibold text-sage mb-5 tracking-wide">{group.category}</h4>
                <ul className="space-y-2.5">
                  {group.items.map(item => (
                    <li key={item} className="text-ink-mid text-[13px] flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 sm:py-28 px-5 sm:px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Experience</SectionLabel>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-14">Where I've been</h3>
          <div className="space-y-0">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="flex gap-7 group">
                <div className="flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-ember mt-2 shrink-0 ring-4 ring-warm-white" />
                  {i < EXPERIENCE.length - 1 && <div className="w-px flex-1 bg-card-border mt-1" />}
                </div>
                <div className="pb-12">
                  <p className="text-[11px] font-medium tracking-wider text-ink-faint uppercase mb-1.5">{item.period}</p>
                  <h4 className="text-lg font-semibold text-ink">{item.role}</h4>
                  <p className="text-sage text-[14px] font-medium mb-3">{item.company}</p>
                  <p className="text-ink-mid text-[14px] leading-[1.8]">
                    <TextWithPatentLink text={item.description} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 sm:py-28 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Education</SectionLabel>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-14">Where I studied</h3>
          <div className="space-y-5">
            {EDUCATION.map((item, i) => (
              <div key={i} className="bg-card border border-card-border rounded-2xl p-7">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <h4 className="text-lg font-semibold text-ink">{item.degree}</h4>
                  {item.institution && (
                    <span className="text-sage text-[14px] font-medium">{item.institution}</span>
                  )}
                </div>
                {item.detail && (
                  <p className="text-ink-mid text-[14px] leading-[1.8]">{item.detail}</p>
                )}
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <div className="bg-card border border-sage/20 rounded-2xl p-7">
              <h4 className="text-[13px] font-semibold text-sage mb-3 tracking-wide">Published Research</h4>
              <p className="text-ink-mid text-[13px] leading-relaxed mb-4">
                Contributed to a paper on a novel enzyme published in ACS Synthetic Biology (data curation).
              </p>
              <a
                href="https://pubs.acs.org/doi/10.1021/acssynbio.4c00790"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage text-[13px] font-medium hover:underline"
              >
                Read the paper &rarr;
              </a>
            </div>
            <div className="bg-card border border-ember/20 rounded-2xl p-7">
              <h4 className="text-[13px] font-semibold text-ember mb-3 tracking-wide">Patent Filing</h4>
              <p className="text-ink-mid text-[13px] leading-relaxed mb-4">
                UK patent application for transdermal technology developed at Cooden Cosmetics.
              </p>
              <a
                href={PATENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ember text-[13px] font-medium hover:underline"
              >
                View patent GB2513248.1 &rarr;
              </a>
            </div>
            <div className="bg-card border border-warm-gold/20 rounded-2xl p-7">
              <h4 className="text-[13px] font-semibold text-warm-gold mb-3 tracking-wide">Pitch Deck</h4>
              <p className="text-ink-mid text-[13px] leading-relaxed mb-4">
                Pre-seed pitch deck for DermaFlo — transdermal technology venture with GMP manufacturing JV.
              </p>
              <a
                href="/deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gold text-[13px] font-medium hover:underline"
              >
                View pitch deck &rarr;
              </a>
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-6 bg-card border border-warm-gold/20 rounded-2xl p-7">
            <h4 className="text-[13px] font-semibold text-warm-gold mb-4 tracking-wide">Leadership</h4>
            <ul className="space-y-3">
              <li className="text-ink-mid text-[14px] flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold mt-2 shrink-0" />
                Athletics Captain — led 200+ athletes, record membership, managed &pound;10K+ budget
              </li>
              <li className="text-ink-mid text-[14px] flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold mt-2 shrink-0" />
                Political Society President &amp; Secretary — organised events for cabinet ministers, chaired debates, wrote for university newspaper
              </li>
              <li className="text-ink-mid text-[14px] flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold mt-2 shrink-0" />
                Chaired and organised an emerging viral disease conference — 130+ attendees, 6 speakers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-card-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-faint text-sm">
            &copy; {new Date().getFullYear()} James Millett
          </p>
          <p className="text-ink-faint text-xs">
            London, UK
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
