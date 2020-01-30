import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddMeetup extends Component {

	addMeetup(newMeetup) {
		//console.log(newMeetup);
		/* axios.post('http://localhost:3000/api/meetupzs', newMeetup)
			.then(response => {
				console.log(response);
			})
			.catch(err => console.log(err)); */

		axios.request({
			method: 'POST',
			url: 'http://localhost:3000/api/meetupzs',
			data: newMeetup
		})
			.then(response => {
				this.props.history.push('/');
				//this.props.history stores routes
			})
			.catch(err => console.log(err));;
	}

	onSubmit(e) {
		//console.log(this.refs.name.value);
		const newMeetup = {
			name: this.refs.name.value,
			city: this.refs.city.value,
			address: this.refs.address.value,
		};
		this.addMeetup(newMeetup);
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<br />
				<Link className="btn grey" to="/">Back</Link>
				<h1>Add Meetup</h1>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" name="name" ref="name" />
						<label htmlFor="name">Name</label>
					</div>
					<div className="input-field">
						<input type="text" name="city" ref="city" />
						<label htmlFor="city">City</label>
					</div>
					<div className="input-field">
						<input type="text" name="address" ref="address" />
						<label htmlFor="address">Address</label>
					</div>
					<input type="submit" value="Save" className="btn" />
				</form>
			</div>
		);
	}
}

export default AddMeetup;