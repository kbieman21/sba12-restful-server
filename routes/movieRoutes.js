const express = require('express');
const {searchedMovies, getMoviesById} = require('../controllers/movieController')


const movieRouter = express.Router();


// Routes
/**
 * GET /api/movies - THIS IS ONLY FOR TEST
 */ 
movieRouter.get('/', (req, res)=>{
    res.send('Sending all movies...' )
})


/**
 * GET /api/movies/search
 */
movieRouter.get('/search', searchedMovies);


/**
 * GET /api/movies/:id
 */
movieRouter.get('/:id', getMoviesById)



module.exports = movieRouter;