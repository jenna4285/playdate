const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    hostName: String,
    hostId: String,
    date: Date,
    location: String,
    description: String,
    actLat: Number,
    actLng: Number
});

const Activity = mongoose.model("Activity", activitySchema)

module.exports = Activity;
