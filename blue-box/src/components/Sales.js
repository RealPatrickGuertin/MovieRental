import React from 'react'
import Nav from './Nav'
import Card from './Card'
import MovieData from '../databases/moviesDatabase'
import ShowData from '../databases/showsDatabase'

function filterShows() {
  let cardComponents = ShowData.filter(show => show.onSale === true).map( show =>
    <Card 
      key={show.id} 
      title={show.title}
      year={show.year}
      price={show.price}
    />)
  return cardComponents
}


function filterMovies() {
  let cardComponents = MovieData.filter(movie => movie.onSale === true).map( movie =>
    <Card 
      key={movie.id} 
      title={movie.title}
      year={movie.year}
      price={movie.price}
    />)
  return cardComponents
}

function Sales() {
  let filteredMovies = filterMovies()
  let filteredShows = filterShows()
    return (
      <div>
        <Nav/>
        <h1>On Sale</h1>
        <h3>Movies</h3>
        {filteredMovies}
        <h3>Shows</h3>
        {filteredShows}
      </div>
    );
  }
  
  export default Sales;