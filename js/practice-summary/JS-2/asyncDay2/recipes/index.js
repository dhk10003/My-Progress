const query = document.getElementById("search")
const submit = document.getElementById("searchbtn")
const recipeContainer = document.getElementById("recipes")

submit.addEventListener("click", () => {
    const search = query.value
    getRecipes(search)
})

async function getRecipes(search){
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await response.json()
        renderRecipe(data)
    }
    catch(err){
        renderError()
    }
}

// using promise instead of async await:
// function getRecipes(search){
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
//     .then(response => response.json())
//     .then(data => renderRecipe(data))
//     .catch(err => renderError(err))
// }

const renderError = (error) => {
    const errorDiv = document.createElement("h1")
    errorDiv.innerHTML = `  This prodcut doesnt exist `
    recipeContainer.appendChild(errorDiv)
}

const renderRecipe = ({meals}) => {
    // clear the container
    recipeContainer.innerHTML = ""
    // let {meals} = data
    const mealsArray = meals.map(meal => {
        return `<div class="recipe">
            <h1>${meal.strMeal}</h1>
            <img height="100px" src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>Recipe video: </h3>
            <iframe src=${meal.strYoutube.replace("watch?v=", "embed/")}
            width="560" height="315" frameborder="0" allowfullscreen></iframe>
        </div>`
    })
    console.log(mealsArray)
    mealsArray.map(meal =>{
        const mealDiv = document.createElement("div")
        mealDiv.innerHTML = meal
        recipeContainer.appendChild(mealDiv)
    })
}