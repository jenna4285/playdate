const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    first_name: String,
    last_name: String,
    fullname: String,
    address: String,
    city: String,
    unitedState: String,
    zip: Number,
    email: String,
    picture:String,
    description:String,
    lat: Number,
    lng: Number,
    child: [{
        kidname: String,
        kidage: Number,
        gender: String
    }],
    friends: [{
        id: String,
        name: String,
        picture: String
    }]
});

const User = mongoose.model("User", userSchema)

module.exports = User;