import React from 'react'
import Nav from './Nav'
import {useParams} from 'react-router-dom'
import { GetCheckoutPrice, GetCheckout } from './functions'

function Checkout() {
    const {user} = useParams()
    let price = GetCheckoutPrice()
    let cart = GetCheckout()
    return (
        <div>
            <Nav/>
            <h1>Checkout</h1>
            <h3>User: {user}</h3>
            {cart}
            <h1>Total: ${price}</h1>
        </div>
  );
}

export default Checkout