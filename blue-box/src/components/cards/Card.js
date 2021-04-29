import React, { useContext } from 'react'
import { Context } from '../../databases/Store'
import '../../styles/Card.css'
import Users from '../../databases/userDatabase'

function onAddToCart(e, props, username) {
    const id = props.id
    const title = props.title
    const year = props.year
    const price = props.price
    const onSale = props.onSale
    const handleDelete = props.handleDelete
    for(let i = 0; i < Users.length; i++) {
        if(Users[i].username === username) {
            Users[i].cart.push( {
                id,
                title,
                year,
                price,
                onSale,
                handleDelete
            })
        }
    }
}

function Card(props) {
    const [state] = useContext(Context)
    return (
        <div className = "card">
            <div className="container">
                <h1>{props.title}</h1>
                <p>Year Produced: {props.year}</p> 
                <p>price: ${props.price}</p>
                <button className='button' onClick={ e => onAddToCart(e, props, state) }>Add To Cart</button>
            </div>
        </div>
    );
  }

  export default Card