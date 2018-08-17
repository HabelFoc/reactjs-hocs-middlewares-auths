import React, { Component } from 'react';
import { connect } from 'react-redux';

import Authentication from './authentication_hoc';

class Users extends Component {

	componentWillMount(){
		// fetch emails & pass callback (calling an action again)
		this.props.fetchUsers(() => { this.props.fetchUsers(() => console.log('fetching successful')) } );
	}

	renderUser(user){
		const company = (user.website !== undefined) ? user.website:user.company;
		return (
			<div className="card" key={user._id}>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<div className="media-content">
								<p className="title is-4">{user.username}</p>
								<p className="title is-4">{company}</p>
								<a href="javascript:void(0)">{user.email}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="section container">
				{this.props.users.map(this.renderUser)}							
			</div>
		);
	}
}


export default Authentication(Users);