"use strict";
const { USER_TABLE, UserSchema } = require("../models/user.js");
const { CATEGORY_TABLE, CategorySchema } = require("../models/category.js");
const { PRODUCT_TABLE, ProductSchema } = require("../models/product.js");
const {
  IMAGES_PRODUCT_TABLE,
  ImageProductSchema,
} = require("../models/imagesProduct.js");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(IMAGES_PRODUCT_TABLE, ImageProductSchema);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(IMAGES_PRODUCT_TABLE);
  },
};
