const {model,Schema} = require("mongoose");

// aqui creamos el Schema
const movieSchema = new Schema({
  title: {
    type: String,
    required: true, // este elemento es obligatorio, si no, error!
    unique: true // este elemento no puede repetirse, si se fuese a repetir, error!
  },

  director: String,

  stars: [String],

  image: String,

  // como agregar arrays como propiedades.
  description: String, 

  showtimes: [String], 
  
});

// crear el Model
const Movie = model("Movie", movieSchema);
// mongoose.model(nombreDelModelo, schemaDelModelo)
// "student" indica como se llamara nuestra colección => "students"

module.exports = Movie;
