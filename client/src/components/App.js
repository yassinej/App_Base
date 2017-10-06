import React, { Component } from 'react';
import { Router, Route, withRouter } from 'react-router-dom';

import NavBar from './NavBar';
import Landing from './Landing';
import FloatingButtons from './FloatingButtons';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import requireAuth from './auth/require_auth';
import Dashboard from './protected/Dashboard';
import Lab from './protected/Lab';
import Devices from './info/Devices';
import Doc from './info/Doc';
import history from '../helpers/history';
import { Grid } from 'semantic-ui-react';

const LocatedNavBar = withRouter(NavBar);
class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div>
					<NavBar />
					<FloatingButtons />
					<Route exact path="/" component={Landing} />
					<Route path="/doc" component={Doc} />
					<Route path="/devices" component={Devices} />
					<Route path="/dashboard" component={requireAuth(Dashboard)} />
					<Route path="/lab" component={requireAuth(Lab)} />
					<Route path="/signout" component={requireAuth(Signout)} />
					<Route path="/signin" component={Signin} />
					<Route path="/signup" component={Signup} />
				</div>
			</Router>
		);
	}
}

export default App;
