import React, { useState } from 'react';
import './App.css';

function App() {

  // todos is a variable, setTodos is a function
  const [todos, setTodos] = useState([]);
  const [editableTodo, setEditableTodo] = useState();

  const handleChange = (event) => {
    setEditableTodo(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log(editableTodo)
    // setting todos to the old list of todos plus editableTodo
    setTodos([...todos, editableTodo])
    // stop submit form from reloading the page
    event.preventDefault();
  }

  const handleDelete = (todo) => {
    console.log('clicked delete', todo)
    const newArray = todos.filter(item => item !== todo)
    setTodos(newArray)
  }

  return (
    <div className="App">
      <div>
        {todos.map(todo => {
            return (
              <p key={todo}>
                <button onClick={() => handleDelete(todo)}>x</button>
                {todo}
              </p>
            )
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          New todo: 
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="pew pew" />
      </form>
    </div>
  );
}

export default App;
