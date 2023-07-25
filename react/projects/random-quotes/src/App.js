import Card from './components/Card/Card';
import Quote from './components/Quote/Quote';
import {useState} from "react"
import './App.css';
import quotes from "./data.js"
import Button from './components/Button/Button';

function App() {

  console.log(quotes)

  // state:
  const [quote, setQuote] = useState(quotes[0])
  
  // function to generate a random quote:
  const randomQuote = ()=>{
    // generate a random number between 0 and the length of the quotes array minus 1
    const max = quotes.length
    const randomNum = Math.floor(Math.random()*max)
    console.log(randomNum)
    // we will use this number to select a random quote from the quotes array
    // then, we need to set the quote state to the random quote of the index we just created
    setQuote(quotes[randomNum])
  }
  

  return (
    <div className="App">
			<Card>
        <Quote quote={ quote} />
      </Card>
      <Button onClick={ randomQuote} />
		</div>
  );
}

export default App;
