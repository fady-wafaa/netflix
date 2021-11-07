const jwt = require("jsonwebtoken");
const rbac = require("../../middleware/auth/rbac/rbac");
require('dotenv').config();

// ! ===| signToken |== //
exports.signToken = async(payload)=>{
    return await jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:process.env.expiresIn});
};


// ! === |> verifyToken <| ===

exports.verifyToken = (endPpint) =>{
    return async(req,res,next)=>{
        if(req.headers.authorization){
            const token = req.headers.authorization.split('')[1];
            if(token){
                try {
                    const decoded = jwt.verify(token,process.env.JWT_SECRET);
                    const isRoles = await rbac.can(decoded.roles,endPpint)
                    if(isRoles){
                        next()
                      }else{
                        res.status(401).json({message:"unauthoraizted"})
                      }
                    } catch (error) {
                      res.status(400).json({message:error})
                    }
              
                    }else{
                      res.status(401).json({message:"unauthoraizted"})
                    }
              
                  }else{
                    res.status(401).json({message:"unauthoraizted"})
                  }
              
              
                }
}