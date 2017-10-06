import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
class Lab extends Component {
	render() {
		return (
			<Header as="h2" style={{ marginTop: '3em' }}>
				Your Lab
				<Header.Subheader>Manage your Devices</Header.Subheader>
			</Header>
		);
	}
}

export default Lab;
