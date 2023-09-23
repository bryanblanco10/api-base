import { generateError, constants } from "./index";

export function reportError(option) {
  switch (option) {
    case constants.REGISTER:
      generateError(constants.STATUS_422, "User is registered");
      break;
    case constants.ERROR_USER:
      generateError(constants.STATUS_422, "User not registered");
      break;
    case constants.LOGIN:
      generateError(constants.STATUS_422, "Wrong email or password!");
      break;
    case constants.USERNAME:
      generateError(constants.STATUS_422, constants.USERNAME);
      break;
    case constants.EMAIL:
      generateError(constants.STATUS_422, constants.EMAIL);
      break;
    case constants.FORMAT_IMAGE_INVALID:
      generateError(constants.STATUS_422, constants.FORMAT_IMAGE_INVALID);
      break;
    case constants.NO_AUTHORIZED:
      generateError(constants.STATUS_422, constants.NO_AUTHORIZED);
      break;
    default:
      break;
  }
  throw error;
}
