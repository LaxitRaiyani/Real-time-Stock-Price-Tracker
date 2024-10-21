const express = require('express');
const { connect } = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));



const authRoutes = require('./routes/auth');
const stockRoutes = require('./routes/stock');
const pricealertRoutes = require('./routes/pricealert');
const watchlistRoutes = require('./routes/watchlist');

app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/pricealert', pricealertRoutes);
app.use('/api/watchlist', watchlistRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
