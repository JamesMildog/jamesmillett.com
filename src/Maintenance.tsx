export default function Maintenance() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#faf7f2',
        color: '#1a1a1a',
        fontFamily: 'Georgia, "Times New Roman", serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 600, margin: 0 }}>James Millett</h1>
      <p style={{ marginTop: '1rem', color: '#6b6b6b', fontFamily: 'system-ui, sans-serif', fontSize: '0.95rem' }}>
        Site temporarily unavailable — back soon.
      </p>
    </div>
  )
}
