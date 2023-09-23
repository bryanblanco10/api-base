const { User, UserSchema } = require("./user.js");
const { Category, CategorySchema } = require("./category.js");
const { Product, ProductSchema } = require("./product.js");

export function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  // Associate
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}
