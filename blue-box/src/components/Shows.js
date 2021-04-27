import React from 'react'
import Nav from './Nav'
import {makeShowCards} from './functions'

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