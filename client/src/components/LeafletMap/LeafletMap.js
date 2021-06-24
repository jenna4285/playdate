import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './LeafletMap.css'


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
				<Marker position={[props.userLat, props.userLng]} icon={homeIcon}>
					<Popup>
						<h6>Your Address!</h6> <br /> There's no place like home!
					</Popup>
				</Marker>
				{props.activity.length ? (
					props.activity.map((data,index) => (
						<Marker position={[ data.actLat, data.actLng ]} icon={myIcon}>
							<Popup>
								<h6>{data.hostId.fullname}'s Activity</h6>
                                <br/>
								<h6>Date: {new Date(data.date).toLocaleDateString()}</h6>
                                <br/>
                               	{data.description} 
                                <br/>
                                <br/>
							    {data.attendees.length} attendee(s) so far!
							</Popup>
						</Marker>
					))
				) : null}
			</MapContainer>
		</div>
	);
}

export default LeafletMap;
