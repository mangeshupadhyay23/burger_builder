import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import './logo.css';

const logo=(props)=>{
    return(
        <div className='Logo'>
            <img src={burgerLogo} alt="My Burger Builder"></img>
        </div>
    );
}

export default logo;