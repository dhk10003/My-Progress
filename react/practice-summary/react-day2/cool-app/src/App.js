import './App.css'
import EmployeeList from './Components/EmployeeList'
import EmployeePage from './Components/EmployeePage'
// import HomePage from './Components/HomePage'

const App = () => {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <EmployeePage />
      <EmployeeList />
    </div>
  )
}

export default App
