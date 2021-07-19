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

	useEffect(() => {
		getActivity(id);
		console.log(activityInfo);
	}, []);

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
		// props.messageSuccess()
		API.addCommentByActivityID(id, {
			commenter: dbUser._id,
			comment: comment.commentContent
		});
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
						</div>
					</div>
				</div>
				<hr />
				<div id="comments-row" className="row">
					<div id="comment-row" className="row">
						<form id="comment-form">
							<input
								name="commentContent"
								value={comment.commentContent}
								id="comment-input"
								onChange={handleInputChange}
								placeholder="Post a public comment..."
							/>
							<button className="btn btn-success" onClick={saveCommentHandler}>Post Comment</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ActivityPage;
