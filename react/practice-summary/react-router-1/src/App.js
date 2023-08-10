import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';

// components:
import Home from './components/Home'
import Experience  from './components/Experience';
import About from './components/About';
import Product from './components/Product';

function App() {
  
  // useLocation has a property called pathname.
  // this returns the current path of the URL.
  
  // mock data: (pretend this is coming from a database)
  const products = [
    {
      id: 1,
      name: "Bluetooth Speaker",
      desc: "This is a bluetooth speaker",
      price: 20
    },
    {
      id: 2,
      name: "Laptop Computer",
      desc: "This is a laptop computer",
      price: 700
    },
    {
      id: 3,
      name: "Desktop Computer",
      desc: "This is a desktop computer",
      price: 500,
    },
    {
      id: 4,
      name: "Headphones",
      desc: "These are headphones",
      price: 50,
    },
    {
      id: 5,
      name: "Monitor",
      desc: "This is a monitor",
      price: 200,
    }
  ]

  // selected product:
  const [selectedProduct, setSelectedProduct] = useState()

  useEffect(() => {
    console.log(selectedProduct)
  }, [selectedProduct])

  const selectById = (id) => {
    setSelectedProduct(
      products.filter((item)=>item.id === id)[0]
    )
  }

  function logger(message){
    console.log(message);
  }

  const name="John Doe";

  return (
    <div className="App">
      <h1>This is outside of the router...</h1>
      <button onClick={()=>selectById(2)}>click me</button>
      <h1>{JSON.stringify(selectedProduct)}</h1>
      <Router>
        
        <h1>Consistent Component (inside the router)</h1>

        {/* Links: */}
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/About">About</Link>
        <br></br>
        <Link to="/Experience">Experience</Link>
        <br></br>
        <Link to="/products">Products</Link>
        <br></br>
        
        {/* using a variable as a parameter: */}
        {/* <Link to={`/product/${name}/5`}>Product using variable</Link>
        <br></br>
        <Link to="/product/whatever/300">Product 123</Link> */}
        

        {/* Routes: */}
        <Routes
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          
          <Route path="/" element={<Home name={name}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience/>} />

          {/* This only renders an H1 */}
          <Route path="/products" element={<Products products={products} setSelectedProduct={setSelectedProduct}/>} />

          {/* params: */}
          <Route path="/product/:id" element={<Product selectedProduct={selectedProduct} selectById={selectById}/> } />

          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
