const express = require('express');


router.get('/', loginValidation, login);


module.exports = router; 
