const express = require('express');
const authenticate = require('../middleware/authenticate'); 
const User = require('../models/User'); 
const router = express.Router(); 

router.post('/watchlist', authenticate, async (req, res) => {
  const { symbol } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user.watchlist.includes(symbol)) {
      user.watchlist.push(symbol);
    }
    await user.save();
    res.json(user.watchlist);
  } catch (error) {
    res.status(500).send('Error updating watchlist');
  }
});

module.exports = router; 