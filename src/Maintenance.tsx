const GITHUB_URL = 'https://github.com/JamesMildog'
const LINKEDIN_URL = 'https://www.linkedin.com/in/jhmillett/'

export default function Maintenance() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAF7F2',
        color: '#1A1A1A',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(2.25rem, 6vw, 3.5rem)',
          fontWeight: 600,
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        James Millett
      </h1>

      <p
        style={{
          fontFamily: '"Inter", system-ui, sans-serif',
          marginTop: '1.25rem',
          marginBottom: 0,
          color: '#6B6B6B',
          fontSize: '1.05rem',
          maxWidth: '32rem',
          lineHeight: 1.6,
        }}
      >
        This site is getting a refresh — come back soon.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#FAF7F2',
            background: '#C84B31',
            padding: '0.7rem 1.4rem',
            borderRadius: '9999px',
            textDecoration: 'none',
          }}
        >
          GitHub
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 500,
            color: '#1A1A1A',
            background: 'transparent',
            padding: '0.7rem 1.4rem',
            borderRadius: '9999px',
            border: '1px solid #1A1A1A',
            textDecoration: 'none',
          }}
        >
          LinkedIn
        </a>
      </div>

      <p
        style={{
          fontFamily: '"Inter", system-ui, sans-serif',
          marginTop: '1.5rem',
          color: '#A3A3A3',
          fontSize: '0.85rem',
        }}
      >
        Projects, writing and links live on GitHub.
      </p>
    </div>
  )
}
