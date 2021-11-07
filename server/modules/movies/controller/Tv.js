const { TvSchema } = require("../model/modelMovies");

// ! ==> getData
const getDataTv = async(req,res) => {
    try {
        let tv = await TvSchema.find({});
        res.status(200).json({message:"success" , tv})
    } catch (error) {
        res.status(400).json({message:"error" , error})
    }
}


// ! ==> getDataID
const getTvID = async(req,res) => {
    try {
        let tvID = await TvSchema.findById(req.params.id);
        res.status(200).json({message:"success" , tvID})
    } catch (error) {
        res.status(400).json({message:"error" , error})
    }
}




module.exports ={
    getDataTv,
    getTvID
}