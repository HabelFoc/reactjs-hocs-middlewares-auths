import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';
import Header from './components/Header';
import Resources from './components/Resources';
import Emails from './components/Email_List';

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
		    		<Route path="/emails" component={Emails} />
		    		<Route component={() => (<center><h1 className="title has-text-warning">Not Found</h1></center>)}/>
		    	</Switch>
    		</div>
    	</BrowserRouter>
	</Provider>
 , document.querySelector('.myApp'));
