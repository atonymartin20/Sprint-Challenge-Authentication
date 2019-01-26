import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/' exact> Homepage </NavLink>
          <NavLink to='/SignUpPage'> Sign Up </NavLink>
          <NavLink to='/SignIn'> Sign In </NavLink>
          <NavLink to='/' exact> <button onClick={this.logout} onSubmit={this.SubmitHandler}>Sign Out</button></NavLink>
        </nav>
        <main>
          <Route path='/' component={Homepage} exact></Route>
          <Route path='/SignUpPage' component={SignUp} exact></Route>
          <Route path='/SignIn' component={SignIn} exact></Route>
          <Route path='/Users' component={Users} exact></Route>
        </main>
      </div>
    );
  }
}

export default App;
