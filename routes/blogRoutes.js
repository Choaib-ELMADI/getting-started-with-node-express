const express = require('express');
const { blog_index, blog_new_post, blog_new_get, blog_single, blog_delete } = require('../controllers/blogController');

const router = express.Router();

router.get('/', blog_index);

router.post('/', blog_new_post);

router.get('/new', blog_new_get);

router.get('/:id', blog_single);

router.delete('/:id', blog_delete);

module.exports = router;