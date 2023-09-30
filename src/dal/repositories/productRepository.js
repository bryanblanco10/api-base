import { BaseRepository } from "./baseRepository";

export class ProductRepository extends BaseRepository {
  constructor({ db }) {
    super(db.sequelize.models, "Product");
    this._db = db;
    this._model = db.sequelize.models;
  }

  getAllEnterprise() {
    return this._model.Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] },
      include: [
        {
          model: this._model.Category,
          as: "category",
          attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] },
        },
      ],
    });
  }

  getProduct(uuid) {
    return this._model.Product.findOne({
      where: {
        uuid,
      },
      attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] },
      include: [
        {
          model: this._model.Category,
          as: "category",
          attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] },
        },
        {
          model: this._model.ImageProduct,
          where: { productUuid: uuid, status: true },
          as: "imageProduct",
          required: false,
          attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] },
        },
      ],
    });
  }
}
