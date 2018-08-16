import React, { Component } from 'react';
import axios from 'axios';

import Authentication from './authentication_hoc';


class Resources extends Component {

	componentDidMount(){
		// test my api
		
		axios({
			method: 'get',
			url: 'http://localhost:3030/api/users'
		})
		.then(res => console.log(res))
		.catch(err => console.log('ERROR: Axios Failed:',err))
	}

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