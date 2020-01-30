import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditMeetup extends Component {

	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	state = {
		id: '',
		name: '',
		city: '',
		address: '',
	};

	componentDidMount() {
		this.getMeetupDetails();
	}

	getMeetupDetails() {
		let meetupId = this.props.match.params.id;
		axios.get(`http://localhost:3000/api/meetupzs/${meetupId}`)
			.then(response => {
				this.setState({
					id: response.data.id,
					name: response.data.name,
					city: response.data.city,
					address: response.data.address
				});
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			})
	}

	onSubmit(e) {
		const updatedMeetup = {
			name: this.refs.name.value,
			city: this.refs.city.value,
			address: this.refs.address.value,
		}
		this.editMeetup(updatedMeetup);
		e.preventDefault();
	}

	editMeetup(updatedMeetup) {
		axios.request({
			method: 'PUT',
			url: `http://localhost:3000/api/meetupzs/${this.state.id}`,
			data: updatedMeetup
		})
			.then(response => {
				this.props.history.push('/');
				//this.props.history stores routes
			})
			.catch(err => console.log(err));;
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<div>
				<br />
				<Link className="btn grey" to="/">Back</Link>
				<h1>Edit Meetup</h1>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="input-field">
						<input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
						<label htmlFor="name">Name</label>
					</div>
					<div className="input-field">
						<input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange} />
						<label htmlFor="city">City</label>
					</div>
					<div className="input-field">
						<input type="text" name="address" ref="address" value={this.state.address} onChange={this.handleInputChange} />
						<label htmlFor="address">Address</label>
					</div>
					<input type="submit" value="Save" className="btn" />
				</form>
			</div>
		);
	}
}

export default EditMeetup;