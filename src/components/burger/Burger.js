import React from 'react';
import BurgerIngredient from './burger ingrident/BurgerIngredient';
import './burger.css';


const burger=(props)=>{
    const transformedIngredients= Object.keys(props.ingredients)         //this is a fucntion defined in javascript not in react
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
               return <BurgerIngredient key={igKey+i} type={igKey}/>;
        });
    }); 
    
    

    return(                                                             //it convert an object into an array with all its items as an item of new array the values of each item will not be included in it            

        <div className='Burger'>
            {console.log(transformedIngredients)}
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;