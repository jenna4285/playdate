import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";
import { Link } from "react-router-dom"
import { Chip } from 'primereact/chip';
import './YourFriends.css'
import { useAuth0 } from "@auth0/auth0-react";


function YourFriends() {
  const { dbUser } = useContext(UserContext)
  const [users, setUsers] = useState()
  const [friends, setFriends] = useState()
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    getUsers();
    //  getFriends();
  }, []);

  const getUsers = async () => {
    const allUsers = await API.getUsers();
    setUsers(allUsers.data)
  }

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
      <div className='row'>
        <div className="card">
          <h1>Your Friends</h1>
          {dbUser.friends ? (
            dbUser.friends.map((item) => (
              <div>
                <Link className='no-dec' to={"/" + item.id}><Chip key={item.id} label={item.name} image={item.picture} className="friend-chip" /></Link>
              </div>
            ))
          ) : (
            <p>""</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="card">
          <h1>Your Neighbors</h1>
          {users ? (
            users.map((item) => (
              item._id !== dbUser._id ?
              <div key={item._id}>
                <Link className='no-dec' to={"/" + item._id}><Chip label={item.fullname} image={item.picture} className="friend-chip" /></Link>
              </div>
              : null
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