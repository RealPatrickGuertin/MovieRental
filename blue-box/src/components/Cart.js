import React from 'react'
import Nav from './Nav'
import {useParams} from 'react-router-dom'

function Cart() {
  const {user} = useParams()
  return (
    <div className="Cart">
      <Nav/>
      <h1>Cart</h1>
      <p>id: {user}</p>
    </div>
  );
}

export default Cart;
