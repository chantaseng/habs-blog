const express = require('express');
const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require('../controllers/blogController');

const router = express.Router();

// GET all blogs
router.get('/', getBlogs);

// get a single blog
router.get('/:id', getBlog);

// create a blog
router.post('/', createBlog);

// delete a blog
router.delete('/:id', deleteBlog);

// update a blog
router.patch('/:id', updateBlog);

module.exports = router;
