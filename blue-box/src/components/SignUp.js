import React from 'react'
import '../styles/SignIn.module.css'

export class SignUp extends React.Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    // send values to database here
  }

  render() {
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