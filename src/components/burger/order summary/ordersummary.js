import React from 'react';
import './order summary.css';

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
            <ul>
                {ingredientsummary}
            </ul>
            <p>Continue to checkout?</p>
            <button className='Button'>CANCEL</button>
            <button>CONTINUE</button>
        </div>
    );
};

export default orderSummary;