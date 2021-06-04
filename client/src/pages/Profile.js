import React, { useContext } from "react";
import UserContext from "../utils/userContext";

import Usercard from "../components/Usercard/Usercard"

import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import '../pages/Profile.css'

function Profile() {

  const {dbUser}=useContext(UserContext);

  return (

    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <Usercard user={dbUser} />
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