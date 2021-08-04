const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate({path: "activities", populate:{path: "hostId"}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.User
      .findOne({email: req.params.email})
      .populate("friends")
      .then(dbModel => res.json(dbModel))
      .catch(err=> res.status(422).json(err));
  },
  findMessagesByEmail: function(req, res) {
    db.User
      .findOne({messages: req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err=> res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateByEmail: function(req, res) {
    db.User
      .findOneAndUpdate({ email: req.params.email }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addKidByEmail: function(req, res) {
    db.User
      .findOneAndUpdate({ email: req.params.email }, {$push: req.body.push}, {new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addMessageByEmail: function(req, res) {
    db.User 
      .findOneAndUpdate({ _id: req.params.id }, {$push: req.body}, {new: true})
      .then(dbModel => res.json(dbModel))
      
      .catch(err => res.status(422).json(err));
  },
  markMessageAsRead: function(req, res) {
    console.log(req.body)
    console.log(req.params.id)
    db.User 
      .updateOne({ "_id": req.params.id, 'messages._id': req.body.message}, 
        {
          $set: { 'messages.$.isRead': true },
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeFriendByEmail: function(req,res){
    db.User
      .findOneAndUpdate({ email: req.params.email }, {$pull: {friends: req.body.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addUserActivity: function(req,res){
      db.User 
        .findOneAndUpdate({ _id: req.params.id }, {$push: {activities: req.body.eventId}}, {new: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
};