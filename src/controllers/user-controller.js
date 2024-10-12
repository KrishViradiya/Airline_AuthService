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
        return res.status(error.statusCode).json({
            data:{},
            err:error.expanation,
            message:error.message,
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
        return res.status(error.statusCode).json({
            data:{},
            err:error.expanation,
            message:error.message,
            success:false
        })
    }
}

const isAuthenticated = async(req,res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:'User is authenticated and token in valid' 
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            err:error,
            message: "user is not Authenticated",
            success:false
        })
    }
}

const isAdmin = async(req,res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            data:response,
            err:{},
            message:"Successfully fetched whether the user is admin or not",
            success:true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something went wrong ",
            data:{},
            success:false,
            err:error
        })
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin
}