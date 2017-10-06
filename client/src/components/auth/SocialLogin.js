import React, { Component } from 'react';
import {
	Grid,
	Segment,
	Container,
	Header,
	Button,
	Divider,
	Icon
} from 'semantic-ui-react';
class SocialLogin extends Component {
	render() {
		return (
			<Grid.Column>
				<Segment>
					<Container>
						<Header as="h2" textAlign="center">
							Sign In with
						</Header>
						<Container style={{ marginTop: 50 }}>
							<Button
								color="google plus"
								fluid
								style={{ marginTop: 20, marginBottom: 20 }}
								size="large"
								as="a"
								href="/auth/google"
							>
								<Icon name="google plus" /> Google
							</Button>
							<Divider horizontal>Or</Divider>
							<Button
								color="facebook"
								style={{ marginTop: 20, marginBottom: 20 }}
								fluid
								size="large"
								as="a"
								href="/auth/facebook"
							>
								<Icon name="facebook" /> Facebook
							</Button>
						</Container>
					</Container>
				</Segment>
			</Grid.Column>
		);
	}
}

export default SocialLogin;
