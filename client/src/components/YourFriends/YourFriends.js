import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";

function YourFriends(props) {

    const getFriends=async ()=>{
        const friends=await API.getUsers()
        return friends; 
    }

    useEffect(() => {
        getFriends();
    })


    return (
        <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card">
                <h1>Your Friends</h1>
            </div>
        </div>
    )


}
export default YourFriends;