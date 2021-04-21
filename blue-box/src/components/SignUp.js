import React from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/SignIn.module.css'

export class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    toHome: false
  };

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
      // send values to database here
      this.setState({
        toHome: true
      })
    }
  }

  render() {
    if(this.state.toHome === true) {
      return <Redirect to = "/"/>
    }
    return (
      <div>
        <h1>Sign Up</h1>
        <form>
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