import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Nav.css"

function Nav() {
    return (
      <div className="nav">
        <h1>Blue Box</h1>
        <ul>
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
  