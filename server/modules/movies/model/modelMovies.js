
const  Mongoose  = require("mongoose");



// ! ===> movies
const movies = require("../../../schema/movies.shema");
const MoviesSchema = Mongoose.model("movies", movies);

// ! ===>  Tv  <===
const Tv = require("../../../schema/Tv.schema");
const TvSchema = Mongoose.model("tv", Tv)



module.exports ={
    MoviesSchema,
    TvSchema
}