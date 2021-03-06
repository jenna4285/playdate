import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Usercard from '../components/Usercard/Usercard';
import CurrentProfileCard from '../components/CurrentProfileC/CurrentProfileC';
import MiniCardContainer from "../components/MiniCardContainer/MiniCardContainer"
import UserContext from '../utils/userContext';
import '../pages/Profile.css';
import API from '../utils/API';
import { Toast } from 'primereact/toast';
import ActivityCard from '../components/ActivityCard/ActivityCard';

function Friendprofile() {
	const { dbUser } = useContext(UserContext);
	const { user } = useAuth0();

	let { id } = useParams();
	const [ profileInfo, setProfileInfo ] = useState({});
	const [ isFriend, setIsFriend ] = useState(false);
	const toast = useRef(null);

	useEffect(() => {
		getProfile(id);
		setIsFriend(false);
		dbUser.friends &&
			dbUser.friends.forEach((friend) => {
				if (friend._id === id) {
					setIsFriend(true);
				}
			});
	}, []);

	function displaySuccess() {
		toast.current.show({ severity: 'success', summary: 'Success!', detail: 'Friend Added', life: 3000 });
	}

	function displayError() {
		toast.current.show({ severity: 'error', summary: 'Success!', detail: 'Friend Removed', life: 3000 });
	}

	function messageSuccess() {
		toast.current.show({ severity: 'success', summary: 'Success!', detail: 'Message sent!', life: 3000 });
	}

	const getProfile = (get) => {
		API.getUser(get).then((res) => setProfileInfo(res.data));
	};

	const addFriend = (event) => {
		event.preventDefault();
		displaySuccess();
		API.addKidByEmail({
			email: user.email,
			push: {
				friends: profileInfo._id
				//  {
				// id: profileInfo._id,
				// name: profileInfo.fullname,
				// picture: profileInfo.picture
				// }
			}
		}).then(setIsFriend(true));
	};

	const removeFriend = (event) => {
		event.preventDefault();
		displayError();
		API.removeFriend({
			email: user.email,
			id: profileInfo._id
		}).then(setIsFriend(false));
	};

  function calculateDistance(lat1, lon1, lat2, lon2, unit) {
		if (lat1 == lat2 && lon1 == lon2) {
			return 0;
		} else {
			var radlat1 = Math.PI * lat1 / 180;
			var radlat2 = Math.PI * lat2 / 180;
			var theta = lon1 - lon2;
			var radtheta = Math.PI * theta / 180;
			var dist =
				Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180 / Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit == 'K') {
				dist = dist * 1.609344;
			}
			if (unit == 'N') {
				dist = dist * 0.8684;
			}
			return Math.round(dist * 100) / 100;
		}
	}

	return (
		<div className="container">
			<Toast ref={toast} />
			<div className="main-body profile-body">
				<div className="row gutters-sm">
					<div className="col-md-4 mb-3">
						<Usercard user={profileInfo} messageSuccess={messageSuccess} />
						<div className="align-btn">
							{id !== dbUser._id ? !isFriend ? (
								<button className="btn btn-light" onClick={addFriend}>
									Add Friend
								</button>
							) : (
								<button className="btn btn-light" onClick={removeFriend}>
									Remove Friend
								</button>
							) : null}
						</div>
					</div>
					<div className="col-md-8">
						<CurrentProfileCard user={profileInfo} />
						<div className="row gutters-sm">
						<MiniCardContainer kidList={profileInfo.child} />

						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-12 col-md-12 col-lg-12">
				<div className="card">
					<h1 className="activities">{profileInfo.fullname}'s Activities</h1>
					<div className="col">
						{profileInfo.activities && profileInfo.activities.length ? (
							profileInfo.activities.map((data) => (
								<Link className="activity-link" to={'/activity/' + data._id}>
									<ActivityCard activity={data} distance={calculateDistance} />
								</Link>
							))
						) : (
							<h3>No upcoming activities</h3>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Friendprofile;
