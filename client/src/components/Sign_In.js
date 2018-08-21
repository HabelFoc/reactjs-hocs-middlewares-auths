import React, { Component } from 'react';

import IsUserLoggedIn from './is_user_logged_in_hoc';
import { Link } from 'react-router-dom';


class SignIn extends Component {

	state = {
		email: '',
		password: ''
	}

	handleOnChange(e){

		this.setState({
			[e.target.name]: e.target.value
		})

	}

	handleOnSubmit(e){
		e.preventDefault();

		console.log(this.state);
		// call 'userSignIn' action to perform signing function
		// pass user form data,
		// upon successful, redirect to home page
		this.props.userSignIn({...this.state}, (msg) => { 
			this.props.authenticatedUser();
			this.props.history.push(`/?msg=${msg}`);
		});
	}

	render(){
		return(
			<div className="container">
				<div className="section">
					<div className="columns">
						<div className="column is-8 is-offset-2">
							<form className="field" onSubmit={this.handleOnSubmit.bind(this)}>

								<div className="field">
									<label className="label">Email</label>
									<div className="control has-icons-left has-icons-right">
										<input type="email" onChange={this.handleOnChange.bind(this)} name="email" className="input is-medium" required autoComplete="off" />
										<span className="icon is-small is-left">
											<i className="fas fa-envelope"></i>
										</span>
									</div>
								</div>

								<div className="field">
									<label className="label">Password</label>
									<div className="control has-icons-left has-icons-right">
										<input type="password" onChange={this.handleOnChange.bind(this)} name="password" className="input is-medium" required autoComplete="off" />
										<span className="icon is-small is-left">
											<i className="fas fa-key"></i>
										</span>
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
				</div>
			</div>
		);
	}
}


export default IsUserLoggedIn(SignIn);