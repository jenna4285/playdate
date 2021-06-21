import React, { useState, useEffect, useContext, useRef} from "react";
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Usercard from "../components/Usercard/Usercard"
import CurrentProfileCard from "../components/CurrentProfileC/CurrentProfileC"
import KidCardContainer from "../components/KidCardContainer/KidCardContainer"
import UserContext from "../utils/userContext";
import '../pages/Profile.css'
import API from "../utils/API";
import {Toast} from "primereact/toast";



function Friendprofile() {

  const {dbUser} = useContext(UserContext);
  const { user } = useAuth0();

  let {id} = useParams();
  const [profileInfo, setProfileInfo] = useState({})
  const [isFriend, setIsFriend] = useState(false)
  const toast = useRef(null);

  useEffect(()=>{
    getProfile(id)
    setIsFriend(false)
    dbUser.friends &&
    dbUser.friends.forEach(friend=> {
      if(friend.id === id){ setIsFriend(true)}
    })
  },[])

  function displaySuccess(){
    toast.current.show({severity:'success', summary: 'Success!', detail:'Friend Added', life: 3000});
    }
  
  function displayError(){
      toast.current.show({ severity: 'error', summary: 'Success!', detail: 'Friend Removed', life: 3000 });
  }

  function messageSuccess(){
    toast.current.show({severity:'success', summary: 'Success!', detail:'Message sent!', life: 3000});
  }

    const getProfile = (get) =>{
        API.getUser(get)
        .then((res) => setProfileInfo(res.data))
    } 
  
  const addFriend = (event) =>{
    event.preventDefault()
    displaySuccess()
    API.addKidByEmail({
      email: user.email,
      push: {friends:profileInfo._id
        //  {
        // id: profileInfo._id,
        // name: profileInfo.fullname,
        // picture: profileInfo.picture
        // }
      }
    })
    .then(setIsFriend(true))
  }

  const removeFriend= (event)=>{
    event.preventDefault()
    displayError()
    API.removeFriend({
      email: user.email,
      id: profileInfo._id
    })
    .then(setIsFriend(false))
  }

  return (

    <div className="container">
     <Toast ref={toast}/>
      <div className="main-body profile-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <Usercard user={profileInfo} messageSuccess={messageSuccess}/>
            <div className="align-btn">
              {id !== dbUser._id ?
              !isFriend ?
            <button className="btn btn-light" onClick={addFriend}>Add Friend</button> 
            : <button className="btn btn-light"onClick={removeFriend}>Remove Friend</button> : null }
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