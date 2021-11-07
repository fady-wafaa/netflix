
const axios = require('axios').default;
const connection = require("../helpers/config/config");
const { MoviesSchema, TvSchema } = require("../modules/movies/model/modelMovies");

// require("dotenv").config();



 const importData = async () => {
     // ! ==> movies <== //
    try {
        await MoviesSchema.deleteMany({});
        let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361");
             await MoviesSchema.insertMany(data.results.map((x) => x))
    } catch (error) {
        console.error("Error with data import", error);
    }



}




const TvData = async () =>{

    // ! ==> tv <== //
    try {

        await TvSchema.deleteMany({});
        let {data} = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=0e65c4916d7a973e8e2b7e631a019743')
               await TvSchema.insertMany(data.results.map((x) => x))
    } catch (error) {
        console.error("Error with data import", error);
    }
}

module.exports ={
    TvData,
    importData
}

connection()