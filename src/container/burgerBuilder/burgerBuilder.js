import React from 'react';
import './burger builder.css';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/build controls/build_controls';

class BurgerBuilder extends React.Component{

    state={
        ingredients:{        //ingredients is an object not an array so javascript cannot read individual items and values in it  
            salad:0,         //so we will use a pre defined function in javascript in burger.js file
            bacon:0,
            cheese:0,
            meat:0,
        }
    }

    render(){
        return(
                <div className='content'>
                    <Burger ingredients={this.state.ingredients}/> 
                    <BuildControls/>
                </div>
        );
    }
}

export default BurgerBuilder ;