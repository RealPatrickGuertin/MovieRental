import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Sales from './components/Sales'
import Cart from './components/Cart'

function App() {
    return(
        <Router>
            <div className="App">
                <Nav /> 
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Movies" component = {Movies} />
                    <Route path="/Shows" component = {Shows} />
                    <Route path="/Sales" component = {Sales} />
                    <Route path="/SignIn" component = {SignIn} />
                    <Route path="/SignUp" component = {SignUp} />
                    <Route path="/Cart" component = {Cart} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;