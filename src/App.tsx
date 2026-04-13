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
    name: 'Glovea (formerly DermaFlo)',
    url: 'https://www.glovea.co.uk',
    description: 'Transdermal warming cream for hands and feet. Co-founded with GMP manufacturing JV. Patent filings, regulatory workstreams, investor data room, and full commercial strategy. Awarded Homerton Changemakers Prize. Selected for Discovery Spark Programme.',
    tags: ['Founder CEO', 'GMP Manufacturing', 'IP Strategy', 'Regulatory', 'Brand'],
    accent: '#E8734A',
    deckUrl: 'https://canva.link/nibh5zrqgrh1kyg',
  },
]

const SKILLS = [
  { category: 'Engineering', items: ['TypeScript', 'React', 'Python', 'Node.js', 'Tailwind CSS', 'Vite', 'Supabase', 'PostgreSQL'] },
  { category: 'Data & AI', items: ['LLM Integration', 'NLP Pipelines', 'Data Pipelines', 'Web Scraping', 'Biological Modelling', 'Statistical Testing', 'Revenue Modelling'] },
  { category: 'Pharma & Life Sciences', items: ['Market Access', 'Reimbursement Strategy', 'Clinical Trial Design', 'Competitive Landscaping', 'Regulatory Affairs', 'IP Strategy', 'GMP Manufacturing'] },
  { category: 'Strategy & Commercial', items: ['Go-to-Market', 'Brand Strategy', 'Sales Force Strategy', 'Due Diligence', 'Demand Studies', 'Financial Modelling', 'Pitch Decks'] },
]

const EXPERIENCE = [
  {
    period: '2026 — Present',
    role: 'Founder & Builder',
    company: 'Self-employed',
    description: 'Building GlobalNewly (real-time news intelligence), Drug Atlas (pharma data platform), and Glovea (consumer brand) simultaneously. Full-stack product development, data pipelines, AI integration, and commercial strategy.',
  },
  {
    period: 'Feb — Mar 2026',
    role: 'Demo Creation & Software Research',
    company: 'Opvia (trading as Seal)',
    description: 'Contract engagement creating product demos and conducting software research for the sales team.',
  },
  {
    period: '2024 — 2026',
    role: 'Co-founder & CEO',
    company: 'DermaFlo / Cooden Cosmetics (Glovea)',
    description: 'End-to-end commercial and technical development of transdermal technologies spanning cosmetic formulations, medical devices, and novel APIs. Negotiated and structured a JV with a GMP manufacturer. Led IP strategy including patent filings, trademarks, and brand protection. Built the business plan, financial models, and investor data room. Managed transition from R&D to commercial readiness across legal, regulatory, manufacturing, and marketing.',
  },
  {
    period: '2023 — 2024',
    role: 'Associate Consultant II & I (19 months)',
    company: 'Putnam Associates',
    description: 'Strategy consultant serving Fortune 500 biopharma, biotech, and PE/VC clients. Demand studies feeding revenue forecast models. Go/no-go assessments covering reimbursement, clinical trial design, competitive landscape, and market size. Regulatory, market access, and reimbursement plans. Brand strategy for blockbuster products. Sales force strategy for gene therapies. Regulatory and distribution planning for COVID-19 vaccines.',
  },
  {
    period: '2023',
    role: 'Strategy Consultant (Pro Bono)',
    company: '180 Degrees Consulting',
    description: 'Marketing strategy consulting for a leading UK non-profit — consumer segmentation, ROI prediction, and go-to-market plan used to launch their app.',
  },
  {
    period: '2022',
    role: 'Business Strategy Intern',
    company: 'Multus Media (Clean Meat Biotech)',
    description: 'Designed and conducted market research for competitors, consumers, and trends. Findings communicated directly to the CEO, leading the company to modify its pipeline to address new markets.',
  },
  {
    period: 'Summer',
    role: 'Research Intern — Malaria Genetic Engineering Lab',
    company: 'Imperial College London (Gates Foundation funded)',
    description: 'Designed an approach to increase specificity when genetically editing mosquitoes. Constructed the design and quantified statistical significance vs. the previous approach. Collected, analysed, and presented data to peers and field experts. Published researcher — co-authored work on a novel enzyme (ACS Synthetic Biology).',
  },
]

const EDUCATION = [
  {
    degree: 'PGCE',
    institution: 'University of Cambridge',
    detail: 'Completed alongside DermaFlo to develop structured leadership and communication skills for early-stage company growth.',
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
          <div className="animate-fade-in-up">
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Hi, I'm</p>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animate-delay-100">
            James Millett
          </h1>
          <p className="text-xl sm:text-2xl text-text-light leading-relaxed mb-8 animate-fade-in-up animate-delay-200">
            I build things. Products, platforms, brands — from zero to live.
            <br className="hidden sm:block" />
            <span className="text-teal">Scientist</span> &middot; <span className="text-blue">Strategist</span> &middot; <span className="text-gold">Builder</span>
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
                I'm a London-based founder and builder with a background in life sciences and pharma strategy. Imperial College London and Cambridge trained, <a href="https://pubs.acs.org/doi/10.1021/acssynbio.4c00790" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">published researcher</a>, and former strategy consultant at Putnam Associates — where I served Fortune 500 biopharma and PE/VC clients.
              </p>
              <p>
                I co-founded a transdermal technology startup, negotiated a GMP manufacturing joint venture, led IP strategy through patent filings, and built investor data rooms that generated strong inbound interest.
              </p>
            </div>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                Now I build full-stack. Real-time news intelligence platforms, pharmaceutical data products, and consumer brands — from zero to live. I move fast and ship faster.
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
                <p className="text-text-light text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Published Research callout */}
          <div className="mt-8 bg-navy-card border border-teal/30 rounded-xl p-6">
            <h4 className="text-sm font-semibold text-teal mb-2">Published Research</h4>
            <p className="text-text-light text-sm leading-relaxed mb-3">
              Co-authored a paper on a novel enzyme published in ACS Synthetic Biology — one of the leading journals in the field.
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
            <a
              href="https://www.linkedin.com/in/jhmillett/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-text-light rounded-lg hover:border-text-light hover:text-white transition-all"
            >
              LinkedIn
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
