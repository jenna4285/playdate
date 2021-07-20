import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserContext from '../utils/userContext';
import '../pages/Profile.css';
import { Chip } from 'primereact/chip';
import Messages from '../components/Messages/Messages';
import './ActivityPage.css';
import API from '../utils/API';
import MiniLeafletMap from '../components/MiniLeafletMap/MiniLeafletMap';

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

	const [ comment, setComment ] = useState({
		commenter: dbUser._id,
		commentContent: ''
	});

	function handleInputChange(event) {
		const { name, value } = event.target;
		setComment({ ...comment, [name]: value });
	}

	function saveCommentHandler(e) {
		e.preventDefault();
		// props.messageSuccess()
		API.addCommentByActivityID(id, {
			commenter: dbUser._id,
			comment: comment.commentContent
		}).then(response=>(setActivityInfo(response.data)))
		
		setComment({
			commenter: dbUser._id,
			commentContent: ''
		});
	}
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

	return (
		<div className="text-center d-flex container">
			<div id="activity-page-card" className="card activity-card d-flex container">
				<div class="row">
					<h1>Activity Title</h1>
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
				<div id="comment-section" className="row">
					<div id="input-row" className="row">
						<form id="comment-form">
							<input
								name="commentContent"
								value={comment.commentContent}
								id="comment-input"
								onChange={handleInputChange}
								placeholder="Post a public comment..."
							/>
							<button className="btn btn-success" onClick={saveCommentHandler}>
								Post Comment
							</button>
						</form>
					</div>
					{activityInfo.comments ? (
						activityInfo.comments.map((item) => (
							<div className="comments-row row">
								{item.comment}<span/>{item.createdAt}<span/>{item.commenter.fullname}
							</div>
						))
					) : null}
				</div>
			</div>
		</div>
	);
}

export default ActivityPage;
