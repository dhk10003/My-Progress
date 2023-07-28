import './App.css';
import { useState, useEffect } from 'react'
import { data } from './data'
import {debounce} from 'lodash'
import CounterComponent from './CounterComponent';

function App() {

  

  const [products, setProducts] = useState(data)

  // this is the state we are using to filter the products
  const [search, setSearch] = useState("")

  // this is now the state we are using to store the value of the input
  const [searchTerm, setSearchTerm] = useState("")

  const [itemsCount, setItemsCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const filtered = products.filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()))

  // Debouncing:
  // this is a timer that will be used to trigger the search after 1 second
  let debounceTimer;

  const handleSearch = (e)=>{
    // when the input is changed, we set the searchTerm state immediately
    const val = e.target.value
    setSearchTerm(val)

    // if the user types, we clear the timer and start a new one
    // clear timer
    clearTimeout(debounceTimer)
    // set new timer to trigger search after 1 second
    debounceTimer = setTimeout(()=>{
      // when the timer (runs out) is triggered, we set the search state
      setSearch(val)
    }, 1000)
  }

  // LODASH DEBOUNCE:
  // const handleSearchChange = debounce((value)=>{
  //   setSearch(value)
  // }, 1000)

  const handleIncrement = (id)=>{
    console.log("increment")

      const index = products.findIndex( objInProdArr => objInProdArr.id === id)

      const newData = [...products]

      newData[index].count ++
    
      setProducts(newData)
      setItemsCount((prev)=> prev+1)
      setTotalPrice((prev)=> prev + Number(newData[index].price))
  }

  const handleDecrement = (id)=>{
    console.log("decrement")
      const index = products.findIndex( objInProdArr => objInProdArr.id === id)
      const newData = [...products]

      if(newData[index].count > 0){
        newData[index].count --
        setProducts(newData)
        setItemsCount((prev)=> prev-1)
        setTotalPrice((prev)=> prev - Number(newData[index].price))
      }        
  }

  const handleRemove = (id)=>{
    console.log("remove")

    const newData = products.filter( item => item.id !== id)
    
    let count = 0
    let total = 0

    for(let product of newData){
      count += product.count
      total += product.count * product.price
    }

    setProducts(newData)
    setItemsCount(count)
    setTotalPrice(total)
  }

  // infinite loop problem state:
  const [counter, setCounter] = useState(0)

  // useEffect:
  // use effect is a hook that is used to run a function when the component is mounted
  // it can also be used to run a function when a state is changed
  useEffect(()=>{
    console.log("useEffect running!")
    // intentional infinite loop breaking at 100:
    if(counter<=100){
      setCounter((prev)=> prev+1)
      console.log(counter)
    }
    // here is the dependency array:
    // if anything in the dependency array changes, the useEffect will run again
   }, [searchTerm, counter])

  return (
    <div className="App">
      <CounterComponent />
      <div className="header">
        <div style={{ background: "teal", color: "white", padding: "10px" }}>
          Shopping cart
        </div>
        <div>
          {itemsCount} items you selected
          total price ${totalPrice}
        </div>
      </div>
      <div>
      <input 
        value={searchTerm} 
        onChange={handleSearch}
      />
      </div>
      <div className="items">
      { 
        filtered.map((item) => {
          return (
            <div className="product" key={item.id}>
              <div>
                <img src={item.imageURL} alt="" />
              </div>
              <div>
                <p>{item.price} $</p>
                <p> <span style={{ color: "red" }}>NEW</span> {item.title}</p>
                <h1>{item.count}</h1>
                <span onClick={()=>{handleIncrement(item.id)}} style={{ fontSize: "2rem", marginRight: "10px", cursor: "pointer" }}>+</span>
                <span onClick={()=>{handleDecrement(item.id)}} style={{ fontSize: "2rem", marginRight: "10px", cursor: "pointer" }}>-</span>
                <button onClick={()=>{handleRemove(item.id)}}>remove</button>
              </div>
            </div>
          )
        })
      }
      </div>

    </div>
  );
}

export default App;