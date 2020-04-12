import React from 'react';
import './navigatio item.css';
import {NavLink} from 'react-router-dom';

const navigationItem=(props)=>{
    return(
      
            <li className='NavigationItem' ><NavLink to={props.link} exact activeClassName={'active'}>{props.children}</NavLink></li>
        
    );
}
export default navigationItem;