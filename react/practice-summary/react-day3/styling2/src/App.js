import PersonComponent from "./PersonComponent"
import './App.css'

const App = ()=>{
  const people = []

  class Person{
    constructor(name, age, location, imgUrl){
      this.name = name
      this.age = age
      this.location = location
      this.imgUrl = imgUrl
    }
  }

  people.push(new Person("Chase", 35, "Davis, CA", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/1924px-Person_icon_BLACK-01.svg.png"))
  people.push(new Person("Said", 20,"Berlin, DE","https://image.gala.de/22072804/t/9n/v6/w1440/r1.5/-/david-tennant.jpg"))
  people.push(new Person("David", 27, "Ellicott City, MD", "https://images.pexels.com/photos/7258495/pexels-photo-7258495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"))
  people.push(new Person ("Monchaya",39,"Malden,MA", "https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&w=1000&q=80"))
  people.push(new Person('Umit' , 30 , 'Newtonville,MA', 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png'))

  console.log(people)
  
  return(
    <div id='main'>

      <h1>Clarusway FS-06 Class:</h1>
      <h2>Students:</h2>

      <div id="people">
      {/* Render people here: */}
      
      {/* loop through people and render a card for each person: */}
      {
      people.map((person, index)=>{
        return(
          // we need a key here because we are rendering a list of components
          // keys are used by react to keep track of which components are which
          <PersonComponent key={person.name} person={person} />
        )
      })}
      </div>
      
    </div>
  )
}

export default App