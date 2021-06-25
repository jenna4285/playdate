import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import UserContext from "../../utils/userContext";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom"
import { Chip } from 'primereact/chip';
import './YourFriends.css'
import { useAuth0 } from "@auth0/auth0-react";
import { ScrollPanel } from 'primereact/scrollpanel';



function YourFriends() {
  const { dbUser } = useContext(UserContext)
  const [users, setUsers] = useState()
  const [filteredUsers, setFilteredUsers] = useState([])
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    getUsers();
    //  getFriends();
  }, []);

  const getUsers = async () => {
    const allUsers = await API.getUsers();
    setUsers(allUsers.data)
    setFilteredUsers(allUsers.data)
  }

  const handleChange = (e) => {
    const searchField = e.target.value
    const userSearch = users.filter(item => 
      !item.fullname ?
      item.email.toLowerCase().includes(searchField.toLowerCase())
      :
      item.fullname.toLowerCase().includes(searchField.toLowerCase())
  )
    setFilteredUsers(userSearch)
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
      <div className='row no-gut'>
        <div className="card">
          <h1>Your Friends</h1>
          <ScrollPanel style={{width: '100%', maxheight: '200px'}}>
          {dbUser.friends ? (
            dbUser.friends.map((item) => (
              <div>
                <Link className='no-dec' to={"/profile/" + item._id}><Chip key={item._id} label={item.fullname} image={item.picture} className="friend-chip" /></Link>
              </div>
            ))
          ) : (
            <p>""</p>
          )}
          </ScrollPanel>
        </div>
      </div>
      <div className="row no-gut">
        <div className="card">
          <h1>Your Neighbors</h1>
          <SearchBar handleChange = {handleChange} />
          <ScrollPanel style={{width: '100%', height: '200px'}}>
          {filteredUsers ? (
            filteredUsers.map((item) => (
              item._id !== dbUser._id ?
              <div key={item._id}>
                <Link className='no-dec' to={"/profile/" + item._id}><Chip label={item.fullname} image={item.picture} className="friend-chip" /></Link>
              </div>
              : null
            ))
          ) : (
            <p>""</p>
          )}
          </ScrollPanel>
        </div>
      </div>
    </div>

  )


}
export default YourFriends;