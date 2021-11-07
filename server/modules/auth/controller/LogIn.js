const { compareing } = require("../../../helpers/hashing/hashing");
const { signToken } = require("../../../helpers/token/token");
const user = require("../../../schema/User.shcema")
require("dotenv").config()
const {OAuth2Client} = require('google-auth-library');

const { nanoid } = require('nanoid');




const logIn = async(req,res,next)=>{
    try {
        const {email , password} =req.body;
        const getUser = await user.findOne({email})
        if(!getUser){
           
            res.status(400).json({message:"email is aleardy exisst" }) 
        }
        if(!getUser.confirmed){
           
            res.status(401).send({message:"There is no account. Please confirmed Email a account"}) 
        }
        const matchPassword = await compareing(password, getUser.password);
        if (!matchPassword) {
        return  res.status(401).json({ message: 'Invalid email or password' });
        }
        if(getUser.Inactive){
          await user.findOneAndUpdate({email:getUser.email,Inactive:false,new:true})
          next()
        }
        const {_id,name,roles,imgUser,Inactive,confirmed} = getUser;
        const token = await signToken({
            _id,name,roles,imgUser,Inactive,confirmed
        })
        res.status(200).json({message:"success",token})
    } catch (error) {
       return res.status(401).json({message:"errorr", error: error.message });
    }
};


const  googleLogIn = async(req,res)=>{
    try {
        const client = new OAuth2Client(process.env.ID_GOOGLE);
        const {tokenId , googleId} = req.body;
       let {payload} = await client.verifyIdToken({
            idToken:tokenId,
            audience:process.env.ID_GOOGLE
        })
        // console.log(payload) 
        if(payload.email_verified){

                const User = await user.findOne({googleId })
                if(User){
                    const token = await signToken({_id:User._id,roles:User.roles});
                    // console.log(token) 
                      res.status(200).json({ message: 'success', token, });
                  }else{
                    // const validaEmail = await user.findOne({email:payload.email})
                    // if(validaEmail){
                    //     res.status(401).json({message:"Email not verired"})
                    // }
                       
                        const newUser = await user.create({name:payload.name,email:payload.email,confirmed:true,password:nanoid(),googleId:googleId}) 
                        const token = await signToken({newUser});
                        res.status(200).json({ message: 'success', token });
                    
                  }
            

        }else{
            res.status(401).json({message:"Email not verired"})
        }
    } catch (error) {
        
    }
}









module.exports = {
    logIn,
    googleLogIn,
 
}