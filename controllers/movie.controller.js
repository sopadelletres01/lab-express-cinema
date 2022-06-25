const Movie = require("../models/Movie.model")

const getMovies =  async (req, res, next) => {
    try{
        console.log("conectados a la Dase de Datos");
        const movies = await Movie.findOne({title:"The Leisure Seeker"})
        console.log("Movies",movies)
        res.render('movies',{movies})
    }
    catch(e){
        console.log(e)
    }
}

module.exports = getMovies