import React from 'react'
import Nav from './Nav'
import {makeMovieCards} from './functions'

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