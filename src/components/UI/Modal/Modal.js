import React from 'react';
import './modal.css';
import Backdrop from '../Backdrop/Backdrop';


//so when to use curly braces and when paranthesis when you have to define some jsx element only like this one then u can use paranthesis only
//but if you want to define some logic functions as well then we use curly braces and return statement
class Modal extends React.Component{
    /* {
            some logic

        return(

        );
    }*/shouldComponentUpdate(nextProps,nextState){
        if(nextProps.show!==this.props.show || nextProps.children!==this.props.children){  //this checks if next value is equal to old one or not   
        return true;
        }
        else{
           return false;
        }
    }
    UNSAFE_componentWillUpdate(){
        console.log('Modal will Update');
    }
    render(){
        return(
                <div>

                    <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>

                    <div className='Modal'  style={{transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)' , opacity:this.props.show ? '1' :'0' }}>
                        {this.props.children}
                    </div>
                </div>
        );
    }
};

export default Modal;
    
