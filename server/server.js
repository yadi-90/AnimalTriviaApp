const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


const cors = require('cors');
const app = express();
const PORT = 3000;

const url='https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=boolean';

app.get('/api/questions', async (req, res) => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=boolean');
        const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
