import React from 'react';
import './modal.css';


//so when to use curly braces and when paranthesis when you have to define some jsx element only like this one then u can use paranthesis only
//but if you want to define some logic functions as well then we use curly braces and return statement
const modal=(props)=>(
    /* {
            some logic

        return(

        );
    }*/

    <div className='Modal'>
        {props.children}
    </div>


);

export default modal;
    
