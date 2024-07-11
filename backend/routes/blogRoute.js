const express = require('express');

const router = express.Router();

// GET all blogs
router.get('/', (req, res) => {
  res.json({ message: 'GET all blogs' });
});

// get a single blog
router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single blod' });
});

// create a blog
router.post('/', (req, res) => {
  res.json({ message: 'CREATE a new blog' });
});

// delete a blog
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a blog' });
});

// update a blog
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a blog' });
});

module.exports = router;
