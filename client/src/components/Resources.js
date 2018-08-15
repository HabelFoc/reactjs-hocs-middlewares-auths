import React, { Component } from 'react';

import Authentication from './authentication_hoc';


class Resources extends Component {

	render(){
		return(
			<div className="section">
				<div className="hero is-primary">
		       		<div className="hero-body">
		       			<h1 className="title has-text-centered">Resources</h1>
		       		</div>
		   		</div>
	       </div>
		);
	}
	
}



export default Authentication(Resources);