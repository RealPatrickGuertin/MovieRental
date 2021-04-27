import React, { useContext } from 'react'
import Nav from './Nav'
import {useParams, Link} from 'react-router-dom'
import { Context } from '../databases/Store'
import { GetCart } from './functions'

function Cart() {
  const [state] = useContext(Context)
  const {user} = useParams()
  let cart = GetCart()
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
