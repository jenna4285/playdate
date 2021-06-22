import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import UserContext from "../utils/userContext";
import "../pages/Profile.css";
import { Chip } from 'primereact/chip';
import Messages from "../components/Messages/Messages";
import "./ActivityPage.css";
import API from "../utils/API";



function ActivityPage() {
  const { dbUser } = useContext(UserContext);
  const { id } = useParams()
  const [activityInfo, setActivityInfo] = useState({})

  useEffect(()=> {
	  getActivity(id)
	  console.log(activityInfo)
  }, []) 

  const getActivity = (data) => {
	  API.getActivityById(data)
	  .then((res) => setActivityInfo(res.data))
  }

  return (
    <div className="text-center">
      <div
        id="activity-page-card"
        className="card activity-card d-flex container"
      >
        <div class="row">
          <h1>Activity Title</h1>
          <h4>Host</h4>
          <h4>Lorem ipsum dolorem sipsum </h4>
          <hr />
        </div>
        <div id="map-attendees" class="row">
          <div class="col">
            <h1>MAP GOES HERE</h1>
          </div>
          <div class="col">
            <div className="card">
              <h1>Whos Going</h1>
              {activityInfo.attendees?
			  	activityInfo.attendees[0]? (
                activityInfo.attendees.map((item) => (
                  <div>
					  {console.log(item)}
                    <Link className="no-dec" to={"/profile/" + item._id}>
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
              ) :(null)}
            </div>
          </div>
        </div>
        <hr />
        <div id="comments-row" className="row">
          <button className="btn btn-success">Post Comment</button>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
