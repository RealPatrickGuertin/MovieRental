import React from 'react'
import Nav from './Nav'
import Card from './Card'
import MovieData from '../moviesDatabase'

function makeCardComponents() {
  
  let cardComponents = MovieData.map(movie => 
    <Card 
      id={movie.id} 
      title={movie.title}
      
    />)
    return cardComponents
}

function Movies() {
  let cardComponents = makeCardComponents()
    return (
      <div>
        <Nav/>
        <h1>Movies</h1>
        {cardComponents}
      </div>
    );
  }
  
  export default Movies;