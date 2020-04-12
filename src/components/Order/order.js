import React from 'react';
import './order.css';

const order=(props)=>{
    return(
        <div className='Order'>
            <p>Ingredients: Salad</p>
            <p>Price: <strong>$ 5.45</strong></p>
        </div>
    );
}
export default order;