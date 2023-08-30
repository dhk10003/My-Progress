import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Router from './router/Router';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './auth/firebase';
import axios from 'axios';

function App() {
  // These are the states that will be used to manage the authentication state of the user
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [login , setLogin] = useState(false)

  //  this state is for movie data
  const [moviesData, setMoviesData] = useState([])

  //  This useEffect will check if the user is logged in or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
          setUser(user)
          setUserName(user.displayName)
          setLogin(true)
      } else {
          setUser({})
          setUserName("")
      }
  })
  }, [user]);

  //  This is the API key for TMDB
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

  //  This useEffect will fetch the movie data from TMDB
  useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`)
      .then(res => res.data.results)
      .then(data => setMoviesData(data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <AuthContext.Provider value={{user, setUser, userName, setUserName, login, setLogin, moviesData, setMoviesData}}> 
    <div className='bg-[#555555] min-h-screen max-h-[100%]'>
      <BrowserRouter>
      <Navbar />
      <Router />
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
