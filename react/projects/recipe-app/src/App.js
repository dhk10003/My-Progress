import "./App.scss";
import { BrowserRouter as Router} from "react-router-dom";
import { useState } from "react";
import AppRouter from "./components/router/AppRouter";
import Navbar from "./components/navbar/Navbar";
import DetailsContext from "./pages/details/DetailsContext";

function App() {

  // state for details page
  const [details, setDetails] = useState({});

  return (
  <Router>
    <div className="App">
      <DetailsContext.Provider value={{details, setDetails}}>
      <Navbar />
      <AppRouter />
      </DetailsContext.Provider>
    </div>
  </Router>

)}

export default App
