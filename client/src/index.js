import React from 'react';
import ReactDOM from 'react-dom';

// Redux, React-Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// Custom Redux Middleware
import Async from './middlewares/async'; // fetch emails middleware 

// Custom Components
import App from './components/App';
import Header from './components/Header';
import Resources from './components/Resources';
import Users from './components/Users';
import AddUser from './components/Add_User';

// Styles
import '../style/style.css';

// React Router (Navigation)
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

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
