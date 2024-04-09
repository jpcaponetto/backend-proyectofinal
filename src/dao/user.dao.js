import userModel from "./models/user.model.js";

export default class UserDao {
  static create(payload) {
    return userModel.create(payload);
  }

  static findBy(query) {
    return userModel.findOne(query);
  }

  static async updatePartialBy(id, query) {
    return userModel.findByIdAndUpdate(id, query);
  }
  static findByEmail(email) {
    return userModel.findOne({ email: email });
  }

  static updateById(id, payload) {
    return userModel.updateOne({ _id: id }, { $set: payload });
  }

  static deleteById(id) {
    return userModel.deleteOne({ _id: id });
  }

  static updateRoleById(id, role) {
    return userModel.updateOne({ _id: id }, { $set: { role: role } });
  }

  static updatePassword(id, password) {
    return userModel.updateOne({ _id: id }, { $set: { password: password } });
  }
}
