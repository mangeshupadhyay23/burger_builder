import React from 'react';
import Burger from '../../burger/Burger';
import DangerButton from '../../UI/button/danger button';
import SuccessButton from '../../UI/button/success button';
import './checoutsummary.css';


const checkOutSummary=(props)=>{

    return(
        <div className='CheckOutSummary'>
            <h1>We Hope You Will Like It</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <DangerButton clicked={props.checkoutCancelled}>CANCEL</DangerButton>
            <SuccessButton clicked={props.checkoutContinued}>CONTINUE</SuccessButton>   
        </div>
    );

}

export default checkOutSummary;