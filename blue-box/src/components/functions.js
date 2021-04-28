import React from 'react'
import Card from './cards/Card'
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

export function GetCart() {
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
  let price = 0;
  let fixedPrice = price
  let cardComponents = userData.filter(
    item => item.username === user && item.cart).map( 
      item => item.cart)[0].map(
        item => 
          <Card
            key={item.id}
            id={item.id}
            price={item.price}
    />)
    for(let i = 0; i < cardComponents.length; i++) {
      if(cardComponents[i] !== undefined) {
        price = price + cardComponents[i].props.price
        fixedPrice = price.toFixed(2)
        console.log(price)
      }
    }
  return fixedPrice
}