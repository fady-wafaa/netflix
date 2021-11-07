const sendEmail = require("../../../helpers/Email/sendEmail");
const {hashing} = require("../../../helpers/hashing/hashing");
const { signToken } = require("../../../helpers/token/token");
const user = require("../../../schema/User.shcema")
require("dotenv").config()

const jwt = require('jsonwebtoken');

// ! Add User //

const addUser = async(req,res)=>{
    try {
        const {name , password  , email} = req.body;
       
        const getUser = await user.findOne({email})
     
        if(getUser){
            res.status(401).json({message:"email is aleardy exisst"})
        }
        const hashPassword = await hashing(password);
        const data = await user.create({name ,password:hashPassword , email});

        const token = await signToken({email})
        let message = `<a href= '${
            process.env.URL_PROJ + token
          }'> virfy account</a>`;
          await sendEmail(email, message);
          res.status(201).json({ message: 'success', data });
        } catch (error) {
          res.status(500).json({ message: 'error', error });
    }
};


// ===> confirmedEmail <====
const confirmedEmail = async(req,res)=>{
    try {
            let {token} = req.params;
       
    if(token){
        jwt.verify(token , process.env.JWT_SECRET , async(err,decoded)=>{
            if(err){
        
                res.json({ error: 'in-valid signature' });
            }else{
                const getUser = await user.findOne({email:decoded.email});
                console.log(getUser)
                if(getUser){
                    if(getUser.confirmed){
                        res.json({ error: 'in-valid confirmed Email' });
                    }else{
                     await user.findOneAndUpdate({ email: getUser.email , confirmed: true , new: true });
                        //   const updateUser = 
                      
                          res.redirect("http://localhost:3000/Home")
                        // res.json({ message: 'confirmed', updateUser });
                    }
                }else{
                    res.json({ error: 'in-valid user' });
                }
            }
        })
    }else {
    
        res.json({ error: 'in-valid token' });
      }
    } catch (error) {
           res.status(400).json({ error: 'error' });
    }

};







module.exports = {
    addUser,
    confirmedEmail
}