const { User, UserSchema } = require("./user.js");
const { Category, CategorySchema } = require("./category.js");
const { Product, ProductSchema } = require("./product.js");
const { ImageProduct, ImageProductSchema } = require("./imagesProduct.js");

export function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  ImageProduct.init(ImageProductSchema, ImageProduct.config(sequelize));
  // Associate
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  ImageProduct.associate(sequelize.models);
}
