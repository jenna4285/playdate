const db = require("../models");

// Defining methods for the activityController
module.exports = {
  findAll: function(req, res) {
    db.Activity
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Activity
      .findById(req.params.id)
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
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addKidByEmail: function(req, res) {
    db.Activity
      .findOneAndUpdate({ email: req.params.email }, {$push: req.body.push})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};