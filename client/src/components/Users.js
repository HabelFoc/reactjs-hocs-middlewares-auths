import React, { Component } from 'react';
import { connect } from 'react-redux';

import Authentication from './authentication_hoc';

class Users extends Component {
	constructor(props){
		super(props);

		this.renderUser = this.renderUser.bind(this)
		this.onModalConfirm = this.onModalConfirm.bind(this)
		this.onModalCancel = this.onModalCancel.bind(this)

		this.state = {
			modal: false,
			toDeleteUser: ''
		}
	}

	componentWillMount(){
		// fetch users data
		this.props.fetchUsers();
	}

	onModalConfirm(){
		this.setState({ modal: false })
		// performing deleting user from database
		// upon successful, request fetching users again and re-render
		this.props.deleteUser(this.state.toDeleteUser, (msg) => { 
			this.props.history.push(`/users/?msg=${msg}`)
			this.props.fetchUsers(); 
		});
	}

	onModalCancel(){
		this.setState({ modal: false })
	}

	handleDeleteUser(userId){
		this.setState({ modal: true, toDeleteUser: userId })
	}


	renderUser(user){
		const company = (user.website !== undefined) ? user.website:user.company;
		return (
			<div className="card" key={user._id}>
				<div className="card-content">
					<div className="media">
						<div className="media-left">
							<div className="content">
								<div className="media-content">
									<p className="title is-4">Username: {user.username}</p>
									<p className="title is-4">Company: {company}</p>
									<a href="javascript:void(0)">Email: {user.email}</a>
								</div>
							</div>

						<div className="card-footer">
							<a className="card-footer-item button is-danger" onClick={this.handleDeleteUser.bind(this, user._id)}>Delete</a>
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
				{(this.props.users == undefined || this.props.users.length == 0) ? <div className="title has-text-danger">Loading...</div>:this.props.users.map(this.renderUser)}
				<div className={(this.state.modal) ? 'modal is-active':'modal'}>

				  <div className="modal-background"></div>

				  	<div className="modal-content">
				  		<div className="modal-card">
					   	<header className="modal-card-head has-text-centered">
					   		<p className="modal-card-title has-text-info">Are You Sure?</p>
					   	</header>

					   	<footer className="modal-card-foot">
					      <button className="button is-success" onClick={this.onModalConfirm}>Confirm</button>
					      <button className="button is-danger" onClick={this.onModalCancel}>Cancel</button>
					  	</footer>
					  </div>
				  	</div>
					  
					  
				</div>							
			</div>
		);
	}
}


export default Authentication(Users);