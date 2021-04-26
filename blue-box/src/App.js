import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Movies from './components/Movies'
import Shows from './components/Shows'
import Sales from './components/Sales'
import Cart from './components/Cart'
import Store from './databases/Store'

function App() {
    return(
        <Router>
            <Store>
                <Switch>
                    <Route exact path="/" component = {Dashboard}/>
                    <Route path="/SignIn" component = {SignIn} />
                    <Route path="/SignUp" component = {SignUp} />
                    <Route path="/Cart/:user" component = {Cart} />
                    <Route path="/Home/:user" component={Home} />
                    <Route path="/Movies/:user" component = {Movies} />
                    <Route path="/Shows/:user" component = {Shows} />
                    <Route path="/Sales/:user" component = {Sales} />
                </Switch>
            </Store>
        </Router>
    )
}

export default App;