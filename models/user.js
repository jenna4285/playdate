const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    address: String,
    chlid: [{
        name: String,
        age: Number,
        gender: String
        }]
});

const User = mongoose.model("User", userSchema)

module.exports = User;