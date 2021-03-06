import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import './withErrorHandler.css';

const withErrorHandler=(WrappedComponent,axios)=>{    

    return class extends Component {
        state={
            error:null
        }
        componentWillMount(){
            this.requInterceptor=axios.interceptors.request.use(req=>{
                this.setState({error:null});   
                return req;             //while sending request error will be null
            });
            this.resInterceptor=axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error});               //if we got an error then state will be true
            });
        }

        componentWillUnmount(){  //this will unmount this component when the errorHandler wont be required

            axios.interceptors.request.eject(this.requInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmHandler=()=>{
            this.setState({error:null});
        }
        render(){
            return( 
                <div>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>   {/* this error emssage will be gone when clicked on backdrop cause clicked prop is defined in backdrop */}
                    <div className="error" style={{textAlign:'center'}}>Error message</div>
                    {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </div>
            );
        }
    }
}
export default withErrorHandler;