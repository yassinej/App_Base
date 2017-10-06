import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const FloatingStyle = {
	position: 'fixed',
	margin: '2em',
	bottom: '0px',
	right: '0px',
	animation: 'back-to-docs 1.5s ease-in-out infinite',
	zIndex: 6
};
class FloatingButtons extends Component {
	renderButtons() {
		if (this.props.authenticated) {
			return (
				<Button as={NavLink} exact to="/signout">
					Sign Out
				</Button>
			);
		} else {
			return [
				<Button primary key="1" as={NavLink} exact to="/signin">
					Sign In
				</Button>,
				<Button secondary key="2" as={NavLink} exact to="/signup">
					Sign Up
				</Button>
			];
		}
	}
	render() {
		return <div style={FloatingStyle}>{this.renderButtons()}</div>;
	}
}
function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}

export default connect(mapStateToProps)(FloatingButtons);
