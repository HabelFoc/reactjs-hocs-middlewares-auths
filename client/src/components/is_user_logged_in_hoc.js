import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../actions';


// HOC for checking if user currently logged in,
// To restrict some page
export default function(ComposedComponent){
	class isUserSignIn extends Component{

		componentWillMount(){
			if(this.props.auth_state.authState){
				this.props.history.push('/?msg=Already_Logged_In');
			}
		}

		render(){
			return <ComposedComponent {...this.props} />;
		}
	}

	const mapStateToProps = (state) => ({
		...state
	})

	return connect(mapStateToProps, { ...actionCreators })(isUserSignIn);

}