import React from "react";
import { MapContainer } from "../components/Map/map";
import Usercard from "../components/Usercard/Usercard";
import Kidcard from "../components/Kidcard/Kidcard";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <div class="container">
            <Usercard />
            <Kidcard /> <MapContainer />
            </div>
            
        </div>
    )
}


export default Dashboard