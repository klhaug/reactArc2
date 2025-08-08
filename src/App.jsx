
import './App.css'
import { useState, useEffect, useRef } from 'react';

function App() {
const [query, setQuery] = useState("")
const [dogs, setDogs] = useState([]);
const inputRef = useRef(null)



useEffect(() => {
  const myTimeout = setTimeout(() => {
    async function fetchDogData(){
      try{
        console.log("its working", query)
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/search/?q=${query}`, {
        method: "GET",
          headers: {
            "x-api-key": import.meta.env.DOG_API_KEY
            }
          })
    
        const data = await response.json();
        console.log(data)
        setDogs(data)
        }
        catch(error){
          console.error("Failed fetching dogs", error)
      } 
      }
      fetchDogData()

      }, 200)
    

    return () => {
      clearTimeout(myTimeout)
    }
},[query])


const handleSearch = (e) => {
  setQuery(e.target.value)
}

const handleOnClick = () => {
  setQuery("")
  inputRef.current.focus()
  inputRef.current.value = ""
}


  return (
    <>
      <h1>A page dedicated for practise. For repitition. For screwing up.</h1>
      <label htmlFor="search">Søk etter hunder</label><br/>
      <input ref={inputRef} id="search" onChange={handleSearch} type="search"/>
      <p>Your search: {query}</p>
      <button onClick={handleOnClick}>Click me to focus the text input and clear the query!</button>
      {dogs.length > 0 ? dogs.map((dog) => 
      <div key={dog.id}>
        <h2>{dog.name}</h2>
        <p>Bred for {dog.bred_for}</p>
      </div>
        
        ) : null }

    </>
  )
}

export default App
