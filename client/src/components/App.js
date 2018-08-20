import React, { Component } from 'react';


export default class App extends Component {
  render() {
  	const { location } = this.props;
  	const urlString = location.search+'\n';
  	const message = location.search.substring(urlString.indexOf('=')+1, urlString.indexOf('\n'))
    return (

    	<div className="section">
	       <div className="hero is-primary">
	       		<div className="hero-body has-text-centered">
	       			<h1 className="title">Home</h1>
	       			{location.search.search(`/[msg, error]+/`) ? <span className="subtitle has-text-warning">
	       				{message.replace(/_/g, ' ')}
	       			</span>:''}
	       			
	       		</div>
	       </div>
       </div>
    );
  }
}
