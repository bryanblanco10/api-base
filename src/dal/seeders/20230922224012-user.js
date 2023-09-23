"use strict";
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync();
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        uuid: "637de8e8-5659-4065-ad44-8c60a5bdacf5",
        fullname: "Bryan Blanco Villero",
        username: "bryanbv10",
        password: bcrypt.hashSync("Barcelona10", salt),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("users", {}, null);
  },
};
