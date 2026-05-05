import { useEffect } from 'react'
import './Contact.scss'

// E-mail gesplitst zodat scrapers het niet direct kunnen lezen
const emailGebruiker = 'qdamsma'
const emailDomein = 'gmail.com'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/quinten-damsma',
    icoon: 'person',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/qdamsma',
    icoon: 'code',
  },
]

function Contact() {
  useEffect(() => {
    document.title = 'Contact - Quinten Damsma'
    document.querySelector('link[rel="canonical"]').setAttribute('href', 'https://quintendamsma.nl/contact')
  }, [])

  const email = `${emailGebruiker}@${emailDomein}`

  return (
    <main className="contact">
      <div className="contact__inhoud">
        <div className="contact__tekst">
          <h1>Contact</h1>
          <p>Heb je een vraag of wil je kennismaken? Stuur me gerust een berichtje.</p>
        </div>

        <a href={`mailto:${email}`} className="contact__email">
          <span className="material-icons" aria-hidden="true">mail</span>
          {email}
        </a>

        <ul className="contact__links" aria-label="Sociale links">
          {links.map(({ label, href, icoon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="contact__link">
                <span className="material-icons" aria-hidden="true">{icoon}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Contact
