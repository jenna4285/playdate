import React, { useState, useEffect, useContext} from "react";
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Usercard from "../components/Usercard/Usercard"
import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import UserContext from "../utils/userContext";
import '../pages/Profile.css'
import API from "../utils/API";

function Friendprofile() {

  const {dbUser} = useContext(UserContext);
  const { user } = useAuth0();

  let {id} = useParams();
  const [profileInfo, setProfileInfo] = useState({})
  const [isFriend, setIsFriend] = useState(false)

  useEffect(()=>{
    getProfile(id)
    setIsFriend(false)
    dbUser.friends &&
    dbUser.friends.forEach(friend=> {
      if(friend.id === id){ setIsFriend(true)}
    })
  },[])

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
    .then(setIsFriend(true))
  }

  const removeFriend= (event)=>{
    event.preventDefault()
    API.removeFriend({
      email: user.email,
      id: profileInfo._id
    })
    .then(setIsFriend(false))
  }

  return (

    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <Usercard user={profileInfo}/>
            <div className="align-btn">
              {!isFriend?
            <button className="btn btn-light" onClick={addFriend}>Add Friend</button> 
            : <button className="btn btn-light"onClick={removeFriend}>Remove Friend</button>  }
            </div>
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