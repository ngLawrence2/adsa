const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const app = express();


const port = process.env.PORT || 5000;

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPREdsasda BACKEND IS  TO REACT' });
});
