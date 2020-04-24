import React from 'react';
import Button from '../../../components/UI/button/success button';
import './Contact Data.css';
import Spinner from '../../../components/UI/spinner/spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/input/input';


class ContactData extends React.Component{
    state={
        orderform:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:''
            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street Name'
                },
                value:''
            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:''
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:''
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your E-mail'
                },
                value:''
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                   options:[
                       {value:'fastest',displayValue:'Fastest'},
                       {value:'cheapest',displayValue:'Cheapest'}, 
                   ]
                },
                value:''
            }
        },  
        loading:false
    }
    orderHandler=(event)=>{
        event.preventDefault();
              //alert('YOU CONTINUE!');
        this.setState({loading:true});
        const order={
            ingredients:this.props.ingredients,
            price:this.props.price,
           
        }
        axios.post('/orders.json',order)
             .then(response=>{
                this.setState({loading:false});
                this.props.history.push('/');
             })
             .catch(error=>{
                this.setState({loading:false});
             });
             
        
    }
    inputChangeHandler=(event,inputIdentifier)=>{
        const updatedOrderForm={
            ...this.state.orderform
        };
        const updatedFormElement={
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value=event.target.value;
        updatedOrderForm[inputIdentifier]=updatedFormElement;
        this.setState({orderform:updatedOrderForm});

    }
    render(){
        const formElementsArray=[];
        for (let key in this.state.orderform){
            formElementsArray.push({
                id:key,
                config:this.state.orderform[key]
            })
        }



        let form=(<form>
            {formElementsArray.map(formElement=>(
                <Input 
                 key={formElement.id}
                 elementType={formElement.config.elementType}
                 elementConfig={formElement.config.elementConfig}
                 value={formElement.config.value}
                 changed={(event)=>this.inputChangeHandler(event,formElement.id)}
                 />
            ))}
            <Button clicked={this.orderHandler}>ORDER</Button>
        </form> );
        if(this.state.loading){
            form=<Spinner style={{margin:'0px'}}/>;
        }
        
        return(
            <div className='ContactData'>
                <h4>Please Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;