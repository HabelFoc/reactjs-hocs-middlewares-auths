import React, { Component } from 'react';

import IsUserLoggedIn from './is_user_logged_in_hoc';
import { Link } from 'react-router-dom';


class SignUp extends Component {
	state = {
		username: '',
		email: '',
		company: '',
		password: ''
	};

	handleOnChange(e){
		const value = e.target.value;
		this.setState({
			[e.target.name]: value
		})
	}

	handleSubmit(e){
		e.preventDefault();
		// sent to database
		// upon successful, redirect to home page
		this.props.signUp({
			...this.state
		}, (msg) => { 

			// call 'authenticatedUser()' action to authenticated
			this.props.authenticatedUser();
			this.props.history.push(`/?msg=${msg}`) 
		});
	}



	render() {
		return(
			<div className="container">
				<div className="section">
					<form className="field" onSubmit={this.handleSubmit.bind(this)}>

						<div className="field">
							<label className="label">Username</label>
							<div className="control has-icons-left has-icons-right">
								<input onChange={this.handleOnChange.bind(this)} type="text" name="username" className="input is-danger is-medium" placeholder="username" required autoComplete="off" />
								<span className="icon is-small is-left">
							      <i className="fas fa-envelope"></i>
							    </span>
							    <span className="icon is-small is-right">
							      <i className="fas fa-exclamation-triangle"></i>
							    </span>
							    <p className="help is-info">This field is required</p>
							</div>
						</div>
						
						<div className="field">
							<label className="label">Email</label>
							<div className="control has-icons-left has-icons-right">
								<input onChange={this.handleOnChange.bind(this)} type="email" name="email" className="input is-success is-medium" placeholder="email" required autoComplete="off" />
								<span className="icon is-small is-left">
							      <i className="fas fa-user"></i>
							    </span>
							    <span className="icon is-small is-right">
							      <i className="fas fa-check"></i>
							    </span>
							    <p className="help is-info">This field is required</p>
							</div>
						</div>
						
						<div className="field">
							<label className="label">Company/Website</label>
							<div className="control has-icons-left has-icons-right">
								<input onChange={this.handleOnChange.bind(this)} type="text" name="company" className="input is-medium" placeholder="email" required autoComplete="off" />
								<span className="icon is-small is-left">
									<i className="fas fa-industry"></i>
								</span>
								<span className="icon is-small is-right">
							      <i className="fas fa-check"></i>
							    </span>
							    <p className="help is-info">This field is required</p>
							</div>
						</div>

						<div className="field">
							<label className="label">Password</label>
							<div className="control has-icons-left has-icons-right">
								<input onChange={this.handleOnChange.bind(this)} type="password" name="password" className="input is-danger is-medium" placeholder="password" required autoComplete="off" />
								<span className="icon is-small is-left">
							      <i className="fas fa-key"></i>
							    </span>
							    <span className="icon is-small is-right">
							      <i className="fas fa-exclamation-triangle"></i>
							    </span>
							    <p className="help is-info">This field is required</p>
							</div>
						</div>
						
						<div className="field is-grouped">
							<div className="control">
								<button className="button is-success" type="submit">Submit</button>
							</div>
							<div className="control">
								<Link to="/" className="button is-danger">Cancel</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
			
		);
	}
}


export default IsUserLoggedIn(SignUp);