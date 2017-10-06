import React, { Component } from 'react';
import { Header, Grid, Card, Image } from 'semantic-ui-react';

class Devices extends Component {
	render() {
		return (
			<div>
				<Header as="h2" style={{ marginTop: '3em' }}>
					Devices
					<Header.Subheader>Check all our devices</Header.Subheader>
				</Header>
				<Grid stackable style={{ marginTop: '3em' }}>
					<Grid.Row columns={4} stretched>
						<Grid.Column>
							<Card>
								<Image src="https://cdn.pixabay.com/photo/2017/03/23/12/32/arduino-2168193_960_720.png" />
								<Card.Content>
									<Card.Header>Arduino Uno</Card.Header>
									<Card.Meta>
										<span>Board</span>
									</Card.Meta>
									<Card.Description>Arduino Uno Board</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
						<Grid.Column>
							<Card>
								<Image src="https://cdn.pixabay.com/photo/2015/02/25/11/39/robot-648622_960_720.jpg" />
								<Card.Content>
									<Card.Header>Soil Moisture</Card.Header>
									<Card.Meta>
										<span>Sensor</span>
									</Card.Meta>
									<Card.Description>Soil Moisture Sensor</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
						<Grid.Column>
							<Card>
								<Image src="https://cdn.pixabay.com/photo/2016/05/16/21/23/usb-stick-1396811_960_720.jpg" />
								<Card.Content>
									<Card.Header>Temperature & Humidity</Card.Header>
									<Card.Meta>
										<span>Sensor</span>
									</Card.Meta>
									<Card.Description>
										Temperature and Humidity Sensor
									</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
						<Grid.Column>
							<Card>
								<Image src="https://cdn.pixabay.com/photo/2015/09/20/12/18/electric-948208_960_720.jpg" />
								<Card.Content>
									<Card.Header>UltraViolet Light</Card.Header>
									<Card.Meta>
										<span>Sensor</span>
									</Card.Meta>
									<Card.Description>UV light Sensor</Card.Description>
								</Card.Content>
							</Card>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Devices;
