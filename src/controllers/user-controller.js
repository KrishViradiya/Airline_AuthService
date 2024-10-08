const UserService = require("../services/user-service");

const userService = new UserService();

const create  = async (req,res) => {
    try {
        const user = await userService.create({email:req.body.email, password:req.body.password});
        console.log("USer ----->",user);
        return res.status(201).json({
            data:user,
            success:true,
            message:"User created successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            err:error,
            message:"Unable to create user",
            success:false
        })
    }
}

const signIn = async(req,res) => {
    try {
        const {email,password} = req.body;
        const response = await userService.signIn(email,password);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully signedIn",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            err:error,
            message:"Unable to create user",
            success:false
        })
    }
}

module.exports = {
    create,
    signIn
}