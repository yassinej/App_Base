import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import requireAuth from './auth/require_auth';
import Admin from './protected/Admin';
import Dashboard from './protected/Dashboard';
import Lab from './protected/Lab';
import history from '../helpers/history';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route path="/signin" component={Signin} />
					<Route path="/signout" component={requireAuth(Signout)} />
					<Route path="/signup" component={Signup} />
					<Route path="/dashboard" component={requireAuth(Dashboard)} />
					<Route path="/admin" component={requireAuth(Admin)} />
					<Route path="/lab" component={requireAuth(Lab)} />
				</div>
			</Router>
		);
	}
}

export default App;
