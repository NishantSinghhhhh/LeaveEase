const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(100).required(),
        branch: Joi.string().valid('COMP', 'ENTC', 'IT', 'Mech').required(),
        year: Joi.string().valid('FE', 'SE', 'TE', 'BE').required(),
        class: Joi.string().valid('A', 'B').required(),
        rollNumber: Joi.string().length(4).pattern(/^\d+$/).required(), // Exactly 4 digits
        registrationNumber: Joi.string().min(5).max(6).pattern(/^\d+$/).required(), // 5-6 digits
        fatherName: Joi.string().required(), // Required field for father's name
        fatherPhoneNumber: Joi.string().length(10).pattern(/^\d+$/).required(), // Exactly 10 digits
        classTeacherName: Joi.string().valid('Mr. John Doe', 'Ms. Jane Smith', 'Mr. Albert Brown', 'Ms. Emily Davis').required() // List of possible class teachers
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Bad Request",
            error: error.details
        });
    }
    next();
};


const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(), // Corrected
        password: Joi.string().min(4).max(100).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: "Bad Request", error: error.details });
    }
    next();
}

module.exports = {
    signupValidation,
    loginValidation
}
