import React from 'react';

const Propsag = (Props)=>{
    return (
        <div>
        <h1 onClick={Props.click}> My name is {Props.name}, working in {Props.company}</h1>
        <p>{Props.children}</p>
        <input type='text' onChange={Props.change} />
       </div> 
    );
}

export default Propsag;