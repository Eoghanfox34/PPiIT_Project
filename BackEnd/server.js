const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Connect to MongoDB
const mongoURI = 'mongodb+srv://eoghanf34:fEHFGRYY1NhYYlsK@cluster0.ko60nzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  favoriteTeam: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
