import React from 'react'
import {Link} from 'react-router-dom'
import styles from "../styles/Nav.module.css"

function Nav() {
    return (
      <div className={styles.nav}>
        <h1 className={styles.header}>Blue Box</h1>
        <ul className={styles.sort}>
          <Link to ="/Home">
            <li>Home</li>
          </Link>
          <Link to ="/Movies">
            <li>Movies</li>
          </Link>
          <Link to ="/Shows">
            <li>Shows</li>
          </Link>
          <Link to ="/Sales">
            <li>On Sale</li>
          </Link>
        </ul>
        <ul className={styles.profile}>
          <Link to = "/Cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    );
  }
  
  export default Nav;
  