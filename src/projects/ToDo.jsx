

import { useState } from 'react';

export default function ToDo() {
   
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) ?? [])
  
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!title || !description || !priority) {
        alert("Please enter all the fields")
        return;
      }
      const newTodos = [...todos, {
        title,
        description,
        priority
      }]
      localStorage.setItem('todos', JSON.stringify(newTodos))
      setTodos(newTodos);
      setTitle("");
      setDescription("")
      setPriority("")
    } 
  
  
    const handleDelete = (e) => {
      console.log(e.target.parentElement)
      const newTodos = todos.filter((todo) => todo.title !== e.target.parentElement.id)
      setTodos(newTodos)
      console.log(newTodos)
      localStorage.setItem("todos", JSON.stringify(newTodos))
      console.log("localStorage updated")
    }
  
    const priorityArray = ["low", "medium", "high", "utmost importance"]
    
    return(
      <>
      <div className="livingroom-todo project-container">
        <h2>Todo</h2>
        <div>
          <h3>Left to do in livingroom</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"/>
            </label>
            <label>
              Description:
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                rows={10} 
                cols={40}/>
            </label>
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
        <h3>{todos.length > 0 ? "All TODOS:" : "No todos added yet" }</h3>
        {todos.length > 0 ? todos.map((todo, index) => {
          const{title, description, priority} = todo;
          return(
            <div id={title} key={index} className="todo">
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Priority: {priority}</p>
              <button onClick={(e) => handleDelete(e)}>Delete</button>
            </div>
          )
        }): null}
      </div>
      </>
    )
  }