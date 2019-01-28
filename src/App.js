import React, { Component } from 'react';
import Users from './User/Users';
import Person from './Person/Person';
import Propsex from './Propsex/Propsex';
import Propsag from './Propsag/Propsag';
import './App.css';


class App extends Component {
  state={
    propsag:[
     {name:'Shaik',company:'Swiggy'},
     {name:'Khadar',company:'Swiggy'},
     {name:'Basha',company:'Swiggy'}
    ]
    }
    switchNameHandler = (newName) => {
      //console.log('Was Clicked!');
      this.setState({
        propsag:[
          {name:newName,company:'Swiggy_XL'},
          //{name:'Shaik',company:'Swiggy_XL'},
          {name:'Khadar',company:'Swiggy'},
          {name:'Basha',company:'Swiggy_Merch'}
        ]});
    }
      
    onChangedHandler = (event) => {
      //console.log('Was Clicked!');
      this.setState({
        propsag:[
          //{name:newName,company:'Swiggy_XL'},
          {name:'Shaik',company:'Swiggy_XL'},
          {name:event.target.value,company:'Swiggy'},
          {name:'Basha',company:'Swiggy_Supply'}
        ]});
    }

  render() {
    const style={
     backgroundColor:'White',
     font:'inherit',
     border:'3px solid blue',
     padding:'8px'
    }
    return (
      <div className='App'>
        <h1>JavaScript Library</h1>    

        {/* Adding components */}
        <h1> <Users /></h1> 
        <Person />   
        <Person />  
        <Person />  

        {/*Props example */ }
        <Propsex name="Shaik" /> 
        <Propsex name="Khadar">Working in Swiggy</Propsex> 
        <Propsex name="Basha" />

        {/*  State Manipulation example */}
        {/*<button onClick={this.switchNameHandler}>Switch Name</button>*/}
      <button 
        style={style}
        onClick={this.switchNameHandler.bind(this,'Shaik!!')}>Switch Name</button>
        {/*<button onClick={()=>this.switchNameHandler('Shaik Khadar')}>Switch Name</button>*/}

        {/*  State example */}
        <Propsag 
        name={this.state.propsag[0].name} 
        company={this.state.propsag[0].company}/>
        <Propsag 
        name={this.state.propsag[1].name} 
        company={this.state.propsag[1].company}
        click={this.switchNameHandler.bind(this,'Shaik!')}
        change={this.onChangedHandler}>
        Work location Bangalore
        </Propsag>
        <Propsag 
        name={this.state.propsag[2].name} 
        company={this.state.propsag[2].company}/>
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