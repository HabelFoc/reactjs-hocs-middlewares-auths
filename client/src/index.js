import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';
import Header from './components/Header';
import Resources from './components/Resources';
import Users from './components/Users';
import AddUser from './components/Add_User';

import '../style/style.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// my redux middleware
import Async from './middlewares/async'; // fetch emails middleware 

const createStoreWithMiddleware = applyMiddleware(Async)(createStore); // pass 'Async' for custom middleware

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
    		<div>
	    		<Header />
		    	<Switch>
		    		<Route exact path="/" component={App} />
		    		<Route path="/resources" component={Resources} />
		    		<Route path="/adduser" component={AddUser} />
		    		<Route path="/users" component={Users} />
		    		<Route component={() => (<center><h1 className="title has-text-warning">Not Found</h1></center>)}/>
		    	</Switch>
    		</div>
    	</BrowserRouter>
	</Provider>
 , document.querySelector('.myApp'));
