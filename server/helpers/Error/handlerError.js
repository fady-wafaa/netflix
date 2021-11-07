module.exports = (handler)=>(req,res,next)=>{
    handler(req,res,next).catch((error)=>{
        return res.status(400).json({error:"something went wrong"})
    })
}