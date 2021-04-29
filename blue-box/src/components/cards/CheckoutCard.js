import React from 'react'

function CheckoutCard(props) {
    return (
        <div className = "card">
            <div className="container">
                <h1>{props.title}</h1>
                <p>Year Produced: {props.year}</p> 
                <p>price: ${props.price}</p>
            </div>
        </div>
    );
  }

  export default CheckoutCard