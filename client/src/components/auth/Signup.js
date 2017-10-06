import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/authActions';
import {
	Button,
	Container,
	Label,
	Grid,
	Header,
	Icon,
	Segment,
	Image,
	Message,
	Form
} from 'semantic-ui-react';

const validate = values => {
	const errors = {};
	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 8) {
		errors.password = 'Must be 8 characters or More';
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

const renderField = ({
	input,
	label,
	type,
	icon,
	meta: { touched, error }
}) => (
	<div>
		<Form.Input
			fluid
			icon={icon}
			{...input}
			iconPosition="left"
			placeholder={label}
			label={label}
			type={type}
			style={{ marginTop: 20, marginBottom: 10 }}
		/>
		{touched &&
			(error && (
				<Message negative size="mini">
					<Message.Header>{error}</Message.Header>
				</Message>
			))}
	</div>
);

class Signup extends Component {
	handleFormSubmit({ email, password }) {
		this.props.signupUser({ email, password });
	}
	renderAlert() {
		console.log('render alert ', this.props.errorMessage);
		if (this.props.errorMessage) {
			return (
				<Message negative size="small">
					<Message.Header>{this.props.errorMessage}</Message.Header>
				</Message>
			);
		}
	}
	render() {
		const {
			handleSubmit,
			pristine,
			reset,
			submitting,
			submitSucceeded
		} = this.props;
		return (
			<Container style={{ marginTop: '10em' }}>
				<Grid columns="equal" style={{ height: '100%' }}>
					<Grid.Row stretched>
						<Grid.Column />

						<Grid.Column width={8} style={{ maxWidth: 450, marginTop: 20 }}>
							<Segment>
								<Header as="h2" textAlign="center">
									Sign Up a new account
								</Header>
								<Form
									onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
									size="large"
								>
									<Field
										name="email"
										type="email"
										component={renderField}
										label="Email"
										icon="user"
									/>
									<Field
										name="password"
										type="password"
										component={renderField}
										label="Password"
										icon="lock"
									/>
									<Field
										name="confirmPassword"
										type="password"
										component={renderField}
										label="Confirm Password"
										icon="lock"
									/>
									{submitSucceeded ? this.renderAlert() : ''}
									<Container style={{ marginTop: 20 }}>
										<Button
											content="Sign Up"
											type="submit"
											disabled={submitting}
											color="black"
											floated="left"
										/>

										<Button
											content="Clear values"
											disabled={pristine || submitting}
											onClick={reset}
											color="grey"
											floated="right"
										/>
									</Container>
								</Form>
							</Segment>
						</Grid.Column>
						<Grid.Column />
					</Grid.Row>
				</Grid>
			</Container>
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
