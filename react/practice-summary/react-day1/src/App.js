import logo from './logo.svg';
import './App.css';
import H1 from './H1'
import { useState } from 'react';

function App() {

  const [names, setNames] = useState([])
  const [newName, setNewName] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setNames([...names, newName])
    setNewName("")
  }

  console.log("Javascript here")

  // JSX is a combination of HTML and Javascript
  // JSX is converted to Javascript by Babel
  // JSX is not required to use React, but it is recommended
  // JSX is not HTML, but it looks like HTML
  // JSX is not Javascript, but it looks like Javascript

  // once we are inside of the return statement of a component, we are writing JSX.
  return (
    // JSX here:

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
          />

          <input type="submit" value={"Add Name"} />
        </form>

        {/* render an H1 component for each name in the names array: */}
        {
          // a key is required for each element in a list
          // this is so react can keep track of which elements have changed
          names.map((name, index) => <H1 key={name} name={name} />)
        }

      </header>
    </div>
  );
}

export default App;
