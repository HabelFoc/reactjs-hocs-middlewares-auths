import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../actions';


// HOC for checking if user currently logged in,
// To restrict some page
// Only show page if authenticated
export default function(ComposedComponent){
	class isUserSignIn extends Component{

		componentWillMount(){
			if(this.props.auth_state.authenticated){
				// check auth localy
				this.props.history.push('/?msg=Already_Logged_In');
			}else{
				// check auth from server
				this.props.checkUserLoggedStatus((msg) => {
					if(msg.success === true){
						this.props.authenticatedUser();
						this.props.history.push('/?msg=Already_Logged_In');
					}
				});
			}
		}

		render(){
			return (this.props.auth_state.authenticated) ? <div />:<ComposedComponent {...this.props} />;
		}
	}

	const mapStateToProps = (state) => ({
		...state
	})

	return connect(mapStateToProps, { ...actionCreators })(isUserSignIn);

}