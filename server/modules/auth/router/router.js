
const validationReauest = require('../../../middleware/common/validations');
const { logIn, googleLogIn } = require('../controller/LogIn');
const { addUser, confirmedEmail } = require('../controller/register');
const { signUp, logInValidate } = require('../validation/joi');

const router = require('express').Router();

router.post("/api/signUp",validationReauest(signUp) , addUser)
router.get('/virfiy/:token',confirmedEmail);//! ===|> LogInEmail
router.post("/api/GoogleLogin",googleLogIn);//! ===|> GoogleLogin
router.post('/api/logIn',validationReauest(logInValidate),logIn);//! ===|> LogIn






module.exports = router;