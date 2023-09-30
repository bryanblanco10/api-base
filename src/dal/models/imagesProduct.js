const { Model, DataTypes } = require("sequelize");
const { PRODUCT_TABLE } = require("../models/product");
const IMAGES_PRODUCT_TABLE = "images-product";

const ImageProductSchema = {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "required field" },
      notNull: { msg: "not null field" },
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  productUuid: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: PRODUCT_TABLE,
      key: "uuid",
    },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deleteAt: {
    type: DataTypes.DATE,
  },
};
class ImageProduct extends Model {
  static associate({ Product }) {
    this.belongsTo(Product, {
      foreignKey: "productUuid",
      as: "product",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: "ImageProduct",
      tableName: IMAGES_PRODUCT_TABLE,
      timestamps: true,
    };
  }
}

module.exports = {
  IMAGES_PRODUCT_TABLE,
  ImageProductSchema,
  ImageProduct,
};
