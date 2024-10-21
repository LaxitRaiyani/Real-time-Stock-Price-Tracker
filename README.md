# Real-time Stock Price Tracker

This project is a web application that displays real-time stock prices for a selected list of companies. Users can add/remove companies from their watchlist and receive price alerts. The application utilizes the MERN stack (MongoDB, Express, React, Node.js) and Alpha Vantage API for fetching stock prices.

## Features

- **Real-time stock price updates**
- **Watchlist management** (add/remove companies)
- **Price alerts** for selected stocks
- **MongoDB integration** for persistent watchlist storage

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: Alpha Vantage (for real-time stock data)
- **Styling**: Bootstrap, CSS

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v14+)
- MongoDB (local or cloud instance such as MongoDB Atlas)
- Alpha Vantage API Key (you can get one from [Alpha Vantage](https://www.alphavantage.co/))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LaxitRaiyani/Real-time-Stock-Price-Tracker
   cd real-time-stock-tracker
   ```

2. Set up environment variables

   ```bash
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
   ```

3. Install backend dependencies
   ```bash
   cd server
   npm install
   npm start
   ```

4. Install frontend dependencies
   ```bash
   cd client
   npm install
   npm start
   ```
