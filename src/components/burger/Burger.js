import React from 'react';
import BurgerIngredient from './burger ingrident/BurgerIngredient';
import './burger.css';


const burger=(props)=>{
    const transformedIngredients= Object.keys(props.ingredients);  //this is a fucntion defined in javascript not in react
    
    

    return(                                                             //it convert an object into an array with all its items as an item of new array the values of each item will not be included in it            

        <div className='Burger'>
            {console.log(transformedIngredients)}
            <BurgerIngredient type='bread-top' />
            <BurgerIngredient type='cheese' /> 
            <BurgerIngredient type='meat' />
            <BurgerIngredient type='bacon' />
            <BurgerIngredient type='salad'/>
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;