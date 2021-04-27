import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import '../styles/SignIn.module.css'
import Users from '../databases/userDatabase'
import {Context} from '../databases/Store'

function SignIn() {
  let history = useHistory();
  const [setState] = useContext(Context)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  function onSubmit (e) {
    e.preventDefault()
    if(username === '' || password === '') {
     alert("both username and password fields must be filled")
    }
    else {
      for( var i = 0; i < Users.length; i++) {
        if(Users[i].username === username && Users[i].password === password) {
          setState(username)
          const dir = "/Home/" + username
          history.push(dir)
        }
      }
    }
  }
  
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          Username: 
          <input 
            type="text" 
            name="username"
            value={username} 
            onChange={ e => setUsername(e.target.value) }/>
        </label>
        <br /> <br />
        <label>
          Password:
          <input 
            type="password" 
            name="password"
            value={password}
            onChange={ e => setPassword(e.target.value)} />
        </label>
        <br /> <br />
        <button onClick={ onSubmit }>Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;