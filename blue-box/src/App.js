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

function App() {
    return(
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component = {Dashboard}/>
                    <Route path="/SignIn" component = {SignIn} />
                    <Route path="/SignUp" component = {SignUp} />
                    <Route path="/Cart" component = {Cart} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Movies" component = {Movies} />
                    <Route path="/Shows" component = {Shows} />
                    <Route path="/Sales" component = {Sales} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;