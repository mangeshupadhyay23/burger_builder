import React from 'react';
import './burger builder.css';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends React.Component{

    state={
        ingredients:{        //ingredients is an object not an array so javascript cannot read individual items and values in it  
            salad:1,         //so we will use a pre defined function in javascript in burger.js file
            bacon:1,
            cheese:2,
            meat:2
        }
    }

    render(){
        return(
                <div className='content'>
                    <Burger ingredients={this.state.ingredients}/> 
                    <div>Builder control</div>
                </div>
        );
    }
}

export default BurgerBuilder ;