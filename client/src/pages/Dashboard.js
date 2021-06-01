import React, {useContext} from "react";
import Map from "../components/Map/map";
import Usercard from "../components/Usercard/Usercard";
import Kidcard from "../components/Kidcard/Kidcard";
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import UserContext from "../utils/userContext"

function Dashboard() {
    const {dbUser}=useContext(UserContext);
    const userLat=dbUser.lat
    const userLng=dbUser.lng
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div class="container">
                <div className="row">
                    <div className="col">
                        <Usercard />
                    </div>
                </div>
                {/* <div className="row "> */}
                <KidCardContainer />
                {/* </div> */}
                <div className="row">
                    <Map lat={userLat} lng={userLng}/>
                </div>
            </div>
        </div>
    )
}


export default Dashboard