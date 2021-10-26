const { Schema } = require("mongoose");

const movies = new Schema({

    name:String,
    vote_average:{
        type:Number
    },
    backdrop_path:{
        type:String
    },
    poster_path:{
        type:String
    },
    first_air_date:{
        type:String
    },
    original_title:{
        type:String
    },
    overview:{
        type:String
    },
    original_language:{
        type:String
    },
    popularity:{
        type:Number
    },
    media_type:{
        type:String
    }

    
},{
    timestamps:true
}
)

module.exports = movies