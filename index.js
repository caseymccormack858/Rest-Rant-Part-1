require('dotenv').config();
const express = require('express');
const app = express();

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3001');
});
