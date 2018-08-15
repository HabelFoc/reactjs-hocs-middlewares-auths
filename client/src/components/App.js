import React, { Component } from 'react';


export default class App extends Component {
  render() {
  	const { location } = this.props;
    return (

    	<div className="section">
	       <div className="hero is-primary">
	       		<div className="hero-body has-text-centered">
	       			<h1 className="title">Home</h1>
	       			{location.search.match('error') ? <span className="subtitle has-text-warning">
	       				Please Login
	       			</span>:''}
	       			
	       		</div>
	       </div>
       </div>
    );
  }
}
