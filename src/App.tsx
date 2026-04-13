import './App.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const PROJECTS = [
  {
    name: 'GlobalNewly',
    url: 'https://www.globalnewly.com',
    description: 'Real-time global news intelligence map. Aggregates thousands of sources worldwide, clusters breaking stories by location, and delivers AI-powered briefings — rivalling Google News in coverage.',
    tags: ['React', 'TypeScript', 'Supabase', 'Leaflet', 'AI/NLP', 'Edge Functions'],
    accent: '#2EC4B6',
  },
  {
    name: 'Drug Atlas',
    url: 'https://drugslandscape.com',
    description: 'Pharmaceutical intelligence platform mapping the global drug development landscape. Tracks 5,000+ compounds across clinical trials, regulatory approvals, and competitive dynamics.',
    tags: ['React', 'TypeScript', 'Supabase', 'Python', 'Data Pipelines', 'AI'],
    accent: '#4A90D9',
  },
  {
    name: 'Glovea',
    url: 'https://www.glovea.co.uk',
    description: 'Premium hand and foot warming cream brand. Built the brand from scratch — product development, website, marketing, and go-to-market strategy.',
    tags: ['Brand Building', 'E-commerce', 'Product Dev', 'Marketing'],
    accent: '#E8734A',
  },
  {
    name: 'DermaFlo',
    url: 'https://canva.link/nibh5zrqgrh1kyg',
    description: 'Skincare startup — developed the concept, pitch deck, product strategy, and investor materials. Full founder journey from zero to fundraise-ready.',
    tags: ['Startup', 'Pitch Deck', 'Product Strategy', 'Fundraising'],
    accent: '#F4A261',
  },
]

const SKILLS = [
  { category: 'Languages & Frameworks', items: ['TypeScript', 'React', 'Python', 'Node.js', 'Tailwind CSS', 'Vite'] },
  { category: 'Data & Backend', items: ['Supabase', 'PostgreSQL', 'Edge Functions', 'REST APIs', 'GitHub Actions'] },
  { category: 'AI & Data', items: ['LLM Integration', 'NLP Pipelines', 'Data Scraping', 'Gemini / Groq / Mistral'] },
  { category: 'Product & Business', items: ['Product Strategy', 'Brand Building', 'Go-to-Market', 'Pitch Decks', 'Sales'] },
]

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
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-3xl text-center">
          <div className="animate-fade-in-up">
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Hi, I'm</p>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animate-delay-100">
            James Millett
          </h1>
          <p className="text-xl sm:text-2xl text-text-light leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
            I build things. Products, platforms, brands — from zero to live.
            <br className="hidden sm:block" />
            <span className="text-teal">Founder</span> &middot; <span className="text-blue">Builder</span> &middot; <span className="text-gold">Operator</span>
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
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
                I'm a London-based founder and builder who moves fast and ships faster. I don't just talk about ideas — I build them, launch them, and put them in front of users.
              </p>
              <p>
                From real-time news intelligence platforms to pharmaceutical data products and consumer brands, I work across the full stack — product, engineering, design, and go-to-market.
              </p>
            </div>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                I'm self-taught and obsessively hands-on. If something needs building, I'll figure out how. If it needs shipping, I'll get it live. If it needs selling, I'll be on the calls.
              </p>
              <p>
                Right now I'm running multiple projects simultaneously — because one thing at a time was never really my style.
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
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-navy-light border border-border rounded-xl p-6 hover:border-text-mid transition-all hover:-translate-y-1"
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
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-navy text-text-mid"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="experience" className="py-24 px-6">
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">Where I've been</h3>
          <div className="space-y-8">
            {[
              {
                period: '2026 — Present',
                role: 'Founder & Builder',
                company: 'Self-employed',
                description: 'Building GlobalNewly, Drug Atlas, and Glovea simultaneously. Full-stack product development, data pipelines, AI integration, and brand strategy.',
              },
              {
                period: 'Feb — Mar 2026',
                role: 'Demo Creation & Software Research',
                company: 'Opvia (Seal)',
                description: 'Contract work creating product demos and conducting software research for the sales team at this London-based startup.',
              },
              {
                period: '2025 — 2026',
                role: 'Founder',
                company: 'DermaFlo',
                description: 'Skincare startup — developed product concept, pitch deck, business strategy, and took it from idea to fundraise-ready.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0" />
                  {i < 2 && <div className="w-px flex-1 bg-border mt-2" />}
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

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-mono text-accent tracking-wider uppercase mb-2">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">Let's talk</h3>
          <p className="text-text-light leading-relaxed mb-8">
            Whether you've got a project, a contract opportunity, or just want to connect — I'm always open to a conversation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:james.h.millett@gmail.com"
              className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent/90 transition-all hover:scale-105"
            >
              Email me
            </a>
            <a
              href="https://github.com/JamesMildog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-text-light rounded-lg hover:border-text-light hover:text-white transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

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
