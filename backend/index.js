

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());
app.use(express.static(path.join(__dirname, 'my-app/dist')));

const MONGO_URI= "mongodb+srv://AM22147:abdul123@cluster0.g1twvpj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// e.connect("mongodb://mogo-db/users")
mongoose.connect(MONGO_URI)
//mongoose.connect("mongodb://mongo-db/test")
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });


const User = mongoose.model('User', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'my-app/dist', 'index.html'));
  });
  

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {

    console.log("back",email,password)
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    
    if (password!=user.password) {
        console.log("invalid")
      return res.status(400).json({ message: 'Invalid password' });
    }


    return res.status(200).json({ message: 'Login successful' });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server error' });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
