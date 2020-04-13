import React from 'react';
import Order from '../../components/Order/order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/spinner/spinner';


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
            this.setState({loading:false ,orders:fetchedOrders});
           
          
        })
        .catch(err=>{
            this.setState({loading:false});
        });
    }
    render(){
        let Orders=<Spinner/>;
        if(this.state.loading===false){
            Orders=this.state.orders.map(order=>{
               return <Order 
                ingredients={order.ingredients}
                price={+order.price}
                key={order.id}/>;
            })
        }
        
        return(
            <div>
               {Orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);