const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comment = new Schema({
    commenter: {type : Schema.Types.ObjectId, ref: "User"},
    comment: String,
}, {timestamps:true})

const activitySchema = new Schema({
    hostName: String,
    hostId: {type : Schema.Types.ObjectId, ref: "User"},
    attendees: [{type: Schema.Types.ObjectId, ref: "User"}],
    date: Date,
    location: String,
    title: String,
    description: String,
    comments: [comment],
    actLat: Number,
    actLng: Number
});



const Activity = mongoose.model("Activity", activitySchema)

module.exports = Activity;
