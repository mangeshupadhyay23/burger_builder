import React from 'react';
import './navigation items.css';
import NavigationItem from './navigation item/navigationItem';

const navigationItems=(props)=>{
    return(
        <ul className='NavigationItems'>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            <NavigationItem link="/">CheckOut</NavigationItem>
        </ul>
    );
}
export default navigationItems;