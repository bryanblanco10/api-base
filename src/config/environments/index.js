import dotenv from "dotenv";
import development from "./development";
import production from "./production";

dotenv.config();

const { NODE_ENV } = process.env;

let currentEnv = development;

if (NODE_ENV == "production") {
  currentEnv = production;
}

export { currentEnv };
