import React from 'react';

const Propsex = (Props)=>{
    return (
        <div>
        <h1>My name is {Props.name}</h1>
        <p>{Props.children}</p>
        </div> 
    );
}

export default Propsex;