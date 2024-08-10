const UserModel = require("../Models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async(req, res) =>{
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409)
                    .json({message: `User already exists`, success: false});
        }
        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password, 10);
        await UserModel.save();
        res.status(201)
            .json({
                message: "SignUp Successfully",
                success: true
            })
    }
    catch(err){
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })

    }
}

const login = async(req, res) =>{
    try{
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        const errorMessage = `Authentication failed, email or passwoed is wrong`
        if(!user){
            return res.status(403)
                    .json({message: errorMessage, success: false});
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual){
            return res.status(403)
            .json({
                message: "SignUp successful",
                success: "true"
            })
        }

        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.status(200)
            .json({
                message: "login Successfully",
                success: true,
                jwtToken,
                email,
                name: user.name
            })
    }

    catch(err){
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            })
    }
}

module.exports = {
    signup,
    login
}