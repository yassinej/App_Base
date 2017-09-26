import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
	}
	render() {
		return <div>Sorry you are leaving so soon..</div>;
	}
}

export default connect(null, actions)(Signout);
