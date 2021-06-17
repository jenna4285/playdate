<<<<<<< HEAD
import React, {useContext} from "react";
import UserContext from "../../utils/userContext"
import { Link } from "react-router-dom"
=======
import React, { useContext } from 'react';
import API from '../../utils/API';
import UserContext from '../../utils/userContext';
import { Link } from 'react-router-dom';
import { Chip } from 'primereact/chip';
import './ActivityCard.css'
>>>>>>> 322b496214893fe2e7903888b0083312d632cac0

function ActivityCard(props) {
	const { dbUser } = useContext(UserContext);

	return (
		<div className="row">
			{props.activity.length ? (
				props.activity.map((data) => (
					<div key={data._id} id="activity-container" className="activity-container p-mb-3 shadow">
						<div className="row">
							<div className="row date">
								<h5 className="mt-3">{new Date(data.date).toLocaleDateString()}</h5>
							</div>
							<div className="col-3">
								<h7 className="mt-3">{data.location}</h7>
							</div>
							<div className="col-3">
								<h7 id="host" className="mt-3">
									Host:{' '}
									<Link className="no-dec" to={'/' + data._id}>
										<Chip
											key={data.id}
											label={data.hostName}
											className="friend-chip"
                                            style={{backgroundColor:"#1dbbd3", maxWidth:"fit-content"}}
										/>
									</Link>
								</h7>
							</div>
							<div className="col-6">
								<p style={{ textAlign: 'center', verticalAlign: 'center' }}>{data.description}</p>
							</div>
							{data.hostId === dbUser._id ? (
								<div className="row justify-content-center">
									<button className="btn btn-danger" name={data._id} onClick={props.deleteActivity}>
										Delete Your Activity
									</button>
								</div>
							) : (
								<div className="row justify-content-center">
									<button className="btn btn-success " name={data._id} onClick={props.attendActivity}>
										Attend This Activity!
									</button>
								</div>
							)}
						</div>
					</div>
				))
			) : null}
		</div>
	);
}

export default ActivityCard;
