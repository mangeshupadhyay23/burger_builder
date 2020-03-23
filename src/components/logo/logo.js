import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import './logo.css';

const logo=(props)=>{
    return(
        <div className='Logo' style={{height:props.height}}>
            <img src={burgerLogo} alt="My Burger Builder"></img>
        </div>
    );
}

export default logo;