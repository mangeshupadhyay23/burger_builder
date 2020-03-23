import React from 'react';
import DangerButton from '../../UI/button/danger button';
import SuccessButton from '../../UI/button/success button';

const orderSummary=(props)=>{
    const  ingredientsummary=Object.keys(props.ingredients)
            .map(igkey=>{
                return <li key={igkey   }>
                    <span style={{textTransform:'capitalize'}}
                    >{igkey}
                    </span>:{props.ingredients[igkey]}
                    </li>;
            }); 

    return(
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul style={{textAlign:'left'}}>
                {ingredientsummary}
            </ul>
            <p><strong>Total Price:${props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <DangerButton clicked={props.purchaseCancelled}>CANCEL</DangerButton>
            <SuccessButton clicked={props.purchaseContinued}>CONTINUE</SuccessButton> 
        </div>
    );
};

export default orderSummary;