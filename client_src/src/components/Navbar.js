import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Meetups extends Component {
	render() {
		return (
			<div>
				<nav className="blue darken-3">
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo">Meetupz</Link>
						<span data-target="mobile-demo" className="sidenav-trigger">
							<i className="fa fa-bars fa-2x"></i>
						</span>
						<ul className="right hide-on-med-and-down">
							<li>
								<Link to="/"><i className="fa fa-users"></i> Meetups</Link>
							</li>
							<li>
								<Link to="/about"><i className="fa fa-question-circle"></i> About</Link>
							</li>
						</ul>
						<ul className="sidenav" id="mobile-demo">
							<li>
								<Link to="/"><i className="fa fa-users"></i> Meetups</Link>
							</li>
							<li>
								<Link to="/meetups/add"><i className="fa fa-plus"></i> Add Meetups</Link>
							</li>
							<li>
								<Link to="/about"><i className="fa fa-question-circle"></i> About</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Meetups;