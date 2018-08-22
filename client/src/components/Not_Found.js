import React, { Component } from 'react';
import { checkUserLoggedStatus, authenticatedUser } from '../actions';
import { connect } from 'react-redux';


class NotFound extends Component{

	componentWillMount(){
		this.props.checkUserLoggedStatus((msg) => {
			if(msg.success === true){
				this.props.authenticatedUser();
			}
		})
	}

	render(){
		return(
			<div className="section">
				<h1 className="title has-text-danger has-text-centered">Not Found</h1>
			</div>
		);
	}
}


export default connect(null, { checkUserLoggedStatus, authenticatedUser })(NotFound);