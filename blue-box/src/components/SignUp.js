import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import '../styles/SignIn.module.css'
import Users from '../databases/userDatabase'
import {Context} from '../databases/Store'

function SignUp() {
  let history = useHistory();
  const [state, setState] = useContext(Context)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function clearForm() {
    setName("")
    setEmail("")
    setUsername("")
    setPassword("")
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(state)
    if(name === ''){
      alert("Must Input Name")
    }
    else if(email === '') {
      alert("Must Input Email")
    }
    else if(username === ''){
      alert("Must Input Username") 
    }
    else if(password === ''){
      alert("Must Input Password") 

    }
    else {
      let cart = []
      var userFound = false
      for( var i = 0; i < Users.length; i++) {
        if(Users[i].username === username) {
          alert('user already found')
          userFound = true
          clearForm()
        }
      }
      if(!userFound) {
        Users.push({
          name,
          email,
          username,
          password,
          cart
        })
        setState(username)
        const dir = "/Home/" + username
        history.push(dir)
        console.log(Users)
      }
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form id = "sign-up">
        <label>
          Name: 
          <input 
            type="text" 
            name="name"
            value={name} 
            onChange={ e => setName(e.target.value) }/>
        </label>
        <label>
          Email: 
          <input 
            type="text" 
            name="email"
            value={email} 
            onChange={ e => setEmail(e.target.value) }/>
        </label>
        <br/> <br/>
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
            onChange={ e => setPassword(e.target.value) } />
        </label>
        <br /> <br />
        <button onClick={ onSubmit }>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
