import constants from "../helpers/constants";

const notFoundMiddleware = (req, res, next) => {
  res
    .status(404)
    .send({ status: constants.STATUS_400, message: constants.ERROR_NOT_FOUND })
};

export { notFoundMiddleware };