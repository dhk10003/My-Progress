import ShowUsers from './pages/ShowUsers'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <div className="App">
      <h1>Context API Example</h1>
      <UserContextProvider>
        <ShowUsers />
      </UserContextProvider>
    </div>
  )
}

export default App
