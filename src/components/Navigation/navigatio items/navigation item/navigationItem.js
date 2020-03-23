import React from 'react';
import './navigatio item.css';

const navigationItem=(props)=>{
    return(
      
            <li className='NavigationItem' ><a href={props.link}>{props.children}</a></li>
        
    );
}
export default navigationItem;