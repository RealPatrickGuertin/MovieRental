import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import styles from "../styles/Nav.module.css"
import { Context } from '../databases/Store'



function Nav() {
  const [state] = useContext(Context)
  return (
    <div className={styles.nav}>
      <h1 className={styles.header}>Blue Box</h1>
      <ul className={styles.sort}>
        <Link to = {'/Home/'+state.username}>
          <li>Home</li>
        </Link>
        <Link to ={'/Movies/'+state.username}>
          <li>Movies</li>
        </Link>
        <Link to ={'/Shows/'+state.username}>
          <li>Shows</li>
        </Link>
        <Link to ={'/Sales/'+state.username}>
          <li>On Sale</li>
        </Link>
      </ul>
      <ul className={styles.profile}>
        <Link to = {'/Cart/'+state.username}>
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
}
  
  export default Nav;
  