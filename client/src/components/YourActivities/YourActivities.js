import React from "react";
import ActivityForm from "../ActivityForm/ActivityForm"
import './YourActivities.css'
import ActivityCard from "../ActivityCard/ActivityCard"
import { Link } from 'react-router-dom';



function YourActivities(props) {


    return (

        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
                <h1 className='activities'>Your Activities</h1>
                <ActivityForm setActivities={props.setActivity} setUuid={props.setUuid}/>
                <h1 className='activities'>Neighbor Activities</h1>
                <div className="col">
                {props.activity.length ? (
				props.activity.map((data) => (
                <Link className= "activity-link" to={"/activity/" + data._id}>
                    <ActivityCard activity={data} deleteActivity={props.deleteActivity} distance={props.distance} />
                </Link>
                ))
                ) : null}
                </div>
            </div>
        </div>

    )
}
export default YourActivities