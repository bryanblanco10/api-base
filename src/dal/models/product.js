const { Model, DataTypes, Sequelize } = require("sequelize");
const { CATEGORY_TABLE } = require("../models/category");

const PRODUCT_TABLE = "products";

const ProductSchema = {
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
  price: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryUuid: {
    type: DataTypes.UUID,
    allowNull: false,
    foreignKey: true,
    references: {
      model: CATEGORY_TABLE,
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
class Product extends Model {
  static associate({ Category }) {
    this.belongsTo(Category, {
      foreignKey: "categoryUuid",
      as: "category",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: "Product",
      tableName: PRODUCT_TABLE,
      timestamps: true,
    };
  }
}

module.exports = {
  PRODUCT_TABLE,
  ProductSchema,
  Product,
};
