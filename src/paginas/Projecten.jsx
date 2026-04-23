import React from 'react'
import { SiLaravel, SiPhp, SiMysql, SiCplusplus, SiReact, SiTypescript, SiNodedotjs, SiExpress } from 'react-icons/si'
import dierenapp from '../assets/projecten/backend-dierenapp.jpg'
import cppGame from '../assets/projecten/C++game.png'
import reactProject from '../assets/projecten/React-project.jpg'
import nodeProject from '../assets/projecten/Nodeproject.jpg'
import './Projecten.scss'

const projecten = [
  {
    id: '01',
    titel: 'Node Project',
    afbeelding: nodeProject,
    alt: 'Screenshot van het Node project',
    beschrijving: [
      'Een webapplicatie gebouwd met Node.js, gericht op het testen van verschillende gebruikerservaringen. Het project onderzoekt hoe gebruikers omgaan met navigatiepatronen zoals een bottom-navigation.',
      'De applicatie is opgezet als een prototype om UX-patronen in de praktijk te vergelijken en te evalueren.',
    ],
    stack: [
      { naam: 'Node.js', icoon: SiNodedotjs, kleur: '#339933' },
      { naam: 'Express', icoon: SiExpress, kleur: '#404040' },
      { naam: 'TypeScript', icoon: SiTypescript, kleur: '#3178C6' },
    ],
  },
  {
    id: '02',
    titel: 'Backend Dierenapp',
    afbeelding: dierenapp,
    alt: 'Screenshot van de dieren backend applicatie',
    beschrijving: [
      'Een webapplicatie gebouwd met Laravel voor een dierenverzorging applicatie. Het project beheert dieren, eigenaren en afspraken met volledige CRUD-functionaliteit.',
      'Het project maakt gebruik van Eloquent ORM voor database-interacties en volgt de MVC-architectuur van Laravel met Blade-templates.',
    ],
    stack: [
      { naam: 'Laravel', icoon: SiLaravel, kleur: '#FF2D20' },
      { naam: 'PHP', icoon: SiPhp, kleur: '#777BB4' },
      { naam: 'MySQL', icoon: SiMysql, kleur: '#4479A1' },
    ],
  },
  {
    id: '03',
    titel: 'C++ Game',
    afbeelding: cppGame,
    alt: 'Screenshot van het C++ spel',
    beschrijving: [
      'Een 2D game gebouwd in C++ met eigen game-logica, beweging en collision detection.',
      'Dit project heb ik gebouwd om meer te leren over object georienteerd programmeren en game development.',
    ],
    stack: [
      { naam: 'C++', icoon: SiCplusplus, kleur: '#00599C' },
    ],
  },
  {
    id: '04',
    titel: 'React Project',
    afbeelding: reactProject,
    alt: 'Screenshot van het React project',
    beschrijving: [
      'Een frontend applicatie gebouwd met React, met herbruikbare componenten en een moderne responsieve interface.',
      'Het project bevat navigatiecomponenten zoals een bottom-navigation en richt zich op een goede gebruikerservaring op zowel desktop als mobiel.',
    ],
    stack: [
      { naam: 'React', icoon: SiReact, kleur: '#61DAFB' },
    ],
  },
]

function Projecten() {
  return (
    <main className="projecten">
      <div className="projecten__inhoud">
        <h1 className="projecten__titel">Mijn projecten</h1>
        <div className="projecten__lijst">
          {projecten.map((project, index) => (
            <article
              key={project.id}
              className={`project-kaart${index % 2 === 1 ? ' project-kaart--omgekeerd' : ''}`}
            >
              <div className="project-kaart__afbeelding-wrapper">
                <img
                  src={project.afbeelding}
                  alt={project.alt}
                  className="project-kaart__afbeelding"
                />
              </div>
              <div className="project-kaart__inhoud">
                <span className="project-kaart__nummer" aria-hidden="true">{project.id}</span>
                <h2 className="project-kaart__naam">{project.titel}</h2>
                <ul className="project-kaart__stack" aria-label="Gebruikte technologieën">
                  {project.stack.map(({ naam, icoon, kleur }) => (
                    <li key={naam} className="project-kaart__tag">
                      {React.createElement(icoon, { style: { color: kleur }, 'aria-hidden': 'true' })}
                      {naam}
                    </li>
                  ))}
                </ul>
                {project.beschrijving.map((alinea, i) => (
                  <p key={i} className="project-kaart__tekst">{alinea}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projecten
