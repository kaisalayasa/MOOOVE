const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
app.use(cors());
app.use(express.json()); 

let listings=[]

const authRoutes = require('./routes/auth.js');
app.use('api/auth',authRoutes);

const { authenticateJWT } = require('./middleware/auth');
app.get('/api/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});


app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/api/listing',(req,res)=>{
  const newListing= req.body;
  newListing.id = listings.length +1;
  listings.push(newListing);
  res.status(201).json(newListing);
  console.log(newListing)
});

app.get('/api/listing',(req,res)=>{
  res.status(200).json(listings)
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});