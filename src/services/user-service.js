const UserRepository = require("../repository/user-repository");

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
}

module.exports = UserService;