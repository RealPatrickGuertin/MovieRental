import React from 'react'
import Card from './cards/Card'
import Users from '../databases/userDatabase'
import MovieData from '../databases/moviesDatabase'
import ShowData from '../databases/showsDatabase'
import userData from '../databases/userDatabase'
import CartCard from './cards/CartCard'
import {useParams} from 'react-router-dom'
import CheckoutCard from './cards/CheckoutCard'

export function makeShowCards() {
    let cardComponents = ShowData.map(show => 
      <Card 
        key={show.id}
        id={show.id} 
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
      id={movie.id} 
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
        id={show.id} 
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
        id={movie.id} 
        title={movie.title}
        year={movie.year}
        price={movie.price}
      />)
    return cardComponents
  }

export function getCart(username) {
  let foundUser = []
  for(let i = 0; i < Users.length; i++) {
    if(Users[i].username === username) {
      foundUser = Users[i].cart
    }
  }
  return foundUser
}

export function GetCartCards() {
  const {user} = useParams()
  let cardComponents = userData.filter(
    item => item.username === user && item.cart).map( 
      item => item.cart)[0].map(
        item => 
          <CartCard
            key={item.id}
            id={item.id}
            title={item.title}
            year={item.year}
            price={item.price}
    />)
  return cardComponents
}

export function GetCheckout() {
  const {user} = useParams()
  let cardComponents = userData.filter(
    item => item.username === user && item.cart).map( 
      item => item.cart)[0].map(
        item => 
          <CheckoutCard
            key={item.id}
            id={item.id}
            title={item.title}
            year={item.year}
            price={item.price}
    />)
  return cardComponents
}

export function GetCheckoutPrice() {
  const {user} = useParams()
  const cart = getCart(user)
  let price = 0
  let fixedPrice = 0
    for(let i = 0; i < cart.length; i++) {
      price = price + cart[i].price
      fixedPrice = price.toFixed(2)
    }
  return fixedPrice
}
