const express = require('express');
const moviesController = require('../controllers/movies');

const router = express.Router();

router.get('/', moviesController.getMovies);
router.get('/search', moviesController.searchMovies);

module.exports = router;
