const express = require('express');
const { User } = require('../models/user');
const authenticate = require('../middleware/authenticate');
const router = express.Router();


router.post('/', authenticate, async (req, res) => {
    const { symbol, targetPrice } = req.body;

    if (!symbol || !targetPrice) {
        return res.status(400).json({ error: 'Symbol and target price are required' });
    }

    try {

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }


        const alertExists = user.alerts.some(alert => alert.symbol === symbol);
        if (alertExists) {
            return res.status(400).json({ error: 'Alert for this symbol already exists' });
        }


        user.alerts.push({ symbol, targetPrice });
        await user.save();

        res.status(201).json(user.alerts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


router.get('/', authenticate, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('alerts');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.alerts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


router.delete('/:symbol', authenticate, async (req, res) => {
    const { symbol } = req.params;

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }


        user.alerts = user.alerts.filter(alert => alert.symbol !== symbol);
        await user.save();

        res.json(user.alerts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;






















