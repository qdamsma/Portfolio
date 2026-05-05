import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './App.scss'

const navigatie = [
  { label: 'Over mij', naar: '/over-mij' },
  { label: 'Projecten', naar: '/projecten' },
  { label: 'Contact', naar: '/contact' },
]

const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/quinten-damsma' },
  { label: 'GitHub', href: 'https://github.com/qdamsma' },
]

function App() {
  return (
    <>
      <header className="header">
        <NavLink to="/" className="header__logo">Quinten</NavLink>
        <nav aria-label="Hoofdnavigatie">
          <ul className="header__nav">
            {navigatie.map(({ label, naar }) => (
              <li key={naar}>
                <NavLink
                  to={naar}
                  className={({ isActive }) =>
                    'header__nav-link' + (isActive ? ' header__nav-link--actief' : '')
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <footer className="footer">
        <span className="footer__copyright">© 2026 Quinten Damsma</span>
        <ul className="footer__links" aria-label="Sociale links">
          {footerLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="footer__link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}

export default App
