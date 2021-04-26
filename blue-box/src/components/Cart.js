import React from 'react'
import Nav from './Nav'
import {useParams} from 'react-router-dom'
import userData from '../databases/userDatabase'
import CartCard from '../components/CartCard'

function GetCart() {
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

function Cart() {
  const {user} = useParams()
  let cart = GetCart()
  return (
    <div className="Cart">
      <Nav/>
      <h1>Cart</h1>
      <h3>User: {user}</h3>
      {cart}

    </div>
  );
}

export default Cart;
