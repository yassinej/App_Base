import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
	renderLinks() {
		if (this.props.authenticated) {
			return [
				<li key="1" className="nav-item">
					<Link className="nav-link" to="/signout">
						Sign Out
					</Link>
				</li>,
				<li key="2" className="nav-item">
					<Link className="nav-link" to="/dashboard">
						Dashboard
					</Link>
				</li>,
				<li key="3" className="nav-item">
					<Link className="nav-link" to="/lab">
						MyLab
					</Link>
				</li>
			];
		} else {
			return [
				<li key="1" className="nav-item">
					<Link className="nav-link" to="/signin">
						Sign In
					</Link>
				</li>,
				<li key="2" className="nav-item">
					<Link className="nav-link" to="/signup">
						Sign Up
					</Link>
				</li>
			];
		}
	}
	render() {
		return (
			<div className="header">
				<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<Link className="navbar-brand" to="/">
						Brand
					</Link>

					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav ml-sm-auto mt-2 mt-lg-0">
							{this.renderLinks()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated
	};
}
export default connect(mapStateToProps)(Header);
