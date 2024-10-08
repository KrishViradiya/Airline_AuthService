const UserRepository = require("../repository/user-repository");
const jwt = require('jsonwebtoken');
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
}

module.exports = UserService;