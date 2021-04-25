import React from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/SignIn.module.css'
import Users from '../userDatabase'

export class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    toHome: false
  };

  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      username: "",
      password: ""
    })
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    if(this.state.name === ''){
      alert("Must Input Name")
    }
    else if(this.state.email === '') {
      alert("must Input Email")
    }
    else if(this.state.username === ''){
      alert("Must Input Username") 
    }
    else if(this.state.password === ''){
      alert("Must Input Password") 
    }
    else {
      let name = this.state.name
      let email = this.state.email
      let username = this.state.username
      let password = this.state.password
      var userFound = false
      for( var i = 0; i < Users.length; i++) {
        if(Users[i].username === this.state.username) {
          alert('user already found')
          userFound = true
          this.clearForm()
        }
      }
      if(!userFound) {
        Users.push({
          name,
          email,
          username,
          password
        })
        this.setState({
          toHome: true
        })
        console.log(Users)
      }
    }
  }

  render() {
    if(this.state.toHome === true) {
      return <Redirect to = "/Home"/>
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
              value={this.state.name} 
              onChange={e => this.onChange(e)}/>
          </label>
          <label>
            Email: 
            <input 
              type="text" 
              name="email"
              value={this.state.email} 
              onChange={e => this.onChange(e)}/>
          </label>
          <br/> <br/>
          <label>
            Username: 
            <input 
              type="text" 
              name="username"
              value={this.state.username} 
              onChange={e => this.onChange(e)}/>
          </label>
          <br /> <br />
          <label>
            Password:
            <input 
              type="password" 
              name="password"
              value={this.state.password}
              onChange={e => this.onChange(e)} />
          </label>
          <br /> <br />
          <button onClick={ e => this.onSubmit(e) }>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;