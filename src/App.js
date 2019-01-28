import React, { Component } from 'react';
import Users from './User/Users';
import Person from './Person/Person';
import Propsex from './Propsex/Propsex';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>JavaScript Library</h1>    
        <h1> <Users /></h1>
        <Person />
        <Person />
        <Person />
        <Propsex name="Shaik" />
        <Propsex name="Khadar">Working in Swiggy</Propsex>
        <Propsex name="Basha" />
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