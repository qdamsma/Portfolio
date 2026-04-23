import SlipperigePad from './SlipperigePad'
import level1 from '../puzzels/slipperigeTrip1.js'
import level2 from '../puzzels/slipperigeTrip2.js'
import laytonFoto from '../assets/layton.png'
import './PuzzelsSectie.scss'

function PuzzelsSectie() {
  return (
    <section className="puzzels-sectie" aria-labelledby="puzzels-titel">
      <header className="puzzels-sectie__header">
        <h2 id="puzzels-titel" className="puzzels-sectie__titel">Puzzels</h2>
        <p className="puzzels-sectie__intro">Vanaf jongs af aan hou ik van puzzels. Eén van mijn favoriete spellen op de Nintendo DS was Professor Layton, een avonturenspel met honderden puzzels. Hieronder heb ik een paar puzzels nagemaakt in diezelfde stijl. Kan jij ze oplossen?</p>
      </header>
      <ol className="puzzels-sectie__rij" aria-label="Puzzeloverzicht">
        <li>
          <article className="puzzel-kaart" aria-labelledby="puzzel-1-titel">
            <h3 id="puzzel-1-titel" className="puzzel-kaart__titel">Glibberig Pad 1</h3>
            <div className="puzzel-kaart__inhoud">
              <SlipperigePad grid={level1} />
            </div>
          </article>
        </li>
        <li>
          <article className="puzzel-kaart" aria-labelledby="puzzel-2-titel">
            <h3 id="puzzel-2-titel" className="puzzel-kaart__titel">Glibberig Pad 2</h3>
            <div className="puzzel-kaart__inhoud">
              <SlipperigePad grid={level2} />
            </div>
          </article>
        </li>
      </ol>
      <img src={laytonFoto} alt="Professor Layton logo" className="puzzels-sectie__layton" />
    </section>
  )
}

export default PuzzelsSectie
