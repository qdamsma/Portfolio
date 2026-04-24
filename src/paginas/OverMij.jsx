import { useEffect } from 'react'
import quinten2 from '../assets/overmij/Quinten2.webp'
import formule1 from '../assets/overmij/formule1.webp'
import wenen from '../assets/overmij/Wenen(reizen).webp'
import PuzzelsSectie from '../components/PuzzelsSectie'
import './OverMij.scss'

function OverMij() {
  useEffect(() => { document.title = 'Over mij - Quinten Damsma' }, [])

  return (
    <main className="over-mij">
      <div className="over-mij__inhoud">
        <section className="over-mij__sectie over-mij__sectie--bg" aria-labelledby="over-mij-titel">
          <div className="over-mij__tekst">
            <h1 id="over-mij-titel">Meer over mij</h1>
            <p>Hoi! Ik ben Quinten Damsma, een Full-stack Developer uit Nederland. Afgestudeerd in 2026 aan de Hogeschool Leiden, waar ik HBO-ICT heb gestudeerd.</p>
            <p>Ik ben 21 jaar en ik kom uit Sassenheim. Ik ben iemand die veel hobbies onderzoekt maar mijn grootste hobbies zijn sporten als tennis, formule 1 en voetbal. Daarnaast hou ik ook veel van reizen en heb ik al een groot deel van de wereld gezien. </p>
          </div>
          <div className="over-mij__foto-wrapper">
            <img src={quinten2} alt="Quinten Damsma" className="over-mij__foto over-mij__foto--quinten" />
          </div>
        </section>

        <section className="over-mij__sectie over-mij__sectie--groen over-mij__sectie--omgekeerd" aria-labelledby="f1-titel">
          <div className="over-mij__foto-wrapper">
            <img src={formule1} alt="Formule 1 grand prix" className="over-mij__foto over-mij__foto--f1" />
          </div>
          <div className="over-mij__tekst">
            <h2 id="f1-titel">Sport</h2>
            <h3>Formule 1, tennis, voetbal en meer</h3>
            <p>Sinds 2017 volg ik bijna elke race van de Formule 1. Hoewel ik ben gaan kijken door Max Verstappen, heb ik geen uitgesproken voorkeur voor een team. Ik ben inmiddels meerdere keren live geweest, onder andere bij de races in Zandvoort (2023), Hongarije (2023) en Oostenrijk (2021).</p>
            <p>Naast de Formule 1 volg ik ook tennis en voetbal, en zijn de Olympische Spelen voor mij ook altijd een hoogtepunt.</p>
          </div>
        </section>

        <section className="over-mij__sectie over-mij__sectie--bg" aria-labelledby="reizen-titel">
          <div className="over-mij__tekst">
            <h2 id="reizen-titel">Reizen</h2>
            <p>Reizen is een van mijn favoriete dingen om te doen. Ik hou ervan om nieuwe plekken en culturen te ontdekken en sinds kort doe ik dat ook op eigen houtje. Zo reisde ik solo naar Wenen en Praag, twee steden waar ik enorm van heb genoten.</p>
            <p>Mijn absolute favoriete reis tot nu toe was Japan. Een land dat werkelijk nergens anders op lijkt en dat ik met geen enkele andere bestemming kan vergelijken.</p>
          </div>
          <div className="over-mij__foto-wrapper">
            <img src={wenen} alt="Wenen bij avond" className="over-mij__foto over-mij__foto--wenen" />
          </div>
        </section>
      </div>

      <PuzzelsSectie />
    </main>
  )
}

export default OverMij
