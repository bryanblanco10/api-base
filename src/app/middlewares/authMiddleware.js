import jwt from "jsonwebtoken";
import { currentEnv } from "../../config/environments";
import constants from "../helpers/constants";
import { generateError } from "../helpers/generateErrorHelpers";

export function authMiddleware(req, res, next) {
  const token = req.header("Authorization")
    ? req.header("Authorization").split(" ")[1]
    : null;

  if (!token) {
    generateError(constants.STATUS_401, constants.ERROR_AUTH_PUBLIC_KEY);
  }

  jwt.verify(token, currentEnv.SECRET, (error, decodedToken) => {
    if (error) {
      generateError(constants.STATUS_419, constants.ERROR_AUTH_TOKEN);
    }

    req.user = decodedToken.user;
    next();
  });
}
