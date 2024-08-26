const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

// GET all blogs
router.get('/', (req, res) => {
  res.json({ message: 'GET all blogs' });
});

// get a single blog
router.get('/:id', (req, res) => {
  res.json({ message: 'GET a single blog' });
});

// create a blog
router.post('/', async (req, res) => {
  const { title, body, author } = req.body;

  try {
    const blog = await Blog.create({ title, body, author });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
