const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Replace with your MongoDB connection string
const mongoURI = 'mongodb+srv://eoghanf34:fEHFGRYY1NhYYlsK@cluster0.ko60nzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));


// Define user schema and model  
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  favoriteTeam: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cors());

app.post('/register', async (req, res) => {
  const { name, email, favoriteTeam } = req.body;
  const user = new User({ name, email, favoriteTeam });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
});

// Routes
app.post('/login', async (req, res) => {
  const { email } = req.body;
  if (email === 'admin@gmail.com') {
    const users = await User.find();
    res.status(200).json(users);
  } else {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid email' });
    }
  }
});

// DELETE endpoint to delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
