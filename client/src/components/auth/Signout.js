import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';
import { Container, Header } from 'semantic-ui-react';
class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
	}
	render() {
		return (
			<Container style={{ marginTop: '10em' }}>
				<Header as="h1">Sorry you are leaving so soon..</Header>
			</Container>
		);
	}
}

export default connect(null, actions)(Signout);
