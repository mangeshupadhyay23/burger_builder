import React from 'react';
import BurgerIngredient from './burger ingrident/BurgerIngredient';
import './burger.css';


const burger=(props)=>{
    const transformedIngredients= Object.keys(props.ingredients)         //this is a fucntion defined in javascript not in react
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
               return <BurgerIngredient key={igKey+i} type={igKey}/>;    //we made an array of ingredients i.e.,['salad','meat','cheese','bacon']  and each element of this array will be used as igKey one by one like a loop using each value of array one by one
        });                                                              //then we used another js function Array(i) which creates an array containing i elements the value of these element may be garbage and unnecessary 
    });                                                                  //so we used the values assigned to the igredients as i and hence we obtained an array of cotaining number of elements equal to the value of ingredients/object 
    //then we assign the value of value of igKey that is ingreduent name as type and the DOM will be called as many times as much elements are present in that array of that specific ingredient and hence we get unique key eg. cheese0,cheese1 for type cheese                                                                     
    

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