import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useState,useEffect } from "react";
import axios from "axios";


const Home = () => {

  // Base URL for axios:
  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"

  const [tutorials, setTutorials] = useState([])
  
  const getTutorials = async () => {
    try{
      // Get all tutorials from API:
      let {data} = await axios.get(BASE_URL)
      console.log(data)
      setTutorials(data)

    } catch (err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getTutorials()
  },[])

  return (
    <>
      <AddTutorial baseurl={BASE_URL} axios={axios} getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} baseurl = {BASE_URL} axios={axios}/>
    </>
  );
};

export default Home;
