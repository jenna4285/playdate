import React, { useState, useEffect, useContext } from "react";
import ActivityForm from "../ActivityForm/ActivityForm"

function YourActivities(props) {



    return (

        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
                <h1>Your Activities</h1>
                <ActivityForm/>
            </div>
        </div>

    )


}
export default YourActivities;