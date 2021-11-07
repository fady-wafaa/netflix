const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: String,
      default: 'user',
    },
    Inactive: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique:true
    }, 
     confirmed:{
      type:Boolean,
      default:false
      },
      imgUser:{
        type:String
      
      },
      googleId:{
        type:String
      },
      facebookId:{
        type:String
      }
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model('User', userSchema);
module.exports = user;
