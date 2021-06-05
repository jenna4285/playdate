import React, { useState, useContext, useEffect } from "react";
import MapContainer from "../components/Map/map";
import Usercard from "../components/Usercard/Usercard";
import KidCardContainer from "../components/KidCardContainer/KidCardContainer";
import UserContext from "../utils/userContext";
import YourActivities from "../components/YourActivities/YourActivities";
import YourFriends from "../components/YourFriends/YourFriends";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import './Dashboard.css'


function Dashboard() {
    const { dbUser } = useContext(UserContext);
    const userLat = dbUser.lat
    const userLng = dbUser.lng

    const[uuid, setUuid] = useState({})
    const [activity, setActivity] = useState([])
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        getActivity();
    },[uuid]);


    const getActivity = () => {
        API.getActivity()
            .then((res) => setActivity(res.data))
    };

    // function handleBtnClick(event) {
    //     event.preventDefault();
    // }
    // bring in activities array & pass to map component and activities component

    return (
        <div id = "master">
            <h1 id="dashboard-header">Your Dashboard</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Usercard user={dbUser} />
                    </div>


                </div>
                <div className="row">
                    <YourFriends user={dbUser} />
                    <KidCardContainer user={dbUser} />
                </div>
                <div className="d-flex row">

                    <YourActivities setActivity={setActivity} setUuid= {setUuid} activity={activity} />

                </div>
              
                        <MapContainer lat={userLat} lng={userLng} activity={activity} />
            
            </div>

        </div>
    )
}


export default Dashboard