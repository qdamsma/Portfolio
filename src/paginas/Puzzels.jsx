import SlipperigePad from '../components/SlipperigePad'
import level1 from '../puzzels/slipperigeTrip1.js'
import level2 from '../puzzels/slipperigeTrip2.js'

function Puzzels() {
  return (
    <main>
      <h1>Puzzels</h1>
      <p>Kleine puzzels geïnspireerd op Professor Layton.</p>
      <section>
        <h2>Glibberig Pad 1</h2>
        <SlipperigePad grid={level1} />
      </section>
      <section>
        <h2>Glibberig Pad 2</h2>
        <SlipperigePad grid={level2} />
      </section>
    </main>
  )
}

export default Puzzels
