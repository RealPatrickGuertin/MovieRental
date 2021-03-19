import React from 'react'
import '../styles/SignIn.module.css'

export class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
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
        <button onClick={ e => this.onSubmit(e) }>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;