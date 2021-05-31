import React, { useState, useEffect, useContext } from "react";
import Profileform2 from "../components/Profileform/Profileform2";
import Kids2 from "../components/Kids/Kids2";
import Currentprofilecard from "../components/Currentprofilecard/Currentprofilecard"
import Minikidcard from "../components/Minikidcard/Minikidcard"
import MiniCardContainer from "../components/MiniCardContainer/MiniCardContainer"



function Editprofile() {

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <Profileform2 />
                </div>
                <div className="col">
                    <Currentprofilecard />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Kids2 />
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