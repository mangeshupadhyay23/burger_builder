import React from 'react';
import Button from '../../../components/UI/button/success button';
import './Contact Data.css';
import Spinner from '../../../components/UI/spinner/spinner';
import axios from '../../../axios-orders'


class ContactData extends React.Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
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
            customer:{
                name:'Mangesh Upadhyay',
                address:{
                    houseno :"272/32",
                    colony:'Vivek vihar',
                    district:'Karauli',
                    state:'Rajasthan'
                }
            },
            deliveryMethod:'fastest'
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
    render(){
        let form=(<form>
            <input type='text'  name='name' placeholder='Your Name'></input>
            <br/>
            <input type='email'  name='email' placeholder='Your Mail'></input>
            <br/>
            <input type='text'  name='street' placeholder='Street'></input>
            <br/>
            <input type='text'  name='postal code' placeholder='Postal Code'></input>
            <br/>
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