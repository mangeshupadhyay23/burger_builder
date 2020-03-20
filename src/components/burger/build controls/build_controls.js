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
    return(
    <div className='BuildControls'>
        {controls.map(ctrl=>(
            <BuildControl
             key={ctrl.label}
             label={ctrl.label} 
             added={()=>props.ingredientAdded(ctrl.type)} 
             removed={()=>props.ingredientRemoved(ctrl.type)}
            />//type will be used in ingredient handler funtion so it need to be passed
        ))}

    </div>
    );

}

export default buildControls;