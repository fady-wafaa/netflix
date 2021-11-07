
const joi = require("joi");


module.exports ={
    signUp:{
        body:joi.object().required().keys({
            name:joi.string().required().$.min(3).max(20).rule({message:"firstName must be between 3 and 20"}),
            password:joi.string().required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/).rule({message:"password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters"}),
            cPassword:joi.any().equal(joi.ref('password'))
            .required()
            .label('Confirm password')
            .messages({ 'any.only': '{{#label}} does not match' }),
            imgUser:joi.string().optional(),
            email:joi.string().required().email({tlds: { allow: ['com', 'net','in','ru'] }}).messages({"string.email":" email is required",}).trim(),
        })
    },
        // !  ===> logIn <==== //
        logInValidate:{
            body:joi.object().required().keys({
                email:joi.string().required().email({tlds: { allow: ['com', 'net','in'] }}).messages({"string.email":" email is required",}).trim(),
                password:joi.string().required().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/).rule({message:"password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters"})
            })
        }
}