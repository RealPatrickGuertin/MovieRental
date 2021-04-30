import React, { useContext, useState } from 'react'
import Nav from './Nav'
import {useParams, Link} from 'react-router-dom'
import { Context } from '../databases/Store'
import { getCart, GetCartCards } from './functions'

function Cart() {
  
  const [state] = useContext(Context)
  const {user} = useParams()
  let currCart = getCart(user)
  const [cart, setCart] = useState(currCart)
  const [cartCards, setCartCards] = useState(GetCartCards())

  function update() {
    setCart(getCart(user))
    setCartCards((GetCartCards))
    console.log(cart)
  }

  return (
    <div className="Cart">
      <Nav/>
      <h1>Cart</h1>
      <h3>User: {user}</h3>
      <Link to={'/Checkout/'+state}>
        <h1>Checkout</h1>
      </Link>
      {cartCards}
      <button onClick={ update }>Update Cart</button>
    </div>
  );
}

export default Cart;
