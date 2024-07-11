require('dotenv').config();

const express = require('express');
const blogRoutes = require('./routes/blogRoute');

// express app
const app = express();

// middleware
app.use(express.json());

// route
app.use('/api/blogs', blogRoutes);

// listen for request
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}!!`);
});
