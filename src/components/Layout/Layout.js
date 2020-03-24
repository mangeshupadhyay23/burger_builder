import React from 'react';
import Toolbar from '../Navigation/toolbar/toolbar';
import './layout.css';
import SideDrawer from '../Navigation/side drawer/side drawer';

class Layout extends React.Component{
    state={
        showSideDrawer:true
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    
    render(){
        return(
    <div>
        <Toolbar/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
        <main className='Content'>  
            {this.props.children}
        </main>
    </div>

        );
    };
};
export default Layout;