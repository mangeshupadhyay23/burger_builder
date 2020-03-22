import React from 'react';
import './modal.css';
import Backdrop from '../Backdrop/Backdrop';


//so when to use curly braces and when paranthesis when you have to define some jsx element only like this one then u can use paranthesis only
//but if you want to define some logic functions as well then we use curly braces and return statement
const modal=(props)=>(
    /* {
            some logic

        return(

        );
    }*/
    <div>

        <Backdrop show={props.show} clicked={props.modalClosed}/>

        <div className='Modal'  style={{transform : props.show ? 'translateY(0)' : 'translateY(-100vh)' , opacity:props.show ? '1' :'0' }}>
            {props.children}
        </div>
    </div>

);

export default modal;
    
