import React from 'react'
import Nav from './Nav'
import Card from './Card'
import MovieData from '../databases/moviesDatabase'
import ShowData from '../databases/showsDatabase'

function makeShowCards() {
  let cardComponents = ShowData.map(show => 
    <Card 
      key={show.id} 
      title={show.title}
      year={show.year}
      price={show.price}
    />)
    return cardComponents
}

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

function Home() {
    let filteredMovies = makeMovieCards()
    let filteredShows = makeShowCards()
    return (
      <div>
        <Nav/>
        <h1>Home</h1>
        <h3>Movies</h3>
        {filteredMovies}
        <h3>Shows</h3>
        {filteredShows}
      </div>
  );
}

export default Home;
