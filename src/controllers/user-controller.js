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

module.exports = {
    create
}