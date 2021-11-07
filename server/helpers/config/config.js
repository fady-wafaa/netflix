const mongoose =require('mongoose');

const dotenv = require('dotenv');
dotenv.config()

const connection = async() => {
    try {
        await mongoose.connect(process.env.DATABASE ,{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection