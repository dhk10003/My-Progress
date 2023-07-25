
import './App.css';
import {useState} from "react"
import Carousel from './Components/Carousel/Carousel';

// images:
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';
import image4 from './assets/image-4.jpg';
import image5 from './assets/image-5.jpg';
import image6 from './assets/image-6.jpg';

const data = [image1, image2, image3, image4, image5, image6]


function App() {

  // state:
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(data[index])

  // functions to change image:

  // next image:
  const next = () => {
    if(data.length-1 > index){
      // increase index:
      setIndex((prevIndex) => prevIndex + 1)
      setImage(data[index])
    }else{
      setIndex(0)
      setImage(data[index])
    }
  }

  // previous image:
  const previous = () => {
    if(index > 0 ) {
      setIndex((prevIndex) => prevIndex - 1)
      setImage(data[index])
    }
    else{
      setIndex(data.length-1)
      setImage(data[index])
    }
  }

  return (
    <div className="App">
      {/* conditional rendering: */}
      { index > 1 ? <h1>Carousel</h1> : null}
      
      <img alt={image} src={image} className="BackImage"/>
      <Carousel image={image} next={next} previous={previous}/>
    </div>
  );
}

export default App;
