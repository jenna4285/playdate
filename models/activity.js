const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    date: Date,
    location: String,
    description: String
});

const Activity = mongoose.model("Activity", activitySchema)

module.exports = Activity;
