import { currentEnv } from "../../config/environments";
import constants from "../helpers/constants";
import { generateError } from "../helpers/generateErrorHelpers";

export function authPublicMiddleware(req, res, next) {
  const appPublicKey = req.header("appPublicKey");
  if (!appPublicKey || appPublicKey !== currentEnv.API_KEY) {
    generateError(constants.STATUS_401, constants.ERROR_AUTH_PUBLIC_KEY);
  }
  next();
}
