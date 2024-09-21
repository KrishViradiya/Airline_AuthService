const { User } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      console.log(user);
      return user;
    } catch (error) {
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
}

module.exports = UserRepository;
