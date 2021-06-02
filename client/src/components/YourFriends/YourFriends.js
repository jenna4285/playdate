import React, {setState, useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";
import { Chip } from 'primereact/chip';
import { get } from "mongoose";
import './YourFriends.css'


function YourFriends() {
    const[friends, setFriends]=useState()

    useEffect(() => {
        const getFriends=async()=>{
   
        const allFriends=await API.getUsers();        
        console.log("My Friends");
        console.log(allFriends.data);
        setFriends(allFriends.data)
        }
       getFriends();

    },[]);


    return (
    <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card">
        <h1>Your Friends</h1>
        {friends ? (
        friends.map((item) => (
            <div key={item._id}>
            <Chip label={item.email} image={item.picture} className="friend-chip shadow" />
            </div>
        ))
      ) : (
        <p>""</p>
      )}
            </div>
        </div>
    )


}
export default YourFriends;