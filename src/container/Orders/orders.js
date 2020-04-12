import React from 'react';
import Order from '../../components/Order/order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';


class Orders extends React.Component{
    state={
        orders:[],
        loading:true
    }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res=>{
            const fetchedOrders=[];
            for(let key in res.data){
                fetchedOrders.push({
                   ...res.data[key],
                   id:key
                });

            }
            this.setState({loading:false});
          
        })
        .catch(err=>{
            this.setState({loading:false});
        });
    }
    render(){
        return(
            <div>
               {this.state.orders.map(order=>(
                   <Order/>
               ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);