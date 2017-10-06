import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Segment,
	Visibility
} from 'semantic-ui-react';

class Landing extends Component {
	render() {
		return (
			<Segment
				textAlign="center"
				style={{ minHeight: 700, padding: '1em 0em' }}
				vertical
			>
				<Container text>
					<Header
						as="h1"
						content="Imagine-a-Company"
						style={{
							fontSize: '4em',
							fontWeight: 'normal',
							marginBottom: 0,
							marginTop: '3em'
						}}
					/>
					<Header
						as="h2"
						content="Do whatever you want when you want to."
						style={{ fontSize: '1.7em', fontWeight: 'normal' }}
					/>
					<Button primary size="huge">
						Get Started
						<Icon name="right arrow" />
					</Button>
				</Container>
			</Segment>
		);
	}
}

export default Landing;
