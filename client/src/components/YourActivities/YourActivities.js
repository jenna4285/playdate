import React, { useState, useEffect, useContext } from "react";
import ActivityForm from "../ActivityForm/ActivityForm"
import './YourActivities.css'
function YourActivities(props) {



    return (

        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
                <h1 class='activities'>Your Activities</h1>
                <ActivityForm/>
                <h1 class='activities'>Global Activities</h1>
            </div>
        </div>

    )


}
export default YourActivities;