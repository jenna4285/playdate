import React, {setState, useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";
import {Link} from "react-router-dom"
import { Chip } from 'primereact/chip';
import { get } from "mongoose";
import './YourFriends.css'
import { useAuth0 } from "@auth0/auth0-react";


function YourFriends() {
    const[users, setUsers]=useState()
    const[friends, setFriends]=useState()
    const { isAuthenticated, user } = useAuth0();

    // useEffect(() => {
    //  getUsers();
    // //  getFriends();
    // },[isAuthenticated]);

    // const getUsers=async()=>{
    //     const allUsers=await API.getUsers();        
    //     console.log("All Users");
    //     console.log(allUsers.data);
    //     setUsers(allUsers.data)
    //     }

    // const getFriends=async()=>{const myFriends = await API.getUserByEmail(user.email).then(userInfo => {
    //         console.log(userInfo.data.friends)
    //         setFriends(userInfo.data.friends);
    //     }) ;       

    //     console.log("All Friends");
    //     console.log(myFriends.data);
    //     setUsers(myFriends.data)
    //     }



    return (
    <div className="col-sm-12 col-md-6 col-lg-6">
    <div classNAme="row">
    <div className="card">
    {console.log("users")}
    {console.log(users)}
    {console.log("friends")}
    {console.log(friends)}
        <h1>Your Friends</h1>
        {dbUser.friends ? (
        dbUser.friends.map((item) => (
            <div>
            <Link to={"/"+item.id}><Chip key={item.id} label={item.name} image={item.picture} className="friend-chip shadow" /></Link>
            </div>
        ))
      ) : (
        <p>""</p>
      )}
            </div>
    </div>
    <div classNAme="row">
        <div className="card">
        <h1>All Users</h1>
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
    </div>
        
    )


}
export default YourFriends;