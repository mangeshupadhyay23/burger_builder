import React from 'react';
import './toolbar.css'
import Logo from '../../logo/logo';
import NavigationItems from '../navigatio items/navigationitems';
import DrawerToggle from '../side drawer/drawer toggle/drawerToggle';

const toolBar=(props)=>{
    return(
        <header className='Toolbar'>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className='ResponsiveLogo' style={{alignItems:'center'}}>
                <Logo/>
            </div>
            <nav className='DesktopOnly'>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default toolBar;