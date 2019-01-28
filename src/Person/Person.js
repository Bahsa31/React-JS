import React from 'react';
import './Person.css';

const person = () => {
    return(
        <div className="Person">
            <h3>React Sub component</h3>
            <h4>Random Number{Math.floor(Math.random()*30)}</h4>
        </div>
    );
};

export default person;