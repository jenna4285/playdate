import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './LeafletMap.css';
import { Button } from 'primereact/button';

let myIcon = L.icon({
	iconUrl: './playdateMarker2.png',
	iconSize: [ 44, 44 ],
	iconAnchor: [ 22, 94 ],
	popupAnchor: [ -3, -76 ]
});

let homeIcon = L.icon({
	iconUrl: './playground.png',
	iconSize: [ 50, 50 ],
	iconAnchor: [ 22, 94 ],
	popupAnchor: [ -3, -76 ]
});

let greenIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [ 25, 41 ],
	iconAnchor: [ 12, 41 ],
	popupAnchor: [ 1, -34 ],
	shadowSize: [ 41, 41 ]
});

function LeafletMap(props) {
	return (
		<div id="map-div">
			<MapContainer
				id="dashboard-map"
				center={[ props.userLat, props.userLng ]}
				zoom={13}
				scrollWheelZoom={false}
				// style={{ height: '50vh', width: '100wh' }}
			>
				<TileLayer
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[ props.userLat, props.userLng ]} icon={homeIcon}>
					<Popup>
						<h6>Your Address!</h6> <br /> There's no place like home!
					</Popup>
				</Marker>
				{props.activity.length ? (
					props.activity.map((data, index) => (
						<Marker position={[ data.actLat, data.actLng ]} icon={greenIcon}>
							<Popup>
								<h6>{data.title}</h6>
						
								<h6>{props.distance(props.userLat, props.userLng, data.actLat, data.actLng, "M")} Miles Away</h6>
								<br />
								<div>Host: {data.hostId.fullname}</div>
								<br/>
								<div>Scheduled Date: {new Date(data.date).toLocaleDateString()}</div>
								<br />
								{data.description.length>250 ? `${data.description.substring(0,180)}...` : data.description }
								<br />
								<br />
								{data.attendees.length} attendee(s) so far!
								<br />
									<div className="justify-content-center">
									<Link to={'/activity/' + data._id}>
									<button type="button" id="go-to-activity" className="btn btn-outline-info">Go to Activity</button>
									</Link>
									</div>
							
							</Popup>
						</Marker>
					))
				) : null}
			</MapContainer>
		</div>
	);
}

export default LeafletMap;
