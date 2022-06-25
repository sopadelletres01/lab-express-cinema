const express = require('express');
const getMovies = require('../controllers/movie.controller');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Movies
router.get('/movies', async (req, res, next) => {
    try{
        const movies = await Movie.find()
        console.log("conectados a la Dase de Datos");
        console.log("Movies",movies)
        res.render('movies',{movies})
    }
    catch(e){
        console.log(e)
    }
});

router.get('/movies/:id', async (req, res, next) => {
    try{
        const movie = await Movie.findById(req.params.id)
        console.log("Movies",movie)
        res.render('movieDetails',{movie})
    }
    catch(e){
        console.log(e)
    }
});
module.exports = router;
