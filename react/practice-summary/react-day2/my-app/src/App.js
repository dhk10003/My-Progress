import './App.css'
import Intro from './Components/Intro'
import NavBar from './Components/NavBar'
import Users from './Components/Users'
// import ClassExample from './Components/ClassExample'

const App = () => {
  // const header = 'ReactJS Lesson'
  // const numberOfStudents = 30
  // const numberOfMentors = 8
  // let bgCol = 'red'

  return (
    <>
      <NavBar />
      {
        // remember to add NavBar only to pages other than home - later //
      }
      <Intro username="Paul" meal="dinner" />
      <Users />
    </>
  )
}

export default App
