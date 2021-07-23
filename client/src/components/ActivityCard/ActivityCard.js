import React, { useContext, useState, useEffect } from 'react';
import API from '../../utils/API';
import UserContext from '../../utils/userContext';
import { Link } from 'react-router-dom';
import { Chip } from 'primereact/chip';
import './ActivityCard.css'


function ActivityCard(props) {
	const { dbUser } = useContext(UserContext);
	const [ attending, setAttending] = useState();

	useEffect(() => {
		props.activity.attendees && 
		props.activity.attendees.forEach(attendee => {
			if(attendee === dbUser._id){setAttending(true); console.log("hi")}
			else{setAttending(false)}
		})
	},[props.activity.attendees])

	const unattendActivity = (event) =>{
		event.preventDefault()
		API.unattendActivity({
			eventId: props.activity._id,
			userId: dbUser._id
		})
		.then(setAttending(false))
	}
	const attendActivity = (event) => {
		event.preventDefault()
		API.attendActivity({
			eventId: event.target.name,
			userId: dbUser._id
		}).then(setAttending(true))
	}

	return (
		<div className="row">
					<div key={props.activity._id} id="activity-container" className="activity-container p-mb-3">
						<div className="row">
							<div className="row date">
								<h5 className="mt-3">{new Date(props.activity.date).toLocaleDateString()}</h5>
								<h6>{props.distance(props.activity.actLat, props.activity.actLng, dbUser.lat, dbUser.lng, 'M')} Miles Away</h6>
							</div>
							<div className="col-3">
								<h7 className="mt-3">{props.activity.location}</h7>
							</div>
							<div className="col-3">
								<h7 id="host" className="mt-3">
									Host:{' '}
									<Link className="no-dec" to={'/profile/' + props.activity.hostId._id}>
										<Chip
											key={props.activity.hostId._id}
											label={props.activity.hostId.fullname}
											image={props.activity.hostId.picture}
											className="friend-chip"
                                            style={{backgroundColor:"#1dbbd3", maxWidth:"fit-content"}}
										/>
									</Link>
								</h7>
							</div>
							<div className="col-6">
								<p style={{ textAlign: 'center', verticalAlign: 'center' }}>{props.activity.description}</p>
							</div>
							{props.activity.hostId._id === dbUser._id ? (
								<div className="row justify-content-center">
									<button className="btn btn-danger" name={props.activity._id} onClick={props.deleteActivity}>
										Delete Your Activity
									</button>
								</div>
							) : !attending? (
								<div className="row justify-content-center">
									<button className="btn btn-success " name={props.activity._id} onClick={attendActivity}>
										Attend This Activity!
									</button>
								</div>
							) : (
								<div className="row justify-content-center">
								<button className="btn btn-warning " name={props.activity._id} onClick={unattendActivity}>
									Dont Attend This Activity!
								</button>
							</div>
							)}
						</div>
					</div>
		</div>
	);
}

export default ActivityCard;
