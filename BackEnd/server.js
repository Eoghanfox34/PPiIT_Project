const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;


const mongoURI = 'mongodb+srv://eoghanf34:fEHFGRYY1NhYYlsK@cluster0.ko60nzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));

// Define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  favoriteTeam: String,
  logins: { type: Number, default: 0 }
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Register endpoint
app.post('/register', async (req, res) => {
  const { name, email, favoriteTeam } = req.body;
  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create a new user
    const user = new User({ name, email, favoriteTeam });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email } = req.body;
  if (email === 'admin@gmail.com') {
    // If the email is admin, return all users
    const users = await User.find();
    res.status(200).json(users);
  } else {
    // Otherwise, find the user and increment the login count
    const user = await User.findOne({ email });
    if (user) {
      user.logins += 1;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid email' });
    }
  }
});

// Delete user endpoint
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
