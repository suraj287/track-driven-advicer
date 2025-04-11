const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', trackRoutes);

mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
  (' MongoDB connected');
  app.listen(PORT, () => (`Server running on http://localhost:${PORT}`));
}).catch(err => console.error('MongoDB Error:', err));
