import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionsCreator from '../actions';

export default function(ComposedComponent){
	class Authentication extends Component {

		componentWillMount(){

			if(!this.props.auth_state.authenticated){ 
				this.props.checkUserLoggedStatus((msg) => {
					if(msg.success === true){
						this.props.authenticatedUser();
					}else{
						this.props.history.push(`/?msg=${msg}`)
					}
				});
			}

		}

		componentWillUpdate(nextProps){ // 'nextProps'  is returning the app state
			if(!nextProps.auth_state.authenticated){ this.props.history.push('/?msg=Required_Signing_In') }
		}

		render(){
			return (this.props.auth_state.authenticated) ? <ComposedComponent {...this.props} />:false;
		}
	}

	function mapStateToProps(state){
		console.log('App State: ',state)
		return {...state};
	}

	return connect(mapStateToProps, { ...actionsCreator })(Authentication);
}