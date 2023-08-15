import './App.css';
import Button from "./components/Button";
import { useState } from 'react';
import H1Umit from './components/H1Umit';
import DavidBtn from './components/DavidBtn';
import Button2 from './components/Button2';
import P from './components/P'
import IsaacsDiv from './components/IsaacsDiv'

// global style:
import GlobalStyle from './components/GlobalStyle';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [davidClicked, setDavidClicked] = useState(false);
  const [show, setShow] = useState(true);

  // JS comment
  console.log("testing 123")


  return (
    // JS comment
    <div className="App">
      {/* global-style: */}
      
      <GlobalStyle />
      {/* JSX Comment*/}

      {
        console.log("testing 123")
      }
      
      <Button onClick={() => setDarkMode(!darkMode)} darkMode={darkMode}>{darkMode? "Light Mode":"Dark Mode"}</Button>
      <DavidBtn onClick={() => setDavidClicked(!davidClicked)} clicked={davidClicked}>{davidClicked ? "Clicked!" : "Click Me!"}</DavidBtn>
      <H1Umit  darkMode={darkMode}>{darkMode?'Umit Mester' : 'Boston'} </H1Umit>
      <P darkMode={darkMode}>This is the first styled-components</P>
      <Button2 danger={show} onClick={()=> setShow(!show)} >  { show ? "Saids Danger Button" : "No Danger"} </Button2>
      <IsaacsDiv darkMode={darkMode} />
    </div>
  );
}

export default App;