
import './App.css'
import ToDo from './projects/ToDo.jsx'
import DogSearch from './projects/DogSearch.jsx'
import { useState } from 'react';


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
    <label>Antall mobiler i din bedrift
    <input type="range" min="1" onChange={(e)=> setValue(e.target.value) }max="1000" value={value} class="slider" id="myRange"/>
    </label>
    <fieldset>
      <legend>Gjennomsnittlig levetid per telefon</legend>
      <label> 18mnd
        <input name="average-age" onChange={(e) => setAge(e.target.value)} value={18} type="radio" />
      </label>
      <label> 24mnd
        <input name="average-age" onChange={(e) => setAge(e.target.value)} value={24} type="radio" />
      </label>
      <label> 30mnd
        <input name="average-age" onChange={(e) => setAge(e.target.value)} value={30} type="radio" />
      </label>
    </fieldset>
    <button type="submit">Se hvor mye du kan spare</button>
    </form>
    {isSubmitted && <span>Så mange kroner sparer du: {value * age * 42}</span>}
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