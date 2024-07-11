require('dotenv').config();

const express = require('express');

// express app
const app = express();

// route
app.get('/', (req, res) => {
  res.json({ message: 'welcome to the app' });
});

// listen for request
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!!`);
});
