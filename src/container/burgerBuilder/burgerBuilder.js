import React from 'react';
import './burger builder.css';
import axios from '../../axios-orders';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/build controls/build_controls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/burger/order summary/ordersummary';
import Spinner from '../../components/UI/spinner/spinner';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';


const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.7,
    meat:1.2,
    cheese:0.8

}

class BurgerBuilder extends React.Component{

    state={
        ingredients:null,   //ingredients is an object not an array so javascript cannot read individual items and values in it  
                          //so we will use a pre defined function in javascript in burger.js file
        totalPrice:4,
        purchasable:true,
        purchasing:false,
        loading:false,
        error:false
        
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('https://burger-builder-b3dc6.firebaseio.com/ingredients.json')
        .then(response=>{
            this.setState({ingredients:response.data});
        })
        .catch(error=>{this.setState({error:true})});
    }


    purchasability=(price)=>{
        if(price<=4){
            this.setState({purchasable:true})
        }
        else{
            this.setState({purchasable:false})
        }
    }


    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type]; //count of ingredients is stored as oldCount 
        const updatedCount=oldCount+1;               //when addIngredientHandler is clicked count of that type is increased by 1
        const updatedIngredients={                   //a copy of ingredient is created
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;       //count of that ingredient is updated within the copy but not in actual state  
        const priceAddition =INGREDIENT_PRICES[type];//price to be added is stored as priceAddition 
        const oldPrice=this.state.totalPrice;        //totalPrice is base price and stored as oldPrice 
        const newPrice=oldPrice + priceAddition;     //newPrice is made equal to oldPrice + price of that ingredient to be added
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice}); //now the states are actually  changed from the copy 
        this.purchasability(newPrice);
    }

    removeIngredientHandler=(type)=>{

               
                const oldCount=this.state.ingredients[type]; //count of ingredients is stored as oldCount 
                if(oldCount<=0){
                    return;
                }
                
                const updatedCount=oldCount-1;               //when addIngredientHandler is clicked count of that type is increased by 1
                const updatedIngredients={                   //a copy of ingredient is created
                    ...this.state.ingredients
                };
                updatedIngredients[type]=updatedCount;       //count of that ingredient is updated within the copy but not in actual state  
                const priceDeduction =INGREDIENT_PRICES[type];//price to be added is stored as priceAddition 
                const oldPrice=this.state.totalPrice;        //totalPrice is base price and stored as oldPrice 
                const newPrice=oldPrice - priceDeduction;     //newPrice is made equal to oldPrice + price of that ingredient to be added
                this.setState({ingredients:updatedIngredients,totalPrice:newPrice}) //now the states are actually  changed from the copy 
                this.purchasability(newPrice);
        
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    
    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }

    purchaseContinueHandler=()=>{
  
                const queryParams=[];
                for(let i in this.state.ingredients){
                    queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
                }
                queryParams.push('price='+this.state.totalPrice);
                
                const queryString= queryParams.join('&');
                this.props.history.push({
                   pathname: '/checkout',
                   search:'?'+queryString
                });
               
     }
    

    render(){
        
        let disabledInfo={...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]===0; //it will run a loop and check each key in ingredient state if disabledInfo will be less than equal to zero then diabledInfo[key] will be true or else it will be false
        };

        let orderSummary=null;
        
       
        let burger= this.state.error ? <p>Ingredients Cant be loaded</p> : <Spinner/>
        if(this.state.ingredients){
            
            burger=(
            <div>
                <Burger ingredients={this.state.ingredients}/> 
                <BuildControls
                disabled={disabledInfo}
                orderdisability={this.state.purchasable}
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                />
            </div>
            );
            if(this.state.loading){
                orderSummary=(<Spinner/>);
            }
            else{
            orderSummary=<OrderSummary 
            ingredients={this.state.ingredients} 
            purchaseCancelled={this.purchaseCancelHandler} 
            purchaseContinued={this.purchaseContinueHandler} 
            price={this.state.totalPrice}/>;}
       }
        
        
        console.log(this.state.totalPrice);
        console.log(disabledInfo);
        return(
                <div className='content'>
                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        {orderSummary}
                    </Modal>
                   {burger}
                    
                </div>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios) ;