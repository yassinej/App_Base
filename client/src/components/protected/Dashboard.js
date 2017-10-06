import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
class Dashboard extends Component {
	render() {
		return (
			<Header as="h2" style={{ marginTop: '3em' }}>
				Your Dashboard
				<Header.Subheader>Manage your account</Header.Subheader>
			</Header>
		);
	}
}

export default Dashboard;
