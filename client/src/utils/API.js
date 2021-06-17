import axios from "axios";
// import { db } from "../../../models/user";
const os = require('os');

axios.defaults.baseURL =  os.homedir()


export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  getUserByEmail: function(email) {
    return axios.get("/api/users/email/" + email)
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  editUser: function(userData) {
    return axios.put("api/users/" + userData.id, userData)
  },
  editUserByEmail: function(userData) {
    return axios.put("api/users/email/" + userData.email, userData)
  },
  addKidByEmail: function(userData) {
    return axios.put("api/users/email/kid/" + userData.email, userData)
  },
  removeFriend: function(userData) {
    return axios.put("api/users/email/friends/" + userData.email, userData)
  },
  // Activity Routes
  //get find all
  getActivity: function() {
    return axios.get("/api/activity");
  },
  saveActivity: function(userData) {
    return axios.post("/api/activity", userData);
},
editActivityById: function(id, userData) {
  return axios.post("/api/activity/" +id, userData);
},

//message Routes
addMessageByEmail: function(userData){
  return axios.put("api/users/email/messages/" + userData.messages.recipient, userData)
},

removeActivity: function(id) {
  return axios.delete("/api/activity/"+id)
}
}
