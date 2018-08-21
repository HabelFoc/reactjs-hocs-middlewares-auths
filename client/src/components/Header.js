import React, { Component } from 'react';

import * as actionsCreator from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
	constructor(props){
		super(props);

		// Binding context
		this.signIn_SignOut_Button = this.signIn_SignOut_Button.bind(this);
		this.signUpButton = this.signUpButton.bind(this);
		this.handlSignOut = this.handlSignOut.bind(this);
		this.handleBurger = this.handleBurger.bind(this);

		this.state = {
			navbarExpand: false
		};
	}

	handlSignOut(authstate){

		// call 'userSignOut()' user action
		this.props.userSignOut((msg) => {
			// call 'unAuthenticatedUser()' action to un-authenticated 
			this.props.history.push(`/?msg=${msg}`)
			this.props.unAuthenticatedUser();
		});
	}


	signUpButton(){
		if(!this.props.auth_state.authenticated){
			return(
				<div className="navbar-item">
					<Link to="/signup" className="button is-primary">Sign Up</Link>	
				</div>
			);
		}
	}

	signIn_SignOut_Button(){
		if(this.props.auth_state.authenticated){
			return <button className="button is-danger" onClick={this.handlSignOut}>Sign Out</button>;
		}

		return <Link to="/signin" className="button is-info">Sign In</Link>;
	}


	// handle burger icon
	handleBurger(){
		this.setState({
			navbarExpand: !this.state.navbarExpand
		})
	}

	render(){
		const { navbarExpand } = this.state;
		return(
		<nav className="navbar">
			<div className="container">
			
			<div className="navbar-brand">
				<Link className="navbar-item" to="/"><center><h3>MyApp</h3></center></Link>

				<a role="button" className={(navbarExpand) ? 'navbar-burger is-active':'navbar-burger'} onClick={this.handleBurger} data-target="navMenu" aria-label="menu" aria-expanded="false">
				  <span aria-hidden="true"></span>
				  <span aria-hidden="true"></span>
				  <span aria-hidden="true"></span>
				</a>
			</div>

			<div className={(navbarExpand) ? 'navbar-menu is-active':'navbar-menu'} id="navMenu">
			
				<div className="navbar-start">
					<div className="navbar-item">
						<Link className="button is-primary is-outlined" to="/">Home</Link>
					</div>
					<div className="navbar-item">
						<Link className="button is-primary is-outlined" to="/resources">Resources</Link>
					</div>
					<div className="navbar-item">
						<Link className="button is-primary is-outlined" to="/users">Users</Link>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-item">
						{this.signIn_SignOut_Button()}
					</div>
					{this.signUpButton()}
				</div>
			</div>
			</div>
		</nav>
	);
	}
}


function mapStateToProps({auth_state}){
	return { auth_state }
}


export default connect(mapStateToProps, { ...actionsCreator })(Header);
