const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/playdate', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const userSeed = [
    {
        first_name: 'Fred',
        last_name: 'Flintstone',
        email: 'FFlint@yahoo.com',
        password: 'password1234',
        address: '2200 Stone Age Lane, Prehistoria, PG 10235',
        child: [{
            name: 'Pebbles',
            age: 7,
            gender: 'female'
        },
        {
            name: 'Dino',
            age: 4,
            gender: 'male'
        }]
        },
    {
        first_name: 'Betty',
        last_name: 'Rubble',
        email: 'BettyRocks@gmail.com',
        password: 'password1234',
        address: '2202 Stone Age Lane, Prehistoria, PG 10235',
        child: [{
            name: 'Bamm-Bamm',
            age: 6,
            gender: 'male'
        },
        {
            name: 'Hoppy',
            age: 3,
            gender: 'female'
        }]
    }
]

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


  const activitySeed = [
    {
        date: 'March 31',
        location: 'Zilker Park',
        description: 'Flying kites! BYOK!'
    }
]

db.Activity.deleteMany({})
  .then(() => db.Activity.collection.insertMany(activitySeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });