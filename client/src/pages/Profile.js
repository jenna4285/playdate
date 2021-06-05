import React, { useContext } from "react";
import UserContext from "../utils/userContext";

import Usercard from "../components/Usercard/Usercard"

import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import '../pages/Profile.css'
import Messages from "../components/Messages/Messages"
import Kidcard from "../components/Kidcard/Kidcard"


function Profile() {

  const {dbUser}=useContext(UserContext);

  return (

    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <Usercard user={dbUser} />
            <Messages/>
          {/* Mapping over messages*/}
      {dbUser.messages ? (
        dbUser.messages.map((data) => (
          <div className="card">
          Sender: {data.sender} <br/> Message:{data.content}
          </div>
        ))
      ) : (
        <p>""</p>
      )}



          </div>
          <div className="col-md-8">
            <CurrentProfileCard user={dbUser} />
            <div className="row gutters-sm">
              <KidCardContainer user={dbUser} />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


export default Profile