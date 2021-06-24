import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './MiniLeafletMap.css'


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


function MiniLeafletMap(props) {
	return (
		<div id="map-div">
		
			<MapContainer
                id="activity-page-map"
				center={[ props.activity.actLat, props.activity.actLng ]}
				zoom={13}
				scrollWheelZoom={false}
				// style={{ height: '50vh', width: '100wh' }}
			>
				<TileLayer
					attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* <Marker position={[props.dbUser.lat, props.dbUser.lng]} icon={homeIcon}>
					<Popup>
						<h6>Your Address!</h6> <br /> There's no place like home!
					</Popup>
				</Marker> */}
						<Marker position={[ props.activity.actLat, props.activity.actLng ]}>
							<Popup>
								<h6>{props.activity.hostName}'s Activity</h6>
                                <br/>
								<h6>Date: {new Date(props.activity.date).toLocaleDateString()}</h6>
                                <br/>
                               	{props.activity.description} 
                                <br/>
                                <br/>
							    {props.activity.attendees.length} attendee(s) so far!
							</Popup>
						</Marker>
				</MapContainer>
		</div>
	);
}

export default MiniLeafletMap;
