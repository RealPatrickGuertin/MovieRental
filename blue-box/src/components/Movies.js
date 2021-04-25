import React from 'react'
import Nav from './Nav'
import Card from './Card'
import MovieData from '../databases/moviesDatabase'

function makeMovieCards() {
  
  let cardComponents = MovieData.map(movie => 
    <Card 
      key={movie.id} 
      title={movie.title}
      year={movie.year}
      price={movie.price}
    />)
    return cardComponents
}

function Movies() {
  let cardComponents = makeMovieCards()
    return (
      <div>
        <Nav/>
        <h1>Movies</h1>
        {cardComponents}
      </div>
    );
  }
  
  export default Movies;