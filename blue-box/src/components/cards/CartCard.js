import React from 'react'
import '../../styles/Card.css'

function onRemoveFromCart(e) {
    
}

function CartCard(props) {
    return (
        <div className = "card">
            <div className="container">
                <h1>{props.title}</h1>
                <p>Year Produced: {props.year}</p> 
                <p>price: ${props.price}</p>
                <button className='button' onClick={ e => onRemoveFromCart(e) }>Remove</button>
            </div>
        </div>
    );
  }

  export default CartCard