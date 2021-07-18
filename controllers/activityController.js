const db = require("../models");

// Defining methods for the activityController
module.exports = {
  findAll: function(req, res) {
    let today = new Date();
    let yesterday = today.setDate(today.getDate() -1)
    db.Activity
      .find({date: {$gte: yesterday}})
      .populate("hostId")
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Activity
      .findById(req.params.id)
      .populate(["hostId", "attendees"])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.Activity
      .findOne({email: req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err=> res.status(422).json(err));
  },
  create: function(req, res) {
    db.Activity
      .create(req.body)
      .then(res => db.User
        .findOneAndUpdate({ _id: res.hostId}, {$push: {activities: res._id}}, {new: true}))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Activity
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateByEmail: function(req, res) {
    db.Activity
      .findOneAndUpdate({ email: req.params.email }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Activity
      .findById({ _id: req.params.id })
      .then(dbModel =>{ 
        db.User.findOneAndUpdate({ _id: dbModel.hostId }, {$pull: {activities: dbModel._id}}, {new:true})
        .then(dbModel => res.json(dbModel))
        dbModel.remove()
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addCommentByActivityID: function(req, res) {
    db.Activity 
      .findOneAndUpdate({ _id: req.params.id }, {$push: {comments: req.body}}, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addAttendeeById: function(req, res) {
    db.Activity
      .findOneAndUpdate({ _id: req.params.id }, {$push: {attendees: req.body.userId}}, {new:true})
      .then(res => db.User
        .findOneAndUpdate({ _id: req.body.userId}, {$push: {activities: res._id}}, {new: true}))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeAttendeeById: function(req, res) {
    db.Activity
    .findOneAndUpdate({ _id: req.params.id }, {$pull: {attendees: req.body.userId}}, {new:true})
    .then(res => db.User
      .findOneAndUpdate({ _id: req.body.userId}, {$pull: {activities: res._id}}, {new: true}))
    .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }



};