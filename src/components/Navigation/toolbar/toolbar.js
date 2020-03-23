import React from 'react';
import './toolbar.css'
import Logo from '../../logo/logo';
import NavigationItems from '../navigatio items/navigationitems';

const toolBar=(props)=>{
    return(
        <header className='Toolbar'>
            <div>MENU</div>
            <div className='Logo'>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default toolBar;