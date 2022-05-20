import { Link } from 'react-router-dom'
import './components.css';


function Results(props) {

  console.log(props)
  const showData = props.results.map((item, idx) =>{
    return(
        <div class="test2">
            <div class="test" key={idx}>
                <div class="searchResults">
                <Link class="aLink" to={`/recipes/${idx}`}>    
                    <img class="searchImage" src ={item.strMealThumb} alt ={item.strMeal} />
                    <p class= "searchMeal"><h4>{item.strMeal}</h4></p>
                </Link> 
                
                <p class= "searchMealCat"><h5>{item.strCategory}</h5></p>
                </div>
            </div>
        </div>
    )
  })
  if(props.results.length) { 
      return (
    <div>

      {showData}
    </div>
  )} else return (
    <>
    <h2 class="noResultText">No results found.</h2>
    <a class="goBackText" href="/">go back</a></>)


 
}
export default Results