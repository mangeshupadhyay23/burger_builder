import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigatio items/navigationitems';
import './side drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer=(props)=>{
    let idEle='Close'
    if(props.open){
        idEle='Open ';
    }

    return(
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className='SideDrawer' id={idEle}>
                <div className='ResposnsiveLogo'>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    );
}

export default sideDrawer;