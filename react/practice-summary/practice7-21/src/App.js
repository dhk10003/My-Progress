import './App.scss';
import Counter from './components/Counter';
import People from "./components/People";

function App() {

  // This title is passed into People as a prop, then passed into PeopleForm as a prop, then rendered in PeopleForm as a prop
  const title = "PROP DRILLING LOL"

  return (
    <div className="App">
      <Counter />
      <hr/>
      <People title = {title}/>
    </div>
  );
}

export default App;
