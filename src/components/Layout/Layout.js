import React from 'react';
import Toolbar from '../Navigation/toolbar/toolbar';
import './layout.css';
import SideDrawer from '../Navigation/side drawer/side drawer';

const layout=(props)=>(
    <div>
        <Toolbar/>
        <SideDrawer/>
        <main className='Content'>
            {props.children}
        </main>
    </div>

);
export default layout;