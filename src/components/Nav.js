import React from "react"
import { Link } from 'react-router-dom'
import './components.css';




function Nav(props) {



  return (
    <div class="nav">
      <p class = "navTitle">Feed Me</p>
      <p><Link to="/" onClick="window.location.reload();"><h4>Home</h4></Link></p>
      <p><Link to="/recipes/random" onClick="window.location.reload();"><h4>Find Random Recipe</h4></Link></p>
      <p><Link to="/recipes/categories" onClick="window.location.reload();"><h4>Categories</h4></Link></p>

      <div class ="search">
          <form class="seachBox" onSubmit={props.handleSubmit}>
              <input class="searchBar" type="text" placeholder="Find a recipe..." value={props.recipes} onChange={props.handleChange}/>
              <button class="searchButton" type="submit">Search</button>
          </form>
      </div>
      
    </div>
  )
}
export default Nav