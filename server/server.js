const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.get('/api/questions', async (req, res) => {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=10');
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
