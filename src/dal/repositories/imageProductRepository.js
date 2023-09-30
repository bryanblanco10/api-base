import { BaseRepository } from "./baseRepository";

export class ImageProductRepository extends BaseRepository {
  constructor({ db }) {
    super(db.sequelize.models, "ImageProduct");
    this._db = db;
    this._model = db.sequelize.models;
  }

  async getImageProductByName(name) {
    return this._model.ImageProduct.findOne({
      where: { name, status: 1 },
      attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] },
    });
  }
}
