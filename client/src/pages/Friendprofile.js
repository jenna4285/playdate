import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/userContext";
import { useParams } from 'react-router-dom';
import Usercard from "../components/Usercard/Usercard"
import Userdetailscard from "../components/Userdetailscard/Userdetailscard"
import Kidcard from "../components/Kidcard/Kidcard"
import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import '../pages/Profile.css'
import API from "../utils/API";

function Friendprofile() {

  let {id} = useParams();
  const [profileInfo, setProfileInfo] = useState({})

    const getProfile = (get) =>{
        API.getUser(get)
        .then((res) => setProfileInfo(res.data))
    } 

  useEffect(() => {
      getProfile(id)
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