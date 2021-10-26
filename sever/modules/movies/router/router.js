const { getAllMovies, getMoviesID } = require("../controller/movies");
const { getDataTv, getTvID } = require("../controller/Tv");

const router =require("express").Router();




// ! ===|> movies <| ===
router.get("/api/getmovise",getAllMovies) //! ==> getAllMovies
router.get("/api/getmoviseID/:id",getMoviesID) //! ==> getMoviesID


// ! ===|> TV <| ===
router.get("/api/tv",getDataTv) //! ==|>  getAllDataTv
router.get("/api/tv/:id",getTvID) //! ==|>  getDataTvID








module.exports = router