import React from 'react';
import Layout from './components/Layout/Layout'
import './App.css';
import BurgerBuilder from './container/burgerBuilder/burgerBuilder'

class App extends React.Component{
  render(){
    return(

      <div className='App'>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>

    );
  }
}

export default App;
