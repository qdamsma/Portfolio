import React, { useEffect } from 'react'
import { SiLaravel, SiPhp, SiMysql, SiCplusplus, SiReact, SiTypescript, SiNodedotjs, SiExpress, SiFlutter, SiDart } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import flutterF1 from '../assets/projecten/flutterf1project.webp'
import dierenapp from '../assets/projecten/backend-dierenapp.webp'
import cppGame from '../assets/projecten/C++game.webp'
import reactProject from '../assets/projecten/React-project.webp'
import nodeProject from '../assets/projecten/Nodeproject.webp'
import javaQuizbot from '../assets/projecten/JavaQuizbot.webp'
import './Projecten.scss'

const projecten = [
  {
    id: '01',
    titel: 'Flutter F1 App',
    afbeelding: flutterF1,
    alt: 'Screenshot van de Flutter F1 app',
    github: 'https://github.com/qdamsma/flutter_f1_app',
    beschrijving: [
      'Een F1-app gebouwd in Flutter voor een schoolvak die lijkt op de officiële F1-app, maar met verbeteringen. Zo toont de beginpagina direct de aankomende races met detailpagina\'s, in plaats van nieuwskoppen.',
      'Het meest bijzondere onderdeel is de kampioenschapsimulator. Via berekeningen krijgen alle 20 coureurs en de teams gewogen punten op basis van het kampioenschap van dat jaar. Zo kan bijvoorbeeld Verstappen in een Haas even goed presteren als Ocon in een Red Bull.',
    ],
    stack: [
      { naam: 'Flutter', icoon: SiFlutter, kleur: '#02569B' },
      { naam: 'Dart', icoon: SiDart, kleur: '#0175C2' },
    ],
  },
  {
    id: '02',
    titel: 'Java Quizbot',
    afbeelding: javaQuizbot,
    alt: 'Screenshot van de Minecraft Quizbot',
    github: 'https://github.com/qdamsma/quizbot_mod',
    beschrijving: [
      'Een Minecraft-bot gebouwd in Java die naar spelers toe daalt. Bij interactie krijgt de speler een willekeurige quizvraag voorgeschoteld.',
      'Dit project was een creatieve manier om Java te oefenen door dit te combineren met een spel wat ik vaak speel.',
    ],
    stack: [
      { naam: 'Java', icoon: FaJava, kleur: '#ED8B00' },
    ],
  },
  {
    id: '03',
    titel: 'Node Project',
    afbeelding: nodeProject,
    alt: 'Screenshot van het Node project',
    github: 'https://github.com/qdamsma/Node.js',
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
    id: '04',
    titel: 'Laravel Backend Dierenapp',
    afbeelding: dierenapp,
    alt: 'Screenshot van de dieren backend applicatie',
    github: 'https://github.com/qdamsma/dieren-app',
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
    id: '05',
    titel: 'C++ Game',
    afbeelding: cppGame,
    alt: 'Screenshot van het C++ spel',
    github: 'https://github.com/qdamsma/F1GameCpp',
    beschrijving: [
      'Een 2D game gebouwd in C++ met eigen game-logica, beweging en collision detection.',
      'Dit project heb ik gebouwd om meer te leren over object georienteerd programmeren en game development.',
    ],
    stack: [
      { naam: 'C++', icoon: SiCplusplus, kleur: '#00599C' },
    ],
  },
  {
    id: '06',
    titel: 'React Project',
    afbeelding: reactProject,
    alt: 'Screenshot van het React project',
    github: 'https://github.com/qdamsma/woningzoeker',
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
  useEffect(() => { document.title = 'Projecten - Quinten Damsma' }, [])

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
                  loading={index === 0 ? 'eager' : 'lazy'}
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-kaart__github"
                  >
                    <span className="material-icons" aria-hidden="true">code</span>
                    Bekijk code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projecten
