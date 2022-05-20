import React, { useState, useEffect } from 'react'

function RandomMeal() {
    const[random, setRandom] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    
    function fetchData(){
        setIsLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res)=> res.json())
        .then(data => 
            {setIsLoading(false)
            setRandom(data.meals)})
        }
      
        useEffect(() =>{
            fetchData();
        }, [])

  return (
    <div>
        {isLoading && <h3>one sec...</h3>}
        {random.length > 0 && (
           <div>
               {random.map(rand =>(
                <>
            <div class="mealTitle">
            <h2 class="mealName">{rand.strMeal}</h2> <h6>Category: {rand.strCategory}</h6>
            <h6>Area: {rand.strArea}</h6>
            </div>

            <div class="imgAndIngredients">
                <div class =" imageBox">
                    <img class="mealImage" src={rand.strMealThumb} alt={rand.strMeal}/>
                </div>
                <div class = "measurements">
                    <p class="ingredientTitle">You will need:</p>
                    <p class ="ingredient">{rand.strMeasure1} {rand.strIngredient1}</p>
                    <p class ="ingredient">{rand.strMeasure2} {rand.strIngredient2}</p>
                    <p class ="ingredient">{rand.strMeasure3} {rand.strIngredient3}</p>
                    <p class ="ingredient">{rand.strMeasure4} {rand.strIngredient4}</p>
                    <p class ="ingredient">{rand.strMeasure5} {rand.strIngredient5}</p>
                    <p class ="ingredient">{rand.strMeasure6} {rand.strIngredient6}</p>
                    <p class ="ingredient">{rand.strMeasure7} {rand.strIngredient7}</p>
                    <p class ="ingredient">{rand.strMeasure8} {rand.strIngredient8}</p>
                    <p class ="ingredient">{rand.strMeasure9} {rand.strIngredient9}</p>
                    <p class ="ingredient">{rand.strMeasure10} {rand.strIngredient10}</p>
                    <p class ="ingredient">{rand.strMeasure11} {rand.strIngredient11}</p>
                    <p class ="ingredient">{rand.strMeasure12} {rand.strIngredient12}</p>
                    <p class ="ingredient">{rand.strMeasure13} {rand.strIngredient13}</p>
                    <p class ="ingredient">{rand.strMeasure14} {rand.strIngredient14}</p>
                    <p class ="ingredient">{rand.strMeasure15} {rand.strIngredient15}</p>
                    <p class ="ingredient">{rand.strMeasure16} {rand.strIngredient16}</p>
                </div>
            </div>
            
            <div class="instructions">
            <p>{rand.strInstructions}</p>
            </div>
                   </>

               ))}
           </div>
       )}
     </div>
  )
}
export default RandomMeal