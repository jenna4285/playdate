import React, { useState, useContext, useEffect } from "react";
import MapContainer from "../components/Map/map";
import Usercard from "../components/Usercard/Usercard";
import KidCardContainer from "../components/KidCardContainer/KidCardContainer";
import UserContext from "../utils/userContext";
import YourActivities from "../components/YourActivities/YourActivities";
import YourFriends from "../components/YourFriends/YourFriends";
import API from "../utils/API";
import './Dashboard.css'


function Dashboard() {
    const { dbUser } = useContext(UserContext);
    const userLat = dbUser.lat
    const userLng = dbUser.lng

    const[uuid, setUuid] = useState({})
    const [activity, setActivity] = useState([])

    useEffect(() => {
        getActivity();
        setUuid(null)
    },[uuid]);

    const deleteActivity = (event) => {
        console.log(event.target.name)
        API.removeActivity(event.target.name)
        .then((res) => setUuid(res.id))
    }


    const getActivity = () => {
        API.getActivity()
            .then((res) => setActivity(res.data))
    };

    // function handleBtnClick(event) {
    //     event.preventDefault();
    // }
    // bring in activities array & pass to map component and activities component

    return (
        <div>
            <h1 id="dashboard-header">Your Dashboard</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Usercard user={dbUser} />
                    </div>


                </div>
                <div className="row no-gutter">
                    <YourFriends user={dbUser} />
                    <div className='d-flex flex-wrap justify-content-center col-sm-12 col-md-6 col-lg-6'>
                    <KidCardContainer user={dbUser} />
                    </div>
                </div>
                <div className="d-flex row">

                    <YourActivities setActivity={setActivity} setUuid= {setUuid} activity={activity} deleteActivity={deleteActivity} />

                </div>
              
                        <MapContainer lat={userLat} lng={userLng} activity={activity} />
            
            </div>

        </div>
    )
}


export default Dashboard