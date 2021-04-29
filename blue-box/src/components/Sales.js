import React from 'react'
import Nav from './Nav'
import {filterShows, filterMovies} from './functions'

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