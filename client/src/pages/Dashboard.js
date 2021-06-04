import React, { useState, setState, useContext, useEffect } from "react";
import MapContainer from "../components/Map/map";
import Usercard from "../components/Usercard/Usercard";
import Kidcard from "../components/Kidcard/Kidcard";
import KidCardContainer from "../components/KidCardContainer/KidCardContainer";
import UserContext from "../utils/userContext";
import ActivityContext from "../utils/activityContext";
import YourActivities from "../components/YourActivities/YourActivities";
import YourFriends from "../components/YourFriends/YourFriends";
import ActivityForm from "../components/ActivityForm/ActivityForm";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";


function Dashboard() {
    const { dbUser } = useContext(UserContext);
    const userLat = dbUser.lat
    const userLng = dbUser.lng

    const[activity, setActivity]=useState({})
    const { isAuthenticated, user } = useAuth0();
    
    useEffect(() => {
        getActivity();
    }, [isAuthenticated]);

    
    const getActivity = ()=>{
        API.getActivity()
        .then((res) => setActivity(res.data))
    };


    // bring in activities array & pass to map component and activities component

    return (
        <div>
            <h1>Dashboard Page</h1>
            <div class="container">
                <div className="row">
                    <div className="col">
                        <Usercard user={dbUser}/>
                    </div>
                </div>
                <div className="row">
                <YourFriends user={dbUser}/>
                <YourActivities activity={activity} />
                </div>
                <div className="d-flex row">
                <KidCardContainer user={dbUser}/>
                </div>
                <div class="container mapcontainer"></div>
                <div className="d-flex row"></div>
                
                    <MapContainer lat={userLat} lng={userLng} activity={activity} />
                </div>
            
        </div>
    )
}


export default Dashboard