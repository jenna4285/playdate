import axios from "axios";


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
  // Activity Routes
  getActivity: function() {
    return axios.get("/api/activity");
  },
  saveUser: function(userData) {
    return axios.post("/api/activity", userData);
}
}
