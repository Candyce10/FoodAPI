import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function CategoryPage() {
    const [recipes, setRecipes] = useState([])
    const {category} = useParams()
    console.log(category)

    function fetchData(){

      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res)=> res.json())
      .then(data => 

        setRecipes(data.meals))
      }
    
      useEffect(() =>{
          fetchData();
      }, [])


    if (!recipes.length){
       <p>one sec ...</p>
       }else{
       return(
      <div>
              {recipes.map(meals =>{
                return(
                <div class="test2">
                  <div class="test">
                    <div class="searchResults">
                  <img class="searchImage" src ={meals.strMealThumb} alt ={meals.strMeal} />
                  <p class= "searchMeal"><h4>{meals.strMeal}</h4></p>
                  <p class= "searchMealCat"><h5>{meals.strCategory}</h5></p>
                  </div>
                  </div>
                </div>
     ) }) }
        
    </div>
  )
}}
export default CategoryPage
 