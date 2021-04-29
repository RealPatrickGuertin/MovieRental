import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard() {
    return (
      <div className="Dashboard">
        <h1>Blue Box</h1>
        <ul>
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
  
  export default Dashboard;
  