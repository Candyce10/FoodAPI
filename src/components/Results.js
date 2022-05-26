import { Link } from 'react-router-dom'
import './components.css';


function Results(props) {

  console.log(props)
  const showData = props.results.map((item, idx) =>{
    return(
        <div className="test2"key={idx}>
            <div className="test" >
                <div className="searchResults">
                <Link className="aLink" to={`/recipes/${item.idMeal}`}>    
                    <img className="searchImage" src ={item.strMealThumb} alt ={item.strMeal} />
                    <p className= "searchMeal"><h4>{item.strMeal}</h4></p>
                </Link> 
                
                <p className= "searchMealCat"><h5>{item.strCategory}</h5></p>
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
    <h2 className="noResultText">No results found.</h2>
    <a className="goBackText" href="/">go back</a></>)


 
}
export default Results