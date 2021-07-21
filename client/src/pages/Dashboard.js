import React, { useState, useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LeafletMap from '../components/LeafletMap/LeafletMap';
import Usercard from '../components/Usercard/Usercard';
import KidCardContainer from '../components/KidCardContainer/KidCardContainer';
import UserContext from '../utils/userContext';
import YourActivities from '../components/YourActivities/YourActivities';
import YourFriends from '../components/YourFriends/YourFriends';
import API from '../utils/API';
import { useAuth0 } from '@auth0/auth0-react';
import './Dashboard.css';
import { StreamChat } from 'stream-chat';
import {
	Chat,
	Channel,
	ChannelHeader,
	MessageInput,
	MessageList,
	Thread,
	Window,
	SendButton,
	useEnrichedMessages
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
const api_key = 'vpd369jcmchr';
const chatClient = StreamChat.getInstance(api_key);

function Dashboard() {
	const { dbUser } = useContext(UserContext);
	const userLat = dbUser.lat;
	const userLng = dbUser.lng;
	let bob = 4;
	let channel;

	const [ uuid, setUuid ] = useState({});
	const [ activity, setActivity ] = useState([]);
	// const { isAuthenticated, user } = useAuth0();

	useEffect(
		() => {
			getActivity();
			setUuid(null);
		},
		[ uuid ]
	);


function calculateDistance(lat1, lon1, lat2, lon2, unit) {
		if ((lat1 == lat2) && (lon1 == lon2)) {
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
			if (unit=="K") { dist = dist * 1.609344 }
			if (unit=="N") { dist = dist * 0.8684 }
			return dist;
		}
	}

	// if (dbUser.fullname) {
	// 	chatClient.connectUser(
	// 		{
	// 			id: dbUser._id,
	// 			name: dbUser.fullname,
	// 			image: dbUser.picture
	// 		},
	// 		chatClient.devToken(dbUser._id)
	// 	);
	// 	channel = chatClient.channel('messaging', 'delicate-hall-9', {
	// 		// add as many custom fields as you'd like
	// 		image: 'https://i.imgur.com/fPJrXdV.png',
	// 		name: 'Neighborhood Chat',
	// 		members: [ 'delicate-hall-9' ]
	// 	});
	// }

	const deleteActivity = (event) => {
		event.preventDefault()
		API.removeActivity(event.target.name).then((res) => setUuid(res.id));
	};

	const getActivity = () => {
		API.getActivity().then((res) => setActivity(res.data));
	};

	// function handleBtnClick(event) {
	//     event.preventDefault();
	// }
	// bring in activities array & pass to map component and activities component

	return (
		<div>
			<h1 id="dashboard-header">Your Dashboard</h1>
			<div className="container">
				<div className="row">
					<div className="col">
						<Usercard user={dbUser} />
					</div>
				</div>

				<div className="row no-gut">
					<YourFriends user={dbUser} distance={calculateDistance} />
					<div className="d-flex flex-wrap justify-content-center col-sm-12 col-md-6 col-lg-6">
						<KidCardContainer user={dbUser} />
					</div>
					<div className="row">
						<div className="col">
							{/* <Chat client={chatClient} theme="team light">
								<Channel channel={channel}>
									<Window>
										<ChannelHeader />
										<MessageList hideDeletedMessages={true} />
										<MessageInput />
										<SendButton />
									</Window>
									<Thread />
								</Channel>
							</Chat> */}
						</div>
					</div>
				</div>
				<div className="d-flex row">
					<YourActivities
						setActivity={setActivity}
						setUuid={setUuid}
						activity={activity}
						deleteActivity={deleteActivity}
					/>
				</div>
				<div>
		{userLat && <LeafletMap userLat={userLat} userLng={userLng} activity={activity}/>}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
