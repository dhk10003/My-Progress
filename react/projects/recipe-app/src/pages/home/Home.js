import Header from "../../components/header/Header";
import Form from "../../components/header/Form";
import RecipeCard from "./RecipeCard";
import { HomeContainer } from "./style";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  // ----------------------------- Input and Select Fields -----------------------------
  // state to store the value of the input field
  const [q, setQ] = useState("");

  // function to handle the change of the input field
  const inputChangeHandler = (e) => {
    setQ(e.target.value);
  };

  // state to store the value of the select field and set the default value to breakfast because it is the first option
  const [mealType, setMealType] = useState("breakfast");

  // function to handle the change of the select field
  const selectChangeHandler = (e) => {
    setMealType(e.target.value);
  };

  //   ----------------------------- Submit and API -----------------------------
  //  state to store the data from the API
  const [recipeData, setRecipeData] = useState([]);

  // sumbit function to get the data from the form and pass it to the API using axios
  const submitHandler = (e) => {
    e.preventDefault();
    // const APP_ID = "fb0ce18d";
    // const APP_KEY = "b87e8290bab3e3ca26dc4c892345ec04";
    const APP_ID = process.env.REACT_APP_ID;
    const APP_KEY = process.env.REACT_APP_KEY;
    axios
      .get(
        `https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
      )
      .then((res) => res.data)
      .then((data) => setRecipeData(data.hits))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <HomeContainer>
        <Header />
        <Form
          q={q}
          mealType={mealType}
          inputChangeHandler={inputChangeHandler}
          selectChangeHandler={selectChangeHandler}
          submitHandler={submitHandler}
        />
        <RecipeCard recipeData={recipeData}/>
      </HomeContainer>
    </div>
  );
};

export default Home;
