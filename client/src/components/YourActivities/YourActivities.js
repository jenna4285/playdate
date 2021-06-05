import React, { useState,useEffect } from "react";
import ActivityForm from "../ActivityForm/ActivityForm"
import './YourActivities.css'
import ActivityCard from "../ActivityCard/ActivityCard"
import { set } from "mongoose";
import API from "../../utils/API"


function YourActivities(props) {
    // const[activities, setActivities]= useState([])

    // useEffect(() => {
    //     getActivity();
    // }, [activities]);


    // const getActivity = () => {
    //     API.getActivity()
    //         .then((res) => setActivities(res.data))
    // };

    return (

        <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card">
                <h1 className='activities'>Your Activities</h1>
                <ActivityForm setActivities={props.setActivity} setUuid={props.setUuid}/>
                <h1 className='activities'>Neighbor Activities</h1>
                <div className="col">
                <ActivityCard activity={props.activity} deleteActivity={props.deleteActivity}/>
                </div>
            </div>
        </div>

    )
}
export default YourActivities