import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/userContext";
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Usercard from "../components/Usercard/Usercard"
import Userdetailscard from "../components/Userdetailscard/Userdetailscard"
import Kidcard from "../components/Kidcard/Kidcard"
import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import '../pages/Profile.css'
import API from "../utils/API";

function Friendprofile() {

  const { user } = useAuth0();

  let {id} = useParams();
  const [profileInfo, setProfileInfo] = useState({})
  // const [isFriend, setIsFriend] = useState({
  //   isFriend: false
  // })

  // const checkFriend = () =>{
  //   for(i = 0; i < dbUser.friends.length; i++){
  //     if(dbUser.friends[i]._id === id){
  //       return setIsFriend({isFriend: true})
  //     }
  //   }
  // }

    const getProfile = (get) =>{
        API.getUser(get)
        .then((res) => setProfileInfo(res.data))
    } 
  
  const addFriend = (event) =>{
    event.preventDefault()
    API.addKidByEmail({
      email: user.email,
      push: {friends: {
        id: profileInfo._id,
        name: profileInfo.fullname,
        picture: profileInfo.picture
        },
      }
    })
    .then((res) => console.log(res))
  }

  useEffect(() => {
      getProfile(id)
      // if(dbUser.friends){
      //   checkFriend()
      // }
  })

  return (

    <div className="container">
      <div className="main-body">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <Usercard user={profileInfo}/>
            <button onClick={addFriend}>add friend</button> 
          </div>
          <div className="col-md-8">
            <CurrentProfileCard user={profileInfo} />
            <div className="row gutters-sm">
        <KidCardContainer user={profileInfo}/>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


export default Friendprofile