import { BaseRepository } from "./baseRepository";

export class CategoryRepository extends BaseRepository {
  constructor({ db }) {
    super(db.sequelize.models, "Category");
    this._db = db;
    this._model = db.sequelize.models;
  }
}
