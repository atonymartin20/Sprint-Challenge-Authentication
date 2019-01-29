import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import SignIn from './SignIn/index.js';
import SignUp from './SignUpPage/index.js';
import Homepage from './Homepage/index.js';
import Users from './Users/index.js';
import styled from 'styled-components';

const FancyNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  color: 4A4A4A;
  letter-spacing: .1rem;
  padding: 0px 4%;
  margin-top: 40px;
`;

const LinkyLink = styled(NavLink)`
  font-size: 1.5rem;
  color: red;
  margin: 0px 20px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <FancyNav>
          <LinkyLink to='/' exact> Homepage </LinkyLink>
          <LinkyLink to='/SignUpPage'> Sign Up </LinkyLink>
          <LinkyLink to='/SignIn'> Sign In </LinkyLink>
          <LinkyLink to ='/Users'> Users </LinkyLink>
          <NavLink to='/' exact> <button onClick={this.logout} onSubmit={this.SubmitHandler}>Sign Out</button></NavLink>
        </FancyNav>
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
