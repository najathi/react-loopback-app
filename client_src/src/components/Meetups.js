import React, { Component } from 'react';
import axios from 'axios';

import MeetupItem from './MeetupItem';

class Meetups extends Component {

	state = {
		meetups: []
	}

	componentDidMount() {
		this.getMeetUps();
	}

	getMeetUps() {
		axios.get('http://localhost:3000/api/meetupzs')
			.then(response => {
				this.setState({ meetups: response.data }, () => {
					//console.log(this.state) 
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		/* const meetupItems = this.state.meetups.map((meetup, i) => {
			return (<li className="collection-item" key={i}>{meetup.name}</li>);
		}); */
		const meetupItems = this.state.meetups.map((meetup, i) => {
			return (
				<MeetupItem className="collection-item" item={meetup} key={i}></MeetupItem>);
		});
		return (
			<div>
				<h1>Meetups</h1>
				<ul className="collection">
					{meetupItems}
				</ul>
			</div>
		);
	}
}

export default Meetups;