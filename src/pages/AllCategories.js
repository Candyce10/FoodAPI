import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Categories() {
    const[categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState
    // const [recipes, setRecipes] = useState([])
    (false)
    
    
    function fetchData(){
        setIsLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((res)=> res.json())
        .then(data => 
            {setIsLoading(false)
            setCategories(data.categories)})
        }
      
        useEffect(() =>{
            fetchData();
        }, [])
      
        

return (
    <div>
    {isLoading && <h3>one sec...</h3>}
    {categories.length > 0 && (
        <div>
            {categories.map((category, idx) =>(
                <div class="ulContainer">
                <ul class="categoryList">
                    <Link to={`/recipes/categories/${category.strCategory}`}>
                        <li class="categoryName">
                            {category.strCategory}
                        </li>
                    </Link>
                </ul>
                </div>
               ))}
        </div>
       )}
      
     </div>
  )
}
export default Categories