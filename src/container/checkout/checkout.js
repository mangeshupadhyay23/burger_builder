import React from 'react';
import CheckOutSummary from '../../components/Order/CheckoutSummary/CheckOutSummary';


class Checkout extends React.Component{
    state={
        ingredients:{
            salad: 1,
            meat: 1,
            cheese:1,
            bacon:1
        }
    }
    checkoutCancelHandler=()=>{
        this.props.history.goBack();
    }

    checkoutContinueHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckOutSummary 
                ingredients={this.state.ingredients} 
                checkoutCancelled={this.checkoutCancelHandler}
                checkoutContinued={this.checkoutContinueHandler}  
                />       
            </div>
        );
    }
}

export default Checkout ;