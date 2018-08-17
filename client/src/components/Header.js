import React, { Component } from 'react';

import { toggleAuthentication } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
	state = {
		navbarExpand: false
	}

	componentWillMount(){
	}

	handleToggleAuth(authstate){
		// changing app auth state
		this.props.toggleAuthentication(authstate);
	}

	loginButton(){
		if(this.props.auth_state){
			return <button className="button is-danger" onClick={this.handleToggleAuth.bind(this, false)}>Logout</button>;
		}

		return <button className="button is-info" onClick={this.handleToggleAuth.bind(this, true)}>Login</button>;
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

				<a role="button" className={(navbarExpand) ? 'navbar-burger is-active':'navbar-burger'} onClick={this.handleBurger.bind(this)} data-target="navMenu" aria-label="menu" aria-expanded="false">
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
						<Link className="button is-primary is-outlined" to="/adduser">Add User</Link>
					</div>
					<div className="navbar-item">
						<Link className="button is-primary is-outlined" to="/users">Users</Link>
					</div>
				</div>
				<div className="navbar-end">
					<div className="navbar-item">
						{this.loginButton()}
					</div>
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


export default connect(mapStateToProps, { toggleAuthentication })(Header);
