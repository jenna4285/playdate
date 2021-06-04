import React from "react";
import ActivityForm from "../ActivityForm/ActivityForm"
import './YourActivities.css'
import ActivityCard from "../ActivityCard/ActivityCard"


function YourActivities(props) {



    return (

        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
                <h1 class='activities'>Your Activities</h1>
                <ActivityForm />
                <h1 class='activities'>Neighbor Activities</h1>
                <div className="col">
                <ActivityCard activity={props.activity}/>
                </div>
            </div>
        </div>

    )
}
export default YourActivities