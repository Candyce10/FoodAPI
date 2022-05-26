import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import './pages.css';


function Recipe(props){
    let {index} = useParams()
    // let recipe = props.recipes.filter((recipe) => recipe.idMeal === index )
    // console.log(recipe)
    // recipe=recipe[0]
    const[recipe, setRecipe] = useState(null)
   useEffect(() =>{

        fetchData();
    }, [])
  function fetchData(){ 
let URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${index}`
    fetch(URL)
      .then((res)=> res.json())
      .then((res) => {
        setRecipe(res.meals[0]) 
       console.log(res)
      })
    }


    if (!recipe){
        <p>loading
    </p>} else
    {return(
        <>
       
            <div class="mealTitle">
            <h2 class ="mealName">{recipe?.strMeal}</h2><h4>Category: {recipe?.strCategory}</h4>
            <h4>Area: {recipe?.strArea}</h4>
            </div>

            <div class="imgAndIngredients">
                <div class =" imageBox">
                <img class="mealImage" src={recipe?.strMealThumb}/>
                </div>
            
            
            
            <div class = "measurements">
             <p class ="ingredient">{recipe?.strMeasure1} {recipe?.strIngredient1}</p>
            <p class ="ingredient">{recipe?.strMeasure2} {recipe?.strIngredient2}</p>
            <p class ="ingredient">{recipe?.strMeasure3} {recipe?.strIngredient3}</p>
            <p class ="ingredient">{recipe?.strMeasure4} {recipe?.strIngredient4}</p>
            <p class ="ingredient">{recipe?.strMeasure5} {recipe?.strIngredient5}</p>
            <p class ="ingredient">{recipe?.strMeasure6} {recipe?.strIngredient6}</p>
            <p class ="ingredient">{recipe?.strMeasure7} {recipe?.strIngredient7}</p>
            <p class ="ingredient">{recipe?.strMeasure8} {recipe?.strIngredient8}</p>
            <p class ="ingredient">{recipe?.strMeasure9} {recipe?.strIngredient9}</p>
            <p class ="ingredient">{recipe?.strMeasure10} {recipe?.strIngredient10}</p>
            <p class ="ingredient">{recipe?.strMeasure11} {recipe?.strIngredient11}</p>
            <p class ="ingredient">{recipe?.strMeasure12} {recipe?.strIngredient12}</p>
            <p class ="ingredient">{recipe?.strMeasure13} {recipe?.strIngredient13}</p>
            <p class ="ingredient">{recipe?.strMeasure14} {recipe?.strIngredient14}</p>
            <p class ="ingredient">{recipe?.strMeasure15} {recipe?.strIngredient15}</p>
            <p class ="ingredient">{recipe?.strMeasure16} {recipe?.strIngredient16}</p>
            </div>
            </div>

            <div class = "instructions">
            <p>{recipe?.strInstructions}</p>

            </div>
            </>
       
    )}
}


export default Recipe