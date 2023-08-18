import { CardContainer } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DetailsContext from "../../pages/details/DetailsContext";

const RecipeCard = ({recipeData}) => {
    const {setDetails} = useContext(DetailsContext);

    const viewMoreHandler = (recipe) => {
        setDetails(prevDetails => {
            return {
                ...prevDetails,
                mealName: recipe.recipe.label,
                mealImage: recipe.recipe.image,
                ingredientLines: recipe.recipe.ingredientLines,
                mealNutrients: recipe.recipe.totalNutrients
            }
        })
    }

    return (
        <div className="recipe-card">
            <CardContainer>
                {recipeData.map(recipe => {
                    return (
                        <div className="recipe-card" key={recipe.recipe.ingredients.foodId}>
                            <h3>{recipe.recipe.label}</h3>
                            <img src={recipe.recipe.image} alt="" /> 
                            <Link to="/details"><button onClick={()=>viewMoreHandler(recipe)}>View More</button></Link>
                        </div>
                    )
                })}
            </CardContainer>
        </div>
    )
};

export default RecipeCard;