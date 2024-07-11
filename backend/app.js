require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoute');

// express app
const app = express();

// middleware
app.use(express.json());

// route
app.use('/api/blogs', blogRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(
        `connected to db and listening on port ${process.env.PORT}!!`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
