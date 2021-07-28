import React, { useState, useEffect, useContext } from 'react';
import API from '../../utils/API';
import UserContext from '../../utils/userContext';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';
import { Chip } from 'primereact/chip';
import './YourFriends.css';
import { useAuth0 } from '@auth0/auth0-react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Dropdown } from 'primereact/dropdown';

function YourFriends(props) {
	const { dbUser } = useContext(UserContext);
	const [ users, setUsers ] = useState();
	const [ filteredUsers, setFilteredUsers ] = useState([]);
	const [ searchDistance, setSearchDistance] = useState(5)
	const { isAuthenticated, user } = useAuth0();

	//current user's lat and lon
	const lat1 = dbUser.lat;
	const lon1 = dbUser.lng;

	useEffect(() => {
		getUsers();
		//  getFriends();
	}, []);

	const getUsers = async () => {
		const allUsers = await API.getUsers();
		setUsers(allUsers.data);
		setFilteredUsers(allUsers.data);
	};

	const handleChange = (e) => {
		const searchField = e.target.value;
		const userSearch = users.filter(
			(item) =>
				!item.fullname
					? item.email.toLowerCase().includes(searchField.toLowerCase())
					: item.fullname.toLowerCase().includes(searchField.toLowerCase())
		);
		setFilteredUsers(userSearch);
	};

	// const getFriends=async()=>{const myFriends = await API.getUserByEmail(user.email).then(userInfo => {
	//         console.log(userInfo.data.friends)
	//         setFriends(userInfo.data.friends);
	//     }) ;

	//     console.log("All Friends");
	//     console.log(myFriends.data);
	//     setUsers(myFriends.data)
	//     }
	const selectDistance = [
		{label: "1 Mile", value: 1},
		{label: "5 Miles", value: 5},
		{label: '15 Miles', value: 15},
		{label: '30 Miles', value: 30},
		{label: '100 Miles', value: 100},
		{label: '200 Miles', value: 200}
	];

	return (
		<div className="col mr-2">
			<div className="row no-gut">
				<div className="card">
					<h3>Your Friends</h3>
					<ScrollPanel style={{ width: '100%', height: 'min-content' }}>
						{dbUser.friends && (
							dbUser.friends.map((item) => (
								(props.distance(
									lat1,
									lon1,
									item.lat,
									item.lng,
									'M'
								) < 5 &&
								<div>
									<Link className="no-dec" to={'/profile/' + item._id}>
										<Chip
											key={item._id}
											label={`${item.fullname} - ${props.distance(
												lat1,
												lon1,
												item.lat,
												item.lng,
												'M'
											)} miles `}
											image={item.picture}
											style={{ display: 'block' }}
											className="friend-chip"
										/>
									</Link>{' '}
								</div>)
							)))}
					</ScrollPanel>
				</div>
			</div>
			<div className="row no-gut">
				<div className="card">
					<h3>Your Neighbors</h3>
					<SearchBar handleChange={handleChange} />
					<Dropdown value={searchDistance} options={selectDistance} onChange={(e) => setSearchDistance(e.value)} placeholder="Search Radius"/>
					<ScrollPanel style={{ width: '100%', height: '200px' }}>
						{filteredUsers ? (
							filteredUsers.map(
								(item) =>
									item._id !== dbUser._id && props.distance(
										lat1,
										lon1,
										item.lat,
										item.lng,
										'M'
									) < searchDistance ? (
										<div key={item._id}>
											<Link className="no-dec" to={'/profile/' + item._id}>
												<Chip
													label={`${item.fullname} - ${props.distance(
														lat1,
														lon1,
														item.lat,
														item.lng,
														'M'
													)} miles `}
													image={item.picture}
													className="friend-chip"
												/>
											</Link>
										</div>
									) : null
							)
						) : (
							<p>""</p>
						)}
					</ScrollPanel>
				</div>
			</div>
		</div>
	);
}
export default YourFriends;
