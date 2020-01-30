import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MeetupDetails extends Component {

	state = {
		details: ''
	};

	componentDidMount() {
		this.getMeetup();
	}

	getMeetup() {
		let meetupId = this.props.match.params.id;
		axios.get(`http://localhost:3000/api/meetupzs/${meetupId}`)
			.then(response => {
				//console.log(meetupId, response);
				this.setState({ details: response.data });
			})
			.catch(err => {
				console.log(err);
			});
	}

	deleteMeetups() {
		let meetupId = this.props.match.params.id;
		axios.delete(`http://localhost:3000/api/meetupzs/${meetupId}`)
			.then(response => {
				console.log(response);
				this.props.history.push('/');
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<br />
				<Link className="btn grey" to="/">Back</Link>
				<h1>{this.state.details.name}</h1>
				<ul className="collection">
					<li className="collection-item">City: {this.state.details.city}</li>
					<li className="collection-item">Address: {this.state.details.address}</li>
				</ul>
				<Link className="btn" to={`/meetups/edit/${this.state.details.id}`}> Edit</Link>

				<button className="btn red right" onClick={this.deleteMeetups.bind(this)}>Delete</button>
			</div>
		);
	}
}

export default MeetupDetails;