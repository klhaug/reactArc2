
import './App.css'
import ToDo from './projects/ToDo.jsx'
import DogSearch from './projects/DogSearch.jsx'
import { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';



function App() {
  return (
    <>
      <header>
        <h1>A page dedicated for practise. For repitition. For screwing up.</h1>
      </header>
      <main>
        <section>
          <LeftSideTesting id="left-side" />
        </section>
        <section>
          <RightSideArchive id="right-side"  />
        </section>
      </main>
    </>
  )
}

export default App


function LeftSideTesting(){
  const [value, setValue] = useState(500)
  const [age, setAge] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
  }
  return(
    
    <>
    <h2>Testing</h2>
    <span>{value}</span><br/>
    <span>{age}</span>
    <form onSubmit={handleSubmit}>
    <CircularSlider 
      label="Antall telefoner"
      min={1}
      max={1000}
      trackSize={24}
      progressSize={24}
      knobSize={48}
      onChange={value => setValue(value)} />
    <fieldset className="average-life">
      <legend>Gjennomsnittlig levetid per telefon</legend>
        <input id="18" name="average-age" onChange={(e) => setAge(e.target.value)} value={18} type="radio" />
        <label htmlFor="18"> 18mnd</label>
    
        <input id="24" name="average-age" onChange={(e) => setAge(e.target.value)} value={24} type="radio" />
        <label htmlFor="24"> 24mnd</label>

        <input id="30" name="average-age" onChange={(e) => setAge(e.target.value)} value={30} type="radio" />
        <label htmlFor="30">30mnd</label>
    </fieldset>
    <button type="submit">Se hvor mye du kan spare</button>
    </form>
    {isSubmitted && 
      <div>
        <button>Per år</button>
        <button>Levetid</button>
        <span>Så mange kroner sparer du: {value * age * 42},-</span>
      </div>
      }
    <div className="details">
    <fieldset className="average-life">
      <legend>Gjennomsnittlig levetid per telefon</legend>
        <input id="18" name="average-age" onChange={(e) => setAge(e.target.value)} value={18} type="radio" />
        <label htmlFor="18"> 18mnd</label>
    
        <input id="24" name="average-age" onChange={(e) => setAge(e.target.value)} value={24} type="radio" />
        <label htmlFor="24"> 24mnd</label>

        <input id="30" name="average-age" onChange={(e) => setAge(e.target.value)} value={30} type="radio" />
        <label htmlFor="30">30mnd</label>
    </fieldset>
      <label htmlFor="">Gjennomsnittlig pris pr. telefon
        <input type="range" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        <input type="number" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        </label>
      <label htmlFor="">Gjennomsnittlig CO2e avtrykk pr mobiltelefon:
        <input type="range" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        <input type="number" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        </label>
      <label htmlFor="">Gjennomsnittlig pris pr refurbished mobiltelefon:
        <input type="range" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        <input type="number" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        </label>
      <label htmlFor="">Gjennomsnittlig CO2e avtrykk pr refurbished mobiltelefon:
        <input type="range" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        <input type="number" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
        </label>
    </div>
    </>
  )

}

function RightSideArchive(){
  return(
  <>
   <h2>Archive</h2>
    <DogSearch/>
    <ToDo />
  </>
  )
}