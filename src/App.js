import React, { Component } from 'react';
import Users from './User/Users';
import Person from './Person/Person';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> <Users /></h1>
        <Person />
      </div>
      
      )
  }
}

export default App;


/* 
<div className={1+1}>
Hello 
</div>

<h1>
        Hello World
      </h1>
*/

// babel.io/repl
/*
React.createElement(
  'div',
  { clasName: 'Outer' },
  React.createElement(
    'h1',
    null,
    'Hello World'
  )
);
*/