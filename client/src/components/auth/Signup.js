import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/authActions';

const validate = values => {
	const errors = {};
	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 8) {
		errors.password = 'Must be 8 characters or less';
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = 'Required';
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = 'Password not matching';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div className="form-group">
		<label>{label}</label>
		<div>
			<input
				className="form-control"
				{...input}
				placeholder={label}
				type={type}
			/>
			{touched && (error && <span className="text-danger">{error}</span>)}
		</div>
	</div>
);

class Signup extends Component {
	handleFormSubmit({ email, password }) {
		this.props.signupUser({ email, password });
	}
	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong>
					{this.props.errorMessage}
				</div>
			);
		}
	}
	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-3" />
					<div className="col-6 align-self-center">
						<h2 className="heading text-center">Signup Page</h2>
						<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
							<Field
								name="email"
								type="email"
								component={renderField}
								label="Email"
							/>
							<Field
								name="password"
								type="password"
								component={renderField}
								label="Password"
							/>
							<Field
								name="confirmPassword"
								type="password"
								component={renderField}
								label="Confirm Password"
							/>
							{this.renderAlert()}
							<div>
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
								<button
									type="button"
									disabled={pristine || submitting}
									onClick={reset}
									className="btn btn-warning float-right"
								>
									Clear Values
								</button>
							</div>
						</form>
					</div>
					<div className="col-3" />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log('_Signup_state: ', state);
	return {
		formValues: state.form.signupForm.values,
		errorMessage: state.auth.error
	};
}
export default reduxForm({
	form: 'signupForm',
	validate
})(connect(mapStateToProps, actions)(Signup));
