import React from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import BurgerBuilder from './container/burgerBuilder/burgerBuilder'
import Checkout from './container/checkout/checkout';
import {Route,Switch} from 'react-router-dom';


class App extends React.Component{
  render(){
    return(

      <div className='App'>
        <Layout>
          <Switch>
              <Route path="/checkout"  component={Checkout}/>      
              <Route path="/" exact component={BurgerBuilder}/>
           </Switch>
        </Layout>
      </div>

    );
  }
}

export default App;
