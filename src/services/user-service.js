const UserRepository = require("../repository/user-repository");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {JWT_KEY} = require('../config/serverConfig')

class UserService {

    constructor(){
        this.repository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.repository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in user service");
            throw {error}
        }
    }

    async signIn(email,userPassword){
        try {
            const user = await this.repository.getuserEmail(email)
            const matchPass = this.checkPassword(userPassword,user.password);
            if(!matchPass){
                console.log("Password doesn't match");
                throw { error : 'Incorrect Password'}
            }
            const newToken = this.createToken({email:user.email,id:user.id});
            return newToken;
        } catch (error) {
            console.log("Something went wrong in user service");
            throw {error}
        }
    }

    async destroy(userId){
        try {
            const response = await this.repository.destroy(userId);
        } catch (error) {
            console.log("Something went wrong in user service");
            throw {error}
        }
    }

    createToken(user){
        try {
            const res = jwt.sign(user,JWT_KEY,{expiresIn: '1d'});
            return res;
        } catch (error) {
            console.log("Something went wrong in user service");
            throw {error}
        }
    }

    verifyToken(token){
        try {
            const res = jwt.verify(token,JWT_KEY);
            return res;
        } catch (error) {
            console.log("Something went wrong in user service");
            throw {error}
        }
    }

    checkPassword(plainpass,encryptedpass){
        try {
            return bcrypt.compareSync(plainpass,encryptedpass);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserService;