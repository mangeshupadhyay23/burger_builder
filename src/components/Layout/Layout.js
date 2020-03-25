import React from 'react';
import Toolbar from '../Navigation/toolbar/toolbar';
import './layout.css';
import SideDrawer from '../Navigation/side drawer/side drawer';

class Layout extends React.Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false});
    }
    //sideDrawerToggleHandler=()=>{
    //    this.setState({showSideDrawer: !this.state.showSideDrawer});   this method has a flaw that it uses previous state which means this can cause some errors sometime
    //}

    drawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return{
                showSideDrawer:!prevState.showSideDrawer
            };
        });
    };

    
    render(){
        return(
    <div>
        <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
        <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} />
        <main className='Content'>  
            {this.props.children}
        </main>
    </div>

        );
    };
};
export default Layout;