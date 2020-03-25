import React from 'react';
import Logo from '../../logo/logo';
import NavigationItems from '../navigatio items/navigationitems';
import './side drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';


const sideDrawer=(props)=>{
    let attechedClasses=['SideDrawer','Close'];
    if(props.open){
        attechedClasses=['SideDrawer','Open'];
    }
    console.log(attechedClasses.join(' '))
    return(
        <div>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attechedClasses.join(' ')}>
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