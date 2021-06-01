import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/userContext"

import Profileform from "../components/Profileform/Profileform";
import Kids from "../components/Kids/Kids";
import CurrentProfileCard from "../components/CurrentProfileCard/CurrentProfileCard"
import Minikidcard from "../components/Minikidcard/Minikidcard"
import MiniCardContainer from "../components/MiniCardContainer/MiniCardContainer"



function Editprofile() {

    const {dbUser}=useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Profileform />
                </div>
                <div className="col">
                   <CurrentProfileCard user={dbUser} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <br />
                    <Kids />
                </div>
                <div id="kid-column" className="col">
                    <div id="kid-card-container">
                        <MiniCardContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Editprofile