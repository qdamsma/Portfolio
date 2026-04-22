import { NavLink } from 'react-router-dom'
import foto from '../assets/quinten.jpg'
import './Home.scss'
import { SiReact, SiJavascript, SiHtml5, SiSass, SiNodedotjs, SiPhp, SiSymfony, SiLaravel, SiPython, SiGit, SiGraphql, SiFigma, SiMongodb, SiMysql, SiTypescript, SiCplusplus, SiPostman, SiWordpress, SiDocker } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const vaardigheden = ['React', 'Node.js', 'JavaScript', 'PHP', 'SCSS']

const techstack = [
  {
    id: 1,
    titel: 'Frontend',
    icon: 'devices',
    skills: [
      { naam: 'React', icoon: SiReact },
      { naam: 'JavaScript', icoon: SiJavascript },
      { naam: 'TypeScript', icoon: SiTypescript },
      { naam: 'HTML', icoon: SiHtml5 },
      { naam: 'SCSS', icoon: SiSass },
    ],
  },
  {
    id: 2,
    titel: 'Backend',
    icon: 'dns',
    skills: [
      { naam: 'Node.js', icoon: SiNodedotjs },
      { naam: 'PHP', icoon: SiPhp },
      { naam: 'Symfony', icoon: SiSymfony },
      { naam: 'Laravel', icoon: SiLaravel },
      { naam: 'SQL', icoon: SiMysql },
      { naam: 'MongoDB', icoon: SiMongodb },
      { naam: 'GraphQL', icoon: SiGraphql },
    ],
  },
  {
    id: 3,
    titel: 'Overige talen',
    icon: 'school',
    skills: [
      { naam: 'Java', icoon: FaJava },
      { naam: 'Python', icoon: SiPython },
      { naam: 'C++', icoon: SiCplusplus },
    ],
  },
  {
    id: 4,
    titel: 'Tools',
    icon: 'build',
    skills: [
      { naam: 'Git', icoon: SiGit },
      { naam: 'Figma', icoon: SiFigma },
      { naam: 'Postman', icoon: SiPostman },
      { naam: 'Docker', icoon: SiDocker },
      { naam: 'WordPress', icoon: SiWordpress },
      { naam: 'VS Code', icoon: VscVscode },
    ],
  },
]

function Home() {
  return (
    <main className="home">
      <div className="home__scherm">
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
      </div>

      <section className="techstack" aria-labelledby="techstack-titel">
        <h2 id="techstack-titel" className="techstack__titel">Mijn techstack</h2>
        <ol className="techstack__rij" aria-label="Techstackoverzicht">
          {techstack.map(({ id, titel, icon, skills }) => (
            <li key={id}>
              <article className="techstack__kaart" aria-labelledby={`tech-${id}`}>
                <div className="techstack__kaart-header">
                  <span className="material-icons techstack__icon" aria-hidden="true">{icon}</span>
                  <h3 id={`tech-${id}`} className="techstack__kaart-titel">{titel}</h3>
                </div>
                <ul className="techstack__skills" aria-label={`${titel} vaardigheden`}>
                  {skills.map(({ naam, icoon }) => {
                    const Icoon = icoon
                    return (
                      <li key={naam} className="techstack__skill">
                        {Icoon ? <Icoon aria-hidden="true" /> : <span className="techstack__skill-placeholder" aria-hidden="true" />}
                        <span>{naam}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}

export default Home
