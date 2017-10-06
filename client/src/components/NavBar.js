import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	Button,
	Container,
	Divider,
	Grid,
	Icon,
	Image,
	List,
	Menu,
	Segment,
	Visibility
} from 'semantic-ui-react';

class NavBar extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return [
				<Menu.Item as={NavLink} exact to="/dashboard" key="2">
					Dashboard
				</Menu.Item>,
				<Menu.Item as={NavLink} exact to="/lab" key="3">
					MyLab
				</Menu.Item>
			];
		} else {
			return [
				<Menu.Item key="2" as={NavLink} exact to="/devices">
					Devices
				</Menu.Item>,
				<Menu.Item key="3" as={NavLink} exact to="/doc">
					Documentation
				</Menu.Item>
			];
		}
	}
	render() {
		return (
			<Container>
				<Menu fixed="top" size="large" stackable>
					<Menu.Item as={Link} to="/" header>
						App Base
					</Menu.Item>
					<Menu.Item as={NavLink} exact to="/">
						Home
					</Menu.Item>
					{this.renderLinks()}
				</Menu>
			</Container>
		);
	}
}
function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}
export default connect(mapStateToProps)(NavBar);
