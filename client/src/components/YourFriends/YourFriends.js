import React, {setState, useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";
import { Chip } from 'primereact/chip';
import { get } from "mongoose";
import './YourFriends.css'


function YourFriends() {
    const[users, setUsers]=useState()
    const{dbUser}=useContext(UserContext)

    useEffect(() => {

       getUsers();
       

    },[]);
        const getUsers=async()=>{
   
        const allFriends=await API.getUsers();        
        console.log("My Friends");
        console.log(allFriends.data);
        setUsers(allFriends.data)
        }

    return (
    <div className="col-sm-12 col-md-6 col-lg-6">
        <div className="card">
        <h1>Your Friends</h1>
        {users ? (
        users.map((item) => (
            <div>
            <Chip key={item._id} label={item.email} image={item.picture} className="friend-chip shadow" />
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