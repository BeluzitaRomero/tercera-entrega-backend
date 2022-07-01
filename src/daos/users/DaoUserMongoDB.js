const ContainerMongoDB = require("../../containers/containerMongoDB");
const userSchema = require("../models/user.model.js");

class DaoUserMongoDB extends ContainerMongoDB {
  constructor() {
    super("users", userSchema);
  }

  // async getByMail(email, pass, res) {
  //   try {
  //       const response = await UsuariosModel.find({email: email, pass: pass});
  //       res(response);
  //   } catch (err) {
  //       res(err)
  //   }
  // }
}

module.exports = DaoUserMongoDB;
