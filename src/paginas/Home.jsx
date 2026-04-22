import { NavLink } from 'react-router-dom'
import foto from '../assets/quinten.jpg'
import './Home.scss'

const vaardigheden = ['React', 'Node.js', 'JavaScript', 'PHP', 'Symfony', 'SCSS']

function Home() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-naam">
        <img src={foto} alt="Foto van Quinten" className="hero__foto" />
        <div className="hero__tekst">
          <p className="hero__groet">Hallo, ik ben</p>
          <h1 id="hero-naam" className="hero__naam">Quinten Damsma</h1>
          <p className="hero__subtitel">Junior Developer</p>
          <p className="hero__bio">
            Full-stack developer, recent afgestudeerd aan de Hogeschool Leiden.
            Ervaring met React, Node.js, Symfony en WordPress via stages en freelancewerk.
          </p>
          <ul className="hero__vaardigheden" aria-label="Vaardigheden">
            {vaardigheden.map(v => <li key={v} className="hero__tag">{v}</li>)}
          </ul>
          <div className="hero__acties">
            <NavLink to="/projecten" className="hero__cta">Bekijk mijn projecten</NavLink>
            <NavLink to="/contact" className="hero__cta hero__cta--secundair">Neem contact op</NavLink>
          </div>
        </div>
      </section>
      <span className="hero__scroll" aria-hidden="true">
        <span className="material-icons">expand_more</span>
      </span>
    </main>
  )
}

export default Home
