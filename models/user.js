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
    description:String,
    child: [{
        name: String,
        age: Number,
        gender: String
        }]
});

const User = mongoose.model("User", userSchema)

module.exports = User;