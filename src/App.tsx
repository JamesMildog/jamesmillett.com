import { useState } from 'react'
import './App.css'

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
    accent: '#2EC4B6',
  },
  {
    name: 'Glovea (formerly DermaFlo)',
    url: 'https://www.glovea.co.uk',
    description: 'Transdermal warming cream for hands and feet. Co-founded with GMP manufacturing JV. Patent filings, regulatory workstreams, investor data room, and full commercial strategy. Awarded Homerton Changemakers Prize. Selected for Discovery Spark Programme.',
    tags: ['Founder CEO', 'GMP Manufacturing', 'IP Strategy', 'Regulatory', 'Brand'],
    accent: '#E8734A',
    deckUrl: '/deck.pdf',
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
    description: 'End-to-end commercial and technical development of transdermal technologies spanning cosmetic formulations, medical devices, and novel APIs. Negotiated and structured a JV with a GMP manufacturer. Led IP strategy including patent filings, trademarks, and brand protection. Built the business plan, financial models, and investor data room. Managed transition from R&D to commercial readiness across legal, regulatory, manufacturing, and marketing. Currently exploring new opportunities.',
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

function ContactSection() {
  const [revealed, setRevealed] = useState(false)
  const [answer, setAnswer] = useState('')
  const [cvEmail, setCvEmail] = useState('')
  const [cvSent, setCvSent] = useState(false)
  const correct = 'james.h.millett@gmail.com'
  const riddle = `".".join(["com", "h.millett@gmail", "james"][::-1])`

  const handleRun = () => {
    setAnswer(correct)
    setRevealed(true)
  }

  const handleCvRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (cvEmail) {
      window.open(`mailto:${correct}?subject=${encodeURIComponent('CV Request from ' + cvEmail)}&body=${encodeURIComponent('Hi James,\n\nI\'d like to request your CV.\n\nThanks,\n' + cvEmail)}`)
      setCvSent(true)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let's talk</h3>
          <p className="text-text-light leading-relaxed">
            Solve the riddle to find my email, or request my CV below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Python riddle */}
          <div className="bg-navy-light border border-border rounded-xl p-6 text-left">
            <h4 className="text-sm font-semibold text-teal mb-4">Find my email</h4>
            <div className="bg-navy rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-gold/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-teal/60" />
                <span className="text-text-mid text-[10px] font-mono ml-2">contact.py</span>
              </div>
              <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                <span className="text-text-mid">{'>>>'}</span>{' '}
                <span className="text-gold">{riddle}</span>
              </pre>
              {revealed ? (
                <div className="mt-3">
                  <pre className="font-mono text-xs sm:text-sm">
                    <span className="text-teal">'{answer}'</span>
                  </pre>
                  <a
                    href={`mailto:${correct}`}
                    className="inline-block mt-4 px-5 py-2.5 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all hover:scale-105 text-sm"
                  >
                    Send me an email
                  </a>
                </div>
              ) : (
                <button
                  onClick={handleRun}
                  className="mt-4 px-4 py-2 bg-teal/20 text-teal border border-teal/30 rounded-lg font-mono text-sm hover:bg-teal/30 transition-all cursor-pointer"
                >
                  &#9654; Run
                </button>
              )}
            </div>
          </div>

          {/* CV Request */}
          <div className="bg-navy-light border border-border rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gold mb-4">Request my CV</h4>
            {cvSent ? (
              <div className="flex flex-col items-center justify-center h-full py-8">
                <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-medium mb-1">Request opened</p>
                <p className="text-text-light text-sm text-center">Complete the email in your mail client and I'll send my CV over.</p>
              </div>
            ) : (
              <form onSubmit={handleCvRequest} className="space-y-4">
                <p className="text-text-light text-sm leading-relaxed">
                  Enter your email and I'll send you my full CV with detailed experience across pharma strategy, startup building, and research.
                </p>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={cvEmail}
                  onChange={(e) => setCvEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-navy border border-border rounded-lg text-white placeholder-text-mid text-sm focus:outline-none focus:border-teal transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-all hover:scale-[1.02] text-sm cursor-pointer"
                >
                  Request CV
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="https://github.com/JamesMildog"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-text-light rounded-lg hover:border-text-light hover:text-white transition-all text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jhmillett/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-text-light rounded-lg hover:border-text-light hover:text-white transition-all text-sm"
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
  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight hover:text-accent transition-colors">
            JM
          </a>
          <div className="flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-light hover:text-white transition-colors hidden sm:block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/JamesMildog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jhmillett/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center">
          <div className="animate-fade-in-up mb-6">
            <img
              src="/headshot.jpg"
              alt="James Millett"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-border shadow-lg shadow-accent/10"
            />
          </div>
          <div className="animate-fade-in-up">
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Hi, I'm</p>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animate-delay-100">
            James Millett
          </h1>
          <p className="text-xl sm:text-2xl text-text-light leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
            I don't just have ideas — I patent them, build them, and ship them.
            <br className="hidden sm:block" />
            <span className="text-teal">Scientist</span> &middot; <span className="text-blue">Strategist</span> &middot; <span className="text-gold">Founder</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-text-light rounded-lg hover:border-text-light hover:text-white transition-all"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-16 animate-fade-in-up animate-delay-400">
            <svg className="w-6 h-6 mx-auto text-text-mid animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">About</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">A bit about me</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                I'm a London-based founder with a background in life sciences and pharma strategy. Imperial College London and Cambridge trained, and former strategy consultant at Putnam Associates — where I served Fortune 500 biopharma and PE/VC clients for 19 months.
              </p>
              <p>
                I co-founded a transdermal technology startup, negotiated a GMP manufacturing joint venture, led IP strategy through <a href="https://www.search-for-intellectual-property.service.gov.uk/GB2513248.1" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">patent filings</a>, and built investor data rooms that generated strong inbound interest.
              </p>
            </div>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                I <a href="https://pubs.acs.org/doi/10.1021/acssynbio.4c00790" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">contributed to published research on a novel enzyme</a> on novel enzymes, built news intelligence platforms, and launched consumer brands — from zero to live.
              </p>
              <p>
                Athletics captain who led 200+ athletes. Political society president who brought cabinet ministers to campus. Chaired a viral disease conference for 130+ attendees. I don't just build products — I build teams and communities around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">Projects</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">What I've built</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="group bg-navy-light border border-border rounded-xl p-6 hover:border-text-mid transition-all hover:-translate-y-1"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.accent }}
                    />
                    <h4 className="text-xl font-semibold group-hover:text-white transition-colors">
                      {project.name}
                    </h4>
                    <svg className="w-4 h-4 text-text-mid ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <p className="text-text-light text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </a>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-navy text-text-mid"
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
                    className="text-xs text-teal hover:underline font-mono"
                  >
                    View pitch deck &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">What I work with</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((group) => (
              <div key={group.category} className="bg-navy-light border border-border rounded-xl p-6">
                <h4 className="text-sm font-semibold text-teal mb-4">{group.category}</h4>
                <ul className="space-y-2">
                  {group.items.map(item => (
                    <li key={item} className="text-text-light text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Where I've been</h3>
          <div className="space-y-8">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                  {i < EXPERIENCE.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <p className="text-xs font-mono text-text-mid mb-1">{item.period}</p>
                  <h4 className="text-lg font-semibold">{item.role}</h4>
                  <p className="text-teal text-sm mb-2">{item.company}</p>
                  <p className="text-text-light text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">Education</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Where I studied</h3>
          <div className="space-y-6">
            {EDUCATION.map((item, i) => (
              <div key={i} className="bg-navy-light border border-border rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <h4 className="text-lg font-semibold">{item.degree}</h4>
                  {item.institution && (
                    <span className="text-teal text-sm">{item.institution}</span>
                  )}
                </div>
                {item.detail && (
                  <p className="text-text-light text-sm leading-relaxed">{item.detail}</p>
                )}
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="bg-navy-card border border-teal/30 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-teal mb-2">Published Research</h4>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                Contributed to a paper on a novel enzyme published in ACS Synthetic Biology (data curation).
              </p>
              <a
                href="https://pubs.acs.org/doi/10.1021/acssynbio.4c00790"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal text-sm font-mono hover:underline"
              >
                Read the paper &rarr;
              </a>
            </div>
            <div className="bg-navy-card border border-accent/30 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-accent mb-2">Patent Filing</h4>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                UK patent application for transdermal technology developed at Cooden Cosmetics.
              </p>
              <a
                href="https://www.search-for-intellectual-property.service.gov.uk/GB2513248.1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-mono hover:underline"
              >
                View patent GB2513248.1 &rarr;
              </a>
            </div>
            <div className="bg-navy-card border border-gold/30 rounded-xl p-6">
              <h4 className="text-sm font-semibold text-gold mb-2">Pitch Deck</h4>
              <p className="text-text-light text-sm leading-relaxed mb-3">
                Pre-seed pitch deck for DermaFlo — transdermal technology venture with GMP manufacturing JV.
              </p>
              <a
                href="/deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm font-mono hover:underline"
              >
                View pitch deck &rarr;
              </a>
            </div>
          </div>

          {/* Leadership callout */}
          <div className="mt-6 bg-navy-card border border-gold/30 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-gold mb-3">Leadership</h4>
            <ul className="space-y-2">
              <li className="text-text-light text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                Athletics Captain — led 200+ athletes, record membership, managed &pound;10K+ budget
              </li>
              <li className="text-text-light text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                Political Society President &amp; Secretary — organised events for cabinet ministers, chaired debates, wrote for university newspaper
              </li>
              <li className="text-text-light text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                Chaired and organised an emerging viral disease conference — 130+ attendees, 6 speakers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-mid text-sm">
            &copy; {new Date().getFullYear()} James Millett
          </p>
          <p className="text-text-mid text-xs font-mono">
            London, UK
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
