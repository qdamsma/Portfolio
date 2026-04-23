import { NavLink, Outlet } from 'react-router-dom'
import './App.scss'

const navigatie = [
  { label: 'Over mij', naar: '/over-mij' },
  { label: 'Projecten', naar: '/projecten' },
  { label: 'Contact', naar: '/contact' },
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
      <Outlet />
    </>
  )
}

export default App
