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
        <Link to = {'/Home/'+state}>
          <li>Home</li>
        </Link>
        <Link to ={'/Movies/'+state}>
          <li>Movies</li>
        </Link>
        <Link to ={'/Shows/'+state}>
          <li>Shows</li>
        </Link>
        <Link to ={'/Sales/'+state}>
          <li>On Sale</li>
        </Link>
      </ul>
      <ul className={styles.profile}>
        <Link to = {'/Cart/'+state}>
          <li>Cart</li>
        </Link>
        <Link to = {'/'}>
          <li>Log Out</li>
        </Link>
      </ul>
    </div>
  );
}
  
  export default Nav;
  