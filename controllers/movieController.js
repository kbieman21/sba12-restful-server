

function getSearchedMovies(req, res){
    res.send('Sending searched movies...');
}

function getMoviesById(req, res){
     res.send(`Data for movies: ${req.params.id}`)
}

module.exports = {getSearchedMovies, getMoviesById,};