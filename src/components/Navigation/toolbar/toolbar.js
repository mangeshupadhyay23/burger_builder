import React from 'react';
import './toolbar.css'
import Logo from '../../logo/logo';
import NavigationItems from '../navigatio items/navigationitems';

const toolBar=(props)=>{
    return(
        <header className='Toolbar'>
            <div>MENU</div>
            <div className='ResponsiveLogo'>
                <Logo/>
            </div>
            <nav className='DesktopOnly'>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default toolBar;