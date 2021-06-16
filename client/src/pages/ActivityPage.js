import React, { useContext } from 'react';
import UserContext from '../utils/userContext';
import '../pages/Profile.css';
import Messages from '../components/Messages/Messages';
import './ActivityPage.css';

function ActivityPage() {
	const { dbUser } = useContext(UserContext);

	return (
		<div className="text-center">
			<div id="activity-page-card" className="card activity-card d-flex container">
				<div class="row">
					<h1>Activity Title</h1>
					<h4>Host</h4>
					<h4>Lorem ipsum dolorem sipsum </h4>
                    <hr/>
				</div>
				<div id="map-attendees" class="row">
					<div class="col">
						<h1>MAP GOES HERE</h1>
					</div>
					<div class="col">
						<h1>ATTENDEES</h1>
					</div>
				</div>
                <hr/>
        <div id="comments-row" className="row">
        <button className="btn btn-success">Post Comment</button>
        </div>
			</div>
		</div>
	);
}

export default ActivityPage;
