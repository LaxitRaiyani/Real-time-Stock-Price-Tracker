const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).send('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
  res.json({ token });
});
module.exports = router;