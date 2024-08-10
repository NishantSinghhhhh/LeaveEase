const express = require('express');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { signup, login } = require('../Controllers/AuthController');
const router = express.Router(); // Corrected

router.post('/login', loginValidation, login);

router.post('/signUp', signupValidation, signup);

module.exports = router; 
