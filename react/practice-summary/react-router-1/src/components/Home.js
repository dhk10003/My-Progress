import { useNavigate, useLocation } from "react-router-dom"
import {useEffect} from 'react'

const Home = ({name}) => {
    const {pathname} = useLocation()
    // Using UseNavigate:
    const navigate = useNavigate()

    // waiting 2 seconds before redirecting:
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/about')
        }, 5000)
    },[])

    const handleClick = () => {
        navigate('/about')
    }
    
    const location = () => {
        console.log(pathname)
    }

  return (
    <div>
        <h1>Hello {name}</h1>
        <button onClick={handleClick}>About me!</button>
        <button onClick={location}>useLocation hook.</button>
    </div>
  )
}

export default Home