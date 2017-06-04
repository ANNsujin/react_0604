import React, { Component }from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import {BrowserRouter as Router,Link, Route } from 'react-router-dom'

class App extends Component {
  
  render=()=>{
    return (
      <div>
        <Router>
          <div>
            <h1>Hello Log in OR Sign up</h1>
            <ul>
              <li><Link to='/Login'> Login</Link> </li>
              <li><Link to='/Signup'> Signup</Link> </li>
            </ul>
            <hr/>
            <Route path = '/Login' component={Login} />
            <Route path = '/Signup' component={Signup} />
          </div>
        </Router>
        <h1>This is Osu page. Hello</h1>
      </div>
    );
  }
}

export default App;

