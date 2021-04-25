import React from 'react'
import Nav from './Nav'
import Card from './Card'
import ShowData from '../databases/showsDatabase'

function makeShowCards() {
  let cardComponents = ShowData.map(show => 
    <Card 
      key={show.id} 
      title={show.title}
      year={show.year}
      price={show.price}
    />)
    return cardComponents
}

function Shows() {
  let cardComponents = makeShowCards()
  return (
    <div>
      <Nav/>
      <h1>Shows</h1>
      {cardComponents}
    </div>
  );
  }
  
  export default Shows;