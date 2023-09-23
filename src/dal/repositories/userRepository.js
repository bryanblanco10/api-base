import { BaseRepository } from "./baseRepository";
export class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db.sequelize.models, "User");
    this._db = db;
    this._model = db.sequelize.models;
  }

  getUserByUsername(username) {
    return this._model.User.findOne({
      attributes: ["uuid", "fullname", "username", "password"],
      where: { username },
    });
  }
}
