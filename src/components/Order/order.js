import React from 'react';
import './order.css';

const order=(props)=>{

    const ingredients=[];

    for(let ingredientname in props.ingredients){
        ingredients.push(
            { 
                name: ingredientname ,
                amount: props.ingredients[ingredientname]
            }
        );
    }

    const ingredientOutput=ingredients.map(ig=>{
        return <span style={{textTransform:'capitalize',display:'inline-block',margin:'0 8px',border:'1px solid #ccc',padding:'5px'}}
        key={ig.name}>{ig.name} ({ig.amount}) </span>;
    })

    return(
        <div className='Order'>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
        </div>
    );
};
export default order;