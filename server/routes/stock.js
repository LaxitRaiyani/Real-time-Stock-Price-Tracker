const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/symbol', async (req, res) => {
  const { symbol } = req.params;
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;
  const interval = '5min';

  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=${apiKey}`
    );

    const data = response.data['Time Series (5min)'];

    if (data) {
      const latestTime = Object.keys(data)[0];
      const latestData = data[latestTime];
      const stockPrice = latestData['1. open'];

      res.json({ symbol, price: stockPrice });
    } else {
      res.status(400).json({ error: 'No data available for the given stock symbol' });
    }
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Error fetching stock data' });
  }
});

module.exports = router;