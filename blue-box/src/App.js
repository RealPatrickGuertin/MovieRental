import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
    return(
        <Router>
            <div className="App">
                <Nav /> 
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/SignIn" component = {SignIn} />
                    <Route path="/SignUp" component = {SignUp} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;