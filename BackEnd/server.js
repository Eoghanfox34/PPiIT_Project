require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

  //Middleware to parse JSON
app.use(bodyParser.json());

// Import routes
const leaguesRoutes = require('./routes/leagues');

// Use routes
app.use('/api/leagues', leaguesRoutes);

//Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

