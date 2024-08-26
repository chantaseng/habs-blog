const express = require('express');
const {
  getBlogs,
  getBlog,
  createBlog,
} = require('../controllers/blogController');

const router = express.Router();

// GET all blogs
router.get('/', getBlogs);

// get a single blog
router.get('/:id', getBlog);

// create a blog
router.post('/', createBlog);

// delete a blog
router.delete('/:id', (req, res) => {
  res.json({ message: 'DELETE a blog' });
});

// update a blog
router.patch('/:id', (req, res) => {
  res.json({ message: 'UPDATE a blog' });
});

module.exports = router;
