import React, { useState } from "react"
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Results from "./components/Results"
import Nav from "./components/Nav"
import RandomMeal from "./pages/RandomMeal"
import Categories from "./pages/AllCategories"
import CategoryPage from "./pages/CategoryPage"
import { Routes , Route, useNavigate } from "react-router-dom"


function App() {

  let navigate = useNavigate()
  const[recipes, setRecipes] = useState([])
  const[results, setResults] = useState([])


  
  function fetchData(){

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipes}`)
      .then((res)=> res.json())
      .then((res) => {
        setResults(res.meals) 
       
      })
    }
      
  function handleChange (e){
    setRecipes(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetchData();
    navigate('/recipes/results')
  }
  

  return (
    <>
    
    <Nav handleSubmit={handleSubmit} handleChange={handleChange} recipes={recipes}/>
    <Routes>
      <Route path ='/recipes/results' element={<Results results={results} />}/>
      <Route path ='/' element={<Home recipes={recipes}/>}/>
      <Route path ='/recipes/random' element={<RandomMeal />} />
      <Route path ='/recipes/:index' element={<Recipe recipes={results} />}/>
      <Route path ='/recipes/categories' element={<Categories />}/>
      <Route path ='/recipes/categories/:category' element={<CategoryPage />}/>
    </Routes>
    
  </>
  )

}
export default App