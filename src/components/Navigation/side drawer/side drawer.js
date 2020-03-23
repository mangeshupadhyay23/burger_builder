import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigatio items/navigationitems';
import './side drawer.css';


const sideDrawer=(props)=>{


    return(
        <div className="SideDrawer">
            <div className='Logo'>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}

export default sideDrawer;