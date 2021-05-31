import React, { useState, useEffect } from "react";
import Profileform2 from "../components/Profileform/Profileform2";
import Kids2 from "../components/Kids/Kids2";
import Currentprofilecard from "../components/Currentprofilecard/Currentprofilecard"

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
                <div className="col">
                <container className="card">    
                <h1>Kid Cards Go Here</h1>
                </container>
                </div>
            </div>

        </div>
    )
}


export default Editprofile