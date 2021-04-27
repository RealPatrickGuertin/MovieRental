import React from 'react'
import Card from './Card'
import MovieData from '../databases/moviesDatabase'
import ShowData from '../databases/showsDatabase'
import userData from '../databases/userDatabase'
import CartCard from '../components/CartCard'
import {useParams} from 'react-router-dom'

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

export function GetCart() {
  const {user} = useParams()
  let cardComponents = userData.filter(item => item.username === user && item.cart).map( item => item.cart)[0].map(item => 
    <CartCard
      key={item.id}
      title={item.title}
      year={item.year}
      price={item.price}
    />)
  return cardComponents
}

export function getCheckoutPrice() {
 
}