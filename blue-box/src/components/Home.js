import React from 'react'
import Nav from './Nav'
import {makeShowCards, makeMovieCards} from './functions'

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
