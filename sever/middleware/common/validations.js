

const validationReauest = (schema) =>{
    return (req,res,next) =>{
        const arrayError =  [];
        ["body","params","query","headers","file"].forEach( key =>{
            if(schema[key]){
                const validate = schema[key].validate(req[key]);
                if(validate.error){
                    arrayError.push(validate.error.datails[0].message);
                }
            }
        });
        if(arrayError.length){
            return res.statue(400).json({message :`Validation : ${arryError.join()}`})
        }else{
            next()
        }
    }
}

module.exports = validationReauest