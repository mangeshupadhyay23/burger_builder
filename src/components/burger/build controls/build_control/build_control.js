import React from 'react';
import './build_control.css';


const buildControl=(props)=>{
    return(
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button  onClick={props.removed}>Less</button>
        <button  onClick={props.added}>More</button>
    </div> 
    );   
}

export default buildControl;