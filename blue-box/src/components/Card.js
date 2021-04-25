import React from 'react'
import '../styles/Card.css'

function onAddToCart(e) {
    //add items to cart here 
}

function Card(props) {
    return (
        <div className = "card">
            <div className="container">
                <h1>{props.title}</h1>
                <button onClick={ e => onAddToCart(e) }>Add To Cart</button>
            </div>
        </div>
    );
  }

  export default Card