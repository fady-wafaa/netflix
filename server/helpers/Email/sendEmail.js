require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async(email , message)=>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.USER_EMAIL, 
            pass: process.env.PASS_EMAIL, 
        }
        ,
    
        tls: {
          rejectUnauthorized: false
      }
    });
    await transporter.sendMail({
        from: email, 
        to: email, 
        subject: "Hello in NETFLIX", 
        text: "NETFLIX", 
        html: message, 
      });
};

module.exports = sendEmail