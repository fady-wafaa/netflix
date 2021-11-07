const  {MoviesSchema}  = require("../model/modelMovies");

// ! ===> getAllMovies <===
const getAllMovies = async(req,res) =>{
    try {
        const movies = await MoviesSchema.find({});
        res.status(200).json({message:"success" , movies})
    } catch ({errors}) {
        res.status(400).json({message:"errors" , errors})
    }
}


// ! ===> getIDMovies <===

const getMoviesID = async(req,res) =>{
    try {
        const dataID = await MoviesSchema.findById(req.params.id);
        res.status(200).json({message:"success", dataID});
    } catch ({errors}) {
        res.status(400).json({message:"errors", errors});
    }
}












module.exports ={
    getAllMovies,
    getMoviesID
}