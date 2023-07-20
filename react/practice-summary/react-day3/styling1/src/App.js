import logo from './logo.svg';

// importing CSS file:
import './App.scss';

import Styledh1 from './component/Styledh1';

// css in js uses camelCase

// downsides to inline styling:
// 1. can't use pseudo selectors
// 2. can't use media queries
// 3. can't use sass/less
// 4. can't use @import
// 5. can't use keyframes
// 6. can't use hover
// 7. can't use :before or :after
// 8. can't use @media
// 9. hard to maintain or update
// 10. can't use full power of CSS

const mainDivStyle = {
  backgroundColor: 'white',
  color: 'blue',
  fontSize: '20px',
  textAlign:'center'
}

// nested objects:
const styles = {
  div: { backgroundColor: "blue", color: "white" },
  h1: { fontSize: "20px" },
  p: { textAlign: "center" }
}

function App() {

  const content = "Hello World"
  
  return (
    <div className="App" style={styles.div} id="mainContainer">
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
      </header>
{/* JSX COMMENTS */}
{/*
  styledh1({
    content: "Hello World",
    condition: true/false
  }) 
*/}

      <Styledh1 content={content} condition={true}/>
    </div>
  );
}

export default App;