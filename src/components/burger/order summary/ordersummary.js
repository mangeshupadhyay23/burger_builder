import React from 'react';
import DangerButton from '../../UI/button/danger button';
import SuccessButton from '../../UI/button/success button';


class  OrderSummary extends React.Component{
   

   render(){
        const  ingredientsummary=Object.keys(this.props.ingredients)
            .map(igkey=>{
                return <li key={igkey   }>
                    <span style={{textTransform:'capitalize'}}
                    >{igkey}
                    </span>:{this.props.ingredients[igkey]}
                    </li>;
            }); 
    return(
            <div>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients</p>
                <ul style={{textAlign:'left'}}>
                    {ingredientsummary}
                </ul>
                <p><strong>Total Price:${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <DangerButton clicked={this.props.purchaseCancelled}>CANCEL</DangerButton>
                <SuccessButton clicked={this.props.purchaseContinued}>CONTINUE</SuccessButton> 
            </div>
        );
   }
};

export default OrderSummary;