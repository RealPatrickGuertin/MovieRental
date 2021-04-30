import React, { useContext } from 'react'
import { Context } from '../../databases/Store'
import '../../styles/Card.css'
import Users from '../../databases/userDatabase'

function CartCard(props) {
    const [user] = useContext(Context)
    
    function onRemoveFromCart(e, username) {
        for(let i = 0; i < Users.length; i++) {
            if(Users[i].username === username) {
                for(let j = 0; j < Users[i].cart.length; j++) {
                    if(Users[i].cart[j].id === e.id) {
                        const index = Users[i].cart.indexOf(Users[i].cart[j])
                        Users[i].cart.splice(index, 1)
                        break
                    }
                }
            }
        }
    }

    return (
        <div className = "card">
            <div className="container">
                <h1>{props.title}</h1>
                <p>Year Produced: {props.year}</p> 
                <p>price: ${props.price}</p>
                <button className='button' onClick={ e => onRemoveFromCart(props, user) }>Remove</button>
            </div>
        </div>
    );
  }

  export default CartCard