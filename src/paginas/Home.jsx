import React from 'react'
import { NavLink } from 'react-router-dom'
import foto from '../assets/quinten.jpg'
import './Home.scss'
import { SiReact, SiJavascript, SiHtml5, SiSass, SiNodedotjs, SiPhp, SiSymfony, SiLaravel, SiPython, SiGit, SiGraphql, SiFigma, SiMongodb, SiMysql, SiTypescript, SiCplusplus, SiPostman, SiWordpress, SiDocker } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'

const vaardigheden = [
  { naam: 'React', icoon: SiReact, kleur: '#61DAFB' },
  { naam: 'Node.js', icoon: SiNodedotjs, kleur: '#339933' },
  { naam: 'JavaScript', icoon: SiJavascript, kleur: '#F7DF1E' },
  { naam: 'PHP', icoon: SiPhp, kleur: '#777BB4' },
  { naam: 'SCSS', icoon: SiSass, kleur: '#CC6699' },
]

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
        <div className="hero__tekst">
          <h1 id="hero-naam" className="hero__naam">
            <span className="hero__naam--donker">Quinten </span>
            <span className="hero__naam--groen">Damsma</span>
          </h1>
          <p className="hero__subtitel">Junior Full-stack Developer</p>
          <p className="hero__bio">
            Recent afgestudeerd aan de Hogeschool Leiden. Ik bouw webapps met React, Node.js en WordPress – altijd met oog voor gebruiksvriendelijkheid en performance.
          </p>
          <ul className="hero__vaardigheden" aria-label="Vaardigheden">
            {vaardigheden.map(({ naam, icoon, kleur }) => (
              <li key={naam} className="hero__tag">
                {React.createElement(icoon, { style: { color: kleur }, 'aria-hidden': 'true' })}
                {naam}
              </li>
            ))}
          </ul>
          <div className="hero__acties">
            <NavLink to="/projecten" className="hero__cta">Bekijk mijn projecten</NavLink>
            <NavLink to="/contact" className="hero__cta hero__cta--secundair">Neem contact op</NavLink>
          </div>
        </div>
        <div className="hero__foto-wrapper">
          <img src={foto} alt="Foto van Quinten" className="hero__foto" />
        </div>
      </section>
      <span className="hero__scroll" aria-hidden="true">
        <span className="material-icons">expand_more</span>
        <span className="hero__scroll-tekst">Scroll verder</span>
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
                  {skills.map(({ naam, icoon }) => (
                    <li key={naam} className="techstack__skill">
                      {icoon
                        ? React.createElement(icoon, { 'aria-hidden': 'true' })
                        : <span className="techstack__skill-placeholder" aria-hidden="true" />
                      }
                      <span>{naam}</span>
                    </li>
                  ))}
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
