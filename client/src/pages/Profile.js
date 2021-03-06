import React, { useContext } from "react";
import UserContext from "../utils/userContext";

import Usercard from "../components/Usercard/Usercard"

import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import MiniCardContainer from "../components/MiniCardContainer/MiniCardContainer"
import '../pages/Profile.css'
import Messages from "../components/Messages/Messages"


function Profile() {

  const {dbUser}=useContext(UserContext);

  return (

    <div className="container">
      <div className="main-body profile-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <Usercard user={dbUser} />
            <Messages/>
          {/* Mapping over messages*/}
      {dbUser.messages ? (
        dbUser.messages.map((data) => (
          <div className="card">
          <span className="message-sender">Sender:</span> {data.sender} <br/><span className="message-sender">Message: </span>{data.content}
          </div>
        ))
      ) : (
        <p>""</p>
      )}



          </div>
          <div className="col-md-8">
            <CurrentProfileCard user={dbUser} />
            <div className="row">
              <MiniCardContainer kidList={dbUser.child} />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


export default Profile