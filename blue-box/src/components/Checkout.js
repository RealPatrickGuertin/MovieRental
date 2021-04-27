import React from 'react'
import Nav from './Nav'
import {useParams} from 'react-router-dom'

function Checkout() {
    const {user} = useParams()
    return (
        <div>
            <Nav/>
            <h1>checkout</h1>
            <h3>User: {user}</h3>
            
        </div>
  );
}

export default Checkout