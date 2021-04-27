import React from 'react'
import Card from './Card'
import MovieData from '../databases/moviesDatabase'
import ShowData from '../databases/showsDatabase'

export function makeShowCards() {
    let cardComponents = ShowData.map(show => 
      <Card 
        key={show.id} 
        title={show.title}
        year={show.year}
        price={show.price}
      />)
      return cardComponents
}

export function makeMovieCards() {

let cardComponents = MovieData.map(movie => 
    <Card 
    key={movie.id} 
    title={movie.title}
    year={movie.year}
    price={movie.price}
    />)
    return cardComponents
}
  
export function filterShows() {
    let cardComponents = ShowData.filter(show => show.onSale === true).map( show =>
      <Card 
        key={show.id} 
        title={show.title}
        year={show.year}
        price={show.price}
      />)
    return cardComponents
  }
  
  
export function filterMovies() {
    let cardComponents = MovieData.filter(movie => movie.onSale === true).map( movie =>
      <Card 
        key={movie.id} 
        title={movie.title}
        year={movie.year}
        price={movie.price}
      />)
    return cardComponents
  }