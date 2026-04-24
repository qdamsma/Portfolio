import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NietGevonden() {
  useEffect(() => { document.title = 'Pagina niet gevonden - Quinten Damsma' }, [])

  return (
    <main style={{ textAlign: 'center', padding: '80px 24px' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 700, color: 'var(--accent)', margin: '0 0 8px' }}>404</h1>
      <p style={{ fontSize: 'var(--fs-h3)', color: 'var(--tekst-kop)', marginBottom: '24px' }}>Deze pagina bestaat niet.</p>
      <Link to="/" style={{ color: 'var(--accent)', fontWeight: 500 }}>← Terug naar home</Link>
    </main>
  )
}

export default NietGevonden
