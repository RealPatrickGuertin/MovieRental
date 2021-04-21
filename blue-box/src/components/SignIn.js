import React from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/SignIn.module.css'

export class SignIn extends React.Component {
  state = {
    username: "",
    password: "", 
    userFound: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    // if this.state.username and this.state.password are in database{}
    if(this.state.username === '' || this.state.password === '') {
     alert("both username and password fields must be filled")
    }
    else{
      this.setState({
        userFound: true
      })
    }
  }

  render() {
    if(this.state.userFound === true) {
      return <Redirect to = "/"/>
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
          <button onClick={ e => this.onSubmit(e) }>Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;