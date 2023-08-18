import { useContext } from "react";
import DetailsContext from "../../pages/details/DetailsContext";
import { DetailsContainer, DetailsHeader, DetailsBody } from "./style";
import diet from "../../assets/diet.svg";

const Details = () => {
  const { details } = useContext(DetailsContext);

  console.log(details);

  const { mealName, mealImage, ingredientLines, mealNutrients } = details;
  const {
    CA: calcium,
    CHOCDF: carbs,
    CHOLE: cholesterol,
    ENERC_KCAL: calories,
    FAT: fat,
    PROCNT: protein,
  } = mealNutrients;

  return (
    <div>
      <DetailsContainer>
        <DetailsHeader>
          <h1>{mealName}</h1>
          <img src={diet} alt="" />
        </DetailsHeader>
        
        <DetailsBody>
            <div className="nutrients">
        <h3>Nutrients</h3>
        <p>
          Calcium: {Math.round(calcium.quantity)}
          {calcium.unit}
        </p>
        <p>
          Carbs: {Math.round(carbs.quantity)}
          {carbs.unit}
        </p>
        <p>
          Cholesterol: {Math.round(cholesterol.quantity)}
          {cholesterol.unit}
        </p>
        <p>
          Calories: {Math.round(calories.quantity)}
          {calories.unit}
        </p>
        <p>
          Fat: {Math.round(fat.quantity)}
          {fat.unit}
        </p>
        <p>
          Protein: {Math.round(protein.quantity)}
          {protein.unit}
        </p>
        </div>
        <div className="mealImage">
        <img src={mealImage} alt="" />
        </div>
        <div className="ingredients">
        <h3>Ingredients</h3>
        {ingredientLines.map((ingredient, index) => {
          return (
            <p>
              {index + 1}. {ingredient}
            </p>
          );
        })}
        </div>
        </DetailsBody>
      </DetailsContainer>
    </div>
  );
};

export default Details;
