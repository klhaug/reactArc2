
import './App.css'
import { useState, useEffect, useRef } from 'react';

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

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.airtable.com/v0/appFYEEd0MLsCTmKD/tblILwtV3RvWsiTyQ?`, {
        method: "GET",
          headers: {
            "Bearer": import.meta.env.TEST_DB_KEY 
            }
          })

      const data = await response.json()
      console.log(data)
    }
    fetchData();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, priority)
  } 

  const priorityArray = ["low", "medium", "high", "utmost importance"]
  return(
    <>
    <h2>Testing</h2>
    <div className="livingroom-todo">
      <div>
        <h3>Left to do in livingroom</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
          </label><br/>
          <label>
            Description:
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              rows={10} 
              cols={40}/>
          </label><br/>
          <label>
            Priority:
            <select 
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              >
              <option 
                value="">
                  Select one:
                </option>
              {priorityArray.map(option => <option key={option}>{option}</option>)}
            </select>
          </label>
          <button type="submit">Add todo</button>
        </form>
      </div>
      <div>
        <h3>Form preview</h3>
        <span>Title: {title}</span><br/><hr/>
        <span>Description: {description}</span><br/>
        <span>Priority: {priority}</span>
      </div>
    </div>
    </>
  )
}

function RightSideArchive(){
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
  
  return(
    <>
    <h2>Archive</h2>
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
      {query !== "" && dogs.length === 0 ? <Loading /> : null}
      </>
  )
}


function Loading() {
  return <h2>🌀 Loading...</h2>;
}
