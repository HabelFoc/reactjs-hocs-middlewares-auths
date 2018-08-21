import React, { Component } from 'react';
import * as actionsCreator from '../actions';
import { connect } from 'react-redux';

class App extends Component {

	componentDidMount(){

		// check auth status to access control
		if(!this.props.auth_state.authenticated){

			this.props.checkUserLoggedStatus((msg) => {
				if (msg.success === true) { 
					this.props.authenticatedUser();
				}else{
					this.props.history.push(`/?msg=${msg}`);
				}
			});
		}
	}

  render() {
  	const { location } = this.props;
  	const urlString = location.search+'\n';
  	const message = location.search.substring(urlString.indexOf('=')+1, urlString.indexOf('\n'))
    return (

    	<div className="section">
	       <div className="hero is-primary">
	       		<div className="hero-body has-text-centered">
	       			<h1 className="title">Home</h1>
	       			{location.search.search(`/[msg, error]+/`) ? <span className="subtitle has-text-dark">
	       				{message.replace(/_/g, ' ')}
	       			</span>:''}
	       			
	       		</div>
	       </div>
       </div>
    );
  }
}


const mapStateToProps = ({auth_state}) => ({
	auth_state
})


export default connect(mapStateToProps, { ...actionsCreator })(App);
