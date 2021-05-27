const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require('./models');
const path = require('path');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/playdate',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
// routes
app.use(require("./routes/api.js"));

app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, './public/stats.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, './public/exercise.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.listen(PORT, () => {
    console.log('App is running on port ${PORT}!');
});