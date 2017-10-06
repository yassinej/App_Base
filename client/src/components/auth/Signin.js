import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/authActions';
import SocialLogin from './SocialLogin';
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
	Form,
	Divider
} from 'semantic-ui-react';

const validate = values => {
	const errors = {};
	if (!values.password) {
		errors.password = 'Required';
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

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		this.props.signinUser({ email, password });
	}
	renderAlert() {
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
				<Grid columns={2} stackable>
					<Grid.Row stretched>
						<Grid.Column>
							<Segment>
								<Header as="h2" textAlign="center">
									Sign In to your account
								</Header>
								<Form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
									{submitSucceeded ? this.renderAlert() : ''}
									<Container style={{ marginTop: 20 }}>
										<Button
											content="Sign In"
											type="submit"
											disabled={submitting}
											floated="left"
											primary
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
								<Container style={{ marginTop: 82 }}>
									<Header as="h4">
										Don't have an account yet <Link to="/signup">Sign Up.</Link>
									</Header>
								</Container>
							</Segment>
						</Grid.Column>
						<SocialLogin />
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		formValues: state.form.signinForm.values,
		errorMessage: state.auth.error
	};
}
export default reduxForm({
	form: 'signinForm',
	validate
})(connect(mapStateToProps, actions)(Signin));
