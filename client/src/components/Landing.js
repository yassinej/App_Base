import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		return (
			<div className="">
				<div className="Landing jumbotron jumbotron-fluid">
					<div className="container">
						<p className="display-3">Your catchy Line Here</p>
						<hr className="my-4" />
						<div className="row">
							<button
								type="button"
								className="btn btn-primary col align-self-center"
							>
								Get started
							</button>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h1>Title here</h1>
							<p>
								Prow scuttle parrel provost Sail ho shrouds spirits boom
								mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
								nest nipperkin grog yardarm hempen halter furl. Swab barque
								interloper chantey doubloon starboard grog black jack gangway
								rutters.
							</p>
							<button className="btn btn-secondary">Get More Info..</button>
						</div>
						<div className="col-md-4">
							<h1>Title here</h1>
							<p>
								Prow scuttle parrel provost Sail ho shrouds spirits boom
								mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
								nest nipperkin grog yardarm hempen halter furl. Swab barque
								interloper chantey doubloon starboard grog black jack gangway
								rutters.
							</p>
							<button className="btn btn-secondary">Get More Info..</button>
						</div>
						<div className="col-md-4">
							<h1>Title here</h1>
							<p>
								Prow scuttle parrel provost Sail ho shrouds spirits boom
								mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's
								nest nipperkin grog yardarm hempen halter furl. Swab barque
								interloper chantey doubloon starboard grog black jack gangway
								rutters.
							</p>
							<button className="btn btn-secondary">Get More Info..</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
