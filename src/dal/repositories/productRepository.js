import { BaseRepository } from "./baseRepository";

export class ProductRepository extends BaseRepository {
  constructor({ db }) {
    super(db.sequelize.models, "Product");
    this._db = db;
    this._model = db.sequelize.models;
  }
}
