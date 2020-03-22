import React from 'react';
import './backdrop.css';

const backdrop=(props)=>{
    console.log(props.show)
    return(
        props.show ? <div className='BackDrop' onClick={props.clicked}></div>:null


    ); 
}

export default backdrop;