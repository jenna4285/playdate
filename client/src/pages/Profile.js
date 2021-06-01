import React from "react";
import Profileform from "../components/Profileform/Profileform";
import Usercard from "../components/Usercard/Usercard"
import Userdetailscard from "../components/Userdetailscard/Userdetailscard"
import Kidcard from "../components/Kidcard/Kidcard"
import CurrentProfileCard from "../components/Currentprofilecard/Currentprofilecard"
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import '../pages/Profile.css'

function Profile() {
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
            <Usercard />
          </div>
          <div className="col-md-8">
            <CurrentProfileCard />
            <div className="row gutters-sm">
        <KidCardContainer/>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


export default Profile