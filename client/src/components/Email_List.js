import React, { Component } from 'react';
import { fetchEmails } from '../actions';
import { connect } from 'react-redux';

import Authentication from './authentication_hoc';

class EmailList extends Component {

	renderUser(user){
		const company = (user.website !== undefined) ? user.website:user.company;
		return (
			<div className="card" key={user.id}>
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
				{this.props.email_list.map(this.renderUser)}							
			</div>
		);
	}
}


export default Authentication(EmailList);