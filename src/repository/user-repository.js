const { where } = require("sequelize");
const { User , Role } = require("../models/index");
const ValidationError = require("../utils/validation-error");
const ClientError = require("../utils/client-error");
const { StatusCodes } = require("http-status-codes");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      console.log(user);
      return user;
    } catch (error) {
      if(error.name == 'SequelizeValidationError'){
        throw new ValidationError(error)
      }
      console.log("Something went wrong in the repository level");
    }
  }

  async destroy(userId) {
    try {
      const response = await User.destroy({ where: { id: userId } });
      return true;
    } catch (error) {
      console.log("Something went wrong in the user repo");
    }
  }

  async getUserById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["id", "email"],
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in the user repo");
    }
  }

  async getuserEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
     
      if(!user){
        throw new ClientError("Attributr not found",
          "Invalid email sent in the request",
          "Please check the email, as there is no record of the email you've sent",
          StatusCodes.NOT_FOUND
        )
      }

      return user;
    } catch (error) {
      console.log("Something went wrong in the user repo");
    }
  }

  async isAdmin(userId){
    try {
      const user = await User.findByPk(userId);
      console.log("User printing in the isAdmin", user);
      const adminRole = await Role.findOne({
        where:{
          name: "ADMIN"
        }
      })
      console.log("Admin role printing in the isAdmin" , adminRole);
      return user.hasRole(adminRole);
    
    } catch (error) {
      console.log("Something went wrong in the repository layer ")
    }
  }
}



module.exports = UserRepository;
