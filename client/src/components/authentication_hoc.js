import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionsCreator from '../actions';

export default function(ComposedComponent){
	class Authentication extends Component {

		componentWillMount(){

			if(!this.props.auth_state){ this.props.history.push('/?error=PleaseLogin') }

			// fetch emails & pass callback (calling an action again)
			this.props.fetchEmails(() => { this.props.fetchEmails(() => console.log('fetching successful')) } );

		}

		componentWillUpdate(nextProps){ // 'nextProps'  is returning the app state
			if(!nextProps.auth_state){ this.props.history.push('/?error=PleaseLogin') }
		}

		render(){
			return <ComposedComponent {...this.props} />;
		}
	}

	function mapStateToProps(state){
		return {...state};
	}

	return connect(mapStateToProps, { ...actionsCreator })(Authentication);
}