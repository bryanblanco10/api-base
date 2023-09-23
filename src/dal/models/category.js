const { Model, DataTypes, Sequelize } = require("sequelize");

const CATEGORY_TABLE = "categories";

const CategorySchema = {
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
class Category extends Model {
  static associate({ Product }) {
    this.hasOne(Product, {
      foreignKey: "categoryUuid",
      as: "product",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      modelName: "Category",
      tableName: CATEGORY_TABLE,
      timestamps: true,
    };
  }
}

module.exports = {
  CATEGORY_TABLE,
  CategorySchema,
  Category,
};
