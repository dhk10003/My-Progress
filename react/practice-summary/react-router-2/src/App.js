import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Home from './components/home/Home';
import Products from './components/products/Products'
import ProductDetail from './components/productDetail/ProductDetail';
import {useState, useEffect} from 'react';

function App() {

  const products = [
    {
      id: 1,
      title: "Smartphone XYZ",
      description: "A high-end smartphone with the latest features.",
      price: 699.99,
      imageSrc: "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14/carousel/blue/blue-1.png",
    },
    {
      id: 2,
      title: "Laptop ABC",
      description: "Powerful laptop for both work and entertainment.",
      price: 1299.99,
      imageSrc: "https://i.dell.com/sites/csimages/Banner_Imagery/all/dell-alienware-lt-franchise-cd-1920x1440-m18-m16-x16-x14r2-hero-desktop.png",
    },
    {
      id: 3,
      title: "Wireless Earbuds",
      description: "Premium wireless earbuds with noise-cancellation.",
      price: 149.99,
      imageSrc: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/pdp/product-carousel/tidal-blue/pc-fit-pro-tidal-blue-case-closed-floating.jpg",
    },
    {
      id: 4,
      title: "Smart TV 4K",
      description: "Ultra HD smart TV with built-in streaming apps.",
      price: 799.99,
      imageSrc: "https://i5.walmartimages.com/seo/TCL-32-Class-720P-HD-LED-Roku-Smart-TV-3-Series-32S331_0ee198a5-e8f2-4d92-9cc7-ce610dc2eb2e.eee8074ec77e7af0c9e2e2072b680d3a.jpeg",
    },
    {
      id: 5,
      title: "Gaming Console XYZ",
      description: "Next-gen gaming console for immersive gaming experiences.",
      price: 449.99,
      imageSrc: "https://s.yimg.com/uu/api/res/1.2/R8OF6NCmqERAOi08Cy.AZA--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/1fa5a901-1fee-11eb-b6fd-ecc1bfdbf55f.cf.jpg",
    },
    {
      id: 6,
      title: "Tablet DEF",
      description: "Sleek tablet for productivity and entertainment on the go.",
      price: 399.99,
      imageSrc: "https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg",
    },
    {
      id: 7,
      title: "Smart Watch ABC",
      description: "Smartwatch with health monitoring and customizable faces.",
      price: 249.99,
      imageSrc: "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg",
    },
    {
      id: 8,
      title: "Camera EFG",
      description: "High-resolution camera for stunning photos and videos.",
      price: 799.99,
      imageSrc: "https://reviewed-com-res.cloudinary.com/image/fetch/s--phGirgPm--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1670534473713/lumix-hero.jpeg",
    },
    {
      id: 9,
      title: "Wireless Speaker",
      description: "Portable wireless speaker with impressive sound quality.",
      price: 79.99,
      imageSrc: "https://m.media-amazon.com/images/I/71bbtb+xRUL.jpg",
    },
    {
      id: 10,
      title: "Headphones XYZ",
      description: "Over-ear headphones with advanced audio technology.",
      price: 199.99,
      imageSrc: "https://i5.walmartimages.com/asr/01790711-a293-4264-b295-79b42f16a44e.36ce8d383b78a71a962ef9b523005794.jpeg",
    },

  ]

  
  return (
    <Router>
    <div className="App">
      <Header/>
      
      {/* Routes here: */}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products productsList={products}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<ProductDetail productsList={products}/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;
