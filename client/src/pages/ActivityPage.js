import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserContext from '../utils/userContext';
import '../pages/Profile.css';
import { Chip } from 'primereact/chip';
import './ActivityPage.css';
import API from '../utils/API';
import MiniLeafletMap from '../components/MiniLeafletMap/MiniLeafletMap';
import CommentSection from '../components/CommentSection';

function ActivityPage() {
	const { dbUser } = useContext(UserContext);
	const { id } = useParams();
	const [ activityInfo, setActivityInfo ] = useState({});
	const [ attending, setAttending] = useState();

	useEffect(() => {
		getActivity(id);
		console.log(activityInfo);
	}, []);

	useEffect(() => {
		activityInfo.attendees && 
		activityInfo.attendees.forEach(attendee => {
			if(attendee._id === dbUser._id){setAttending(true)}
			else{setAttending(false)}
		})
	},[activityInfo.attendees])

	const getActivity = (data) => {
		API.getActivityById(data).then((res) => setActivityInfo(res.data));
	};

	const unattendActivity = (event) =>{
		event.preventDefault()
		API.unattendActivity({
			eventId: id,
			userId: dbUser._id
		})
		.then(getActivity(id))
		.then(setAttending(false))
	}
	const attendActivity = (event) => {
		event.preventDefault()
		API.attendActivity({
			eventId: id,
			userId: dbUser._id
		})
		.then(res => setActivityInfo({...activityInfo, attendees: activityInfo.attendees.concat(res.data)}))
		.then(setAttending(true))
	}

	function calculateDistance(lat1, lon1, lat2, lon2, unit) {
		if ((lat1 === lat2) && (lon1 === lon2)) {
			return 0;
		}
		else {
			var radlat1 = Math.PI * lat1/180;
			var radlat2 = Math.PI * lat2/180;
			var theta = lon1-lon2;
			var radtheta = Math.PI * theta/180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit==="K") { dist = dist * 1.609344 }
			if (unit==="N") { dist = dist * 0.8684 }
			return (Math.round(dist * 100) / 100)
		}
	}

	return (
		<div className="text-center d-flex container">
			<div id="activity-page-card" className="card activity-card d-flex container">
				<div class="row">
					<h1>{activityInfo.title}</h1>
					<h5>{calculateDistance(dbUser.lat, dbUser.lng, activityInfo.actLat, activityInfo.actLng, "M")} Miles Away</h5>
					<h4>{activityInfo.hostName}'s Activity</h4>
					<h4>{activityInfo.description}</h4>
					<hr />
				</div>
				<div id="map-attendees" class="row">
					<div class="col">
						{dbUser.fullname && activityInfo.attendees ? (
							<MiniLeafletMap activity={activityInfo} dbUser={dbUser} />
						) : null}
					</div>
					<div class="col">
						<div>
							<h1>Whos Going</h1>
							{activityInfo.attendees ? activityInfo.attendees[0] ? (
								activityInfo.attendees.map((item) => (
									<div>
										<Link className="no-dec" to={'/profile/' + item._id}>
											<Chip
												key={item._id}
												label={item.fullname}
												image={item.picture}
												className="friend-chip"
											/>
										</Link>
									</div>
								))
							) : (
								<h2>Be the First to RSVP</h2>
							) : null}
							{activityInfo.hostId && activityInfo.hostId._id === dbUser._id ? (
								null
							) : !attending? (
								<div className="row justify-content-center">
									<button className="btn btn-success " name={id} onClick={attendActivity}>
										Attend This Activity!
									</button>
								</div>
							) : (
								<div className="row justify-content-center">
								<button className="btn btn-warning " name={id} onClick={unattendActivity}>
									Dont Attend This Activity!
								</button>
							</div>
							)}
						</div>
					</div>
				</div>
				<hr />
				<CommentSection activityInfo = {activityInfo} id= {id}/>
			</div>
		</div>
	);
}

export default ActivityPage;
