const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const message = new Schema({
    sender:String,
    content: String,
    timestamp: Date,
    isRead:  {
      type: Boolean,
      default: false
    }
}, {timestamps:true})

const userSchema = new Schema({
    username: String,
    password: String,
    signedUp: { 
        type: Boolean,
        default: false,
        },
    first_name: String,
    last_name: String,
    username: String,
    user_id: String,
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
    // loc: {
    //     type: {
    //       type: String,
    //       enum: ['Point'],
    //       default: 'Point',
    //     },
    //     coordinates: {
    //       type: [Number],
    //       default: [0, 0],
    //     }
    //   },
    child: [{
        kidname: String,
        kidage: Number,
        gender: String
    }],
    friends: [{
        type: Schema.Types.ObjectId, ref: "User"
        // id: String,
        // name: String,
        // picture: String
    }],
    messages:[message],
    activities: [{type: Schema.Types.ObjectId, ref: "Activity"}]
});

const User = mongoose.model("User", userSchema)

module.exports = User;
