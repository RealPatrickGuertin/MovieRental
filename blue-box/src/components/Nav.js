import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Nav.css"

function Nav() {
    return (
      <div className="Nav">
        <h1>Nav</h1>
        <ul className="NavLinks">
          <Link to ="/">
            <li>Home</li>
          </Link>
          <Link to = "/SignIn">
            <li>Sign In</li>
          </Link>
          <Link to = "/SignUp">
            <li>Sign Up</li>
          </Link>
        </ul>
      </div>
    );
  }
  
  export default Nav;
  