import React, { useContext, useState } from 'react'
import Nav from './Nav'
import {useParams, Link} from 'react-router-dom'
import { Context } from '../databases/Store'
import { GetCartCards } from './functions'

function Cart() {
  const [state] = useContext(Context)
  const [cart, setCart] = useState(GetCartCards())
  const {user} = useParams()
  return (
    <div className="Cart">
      <Nav/>
      <h1>Cart</h1>
      <h3>User: {user}</h3>
      <Link to={'/Checkout/'+state}>
        <h1>Checkout</h1>
      </Link>
      {cart}
    </div>
  );
}

export default Cart;
