import React from 'react';
import './build_control.css';


const buildControl=(props)=>{
    return(
    <div className='BuildControl'>
        <div className='Label'>{props.label}</div>
        <button>Less</button>
        <button>More</button>
    </div> 
    );   
}

export default buildControl;