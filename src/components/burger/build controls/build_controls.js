import React from 'react';
import './build_controls.css';
import BuildControl from './build_control/build_control'



const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
];



const buildControls=(props)=>{
    console.log(props.disabled);
    console.log(props.orderdisability);
    return(
    <div className='BuildControls'>
        <p> Current Price:<strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl
             key={ctrl.label}
             label={ctrl.label} 
             added={()=>props.ingredientAdded(ctrl.type)} 
             removed={()=>props.ingredientRemoved(ctrl.type)}
             disabled={props.disabled[ctrl.type]}
            />//type will be used in ingredient handler funtion so it need to be passed
        ))}
        <button className='OrderButton' disabled={props.orderdisability}>ORDER NOW</button>
    </div>
    );

}

export default buildControls;