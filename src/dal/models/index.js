"use strict";

import Sequelize from "sequelize";
import { currentEnv } from "../../config/environments";
import { setupModels } from "./index.models";
const config = currentEnv.DB;
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: config.logging,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("BD Connected");
  })
  .catch((err) => {
    console.log("BD not connected");
  });

setupModels(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
