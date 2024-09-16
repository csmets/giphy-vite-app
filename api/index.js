/*
* This is used for Vercel Serverless functions
*/

import express from 'express'
import 'dotenv/config'
import { searchEndpoint, trendingEndpoint } from './giphy-endpoints.js'

const app = express();
app.use(express.json());

const port = 3000;

// pass through request to avoid leaking API key
app.get('/api/search', searchEndpoint)

// pass through request to avoid leaking API key
app.get('/api/trending', trendingEndpoint)

app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ "message": 'Something broke!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})