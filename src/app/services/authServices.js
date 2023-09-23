import { compareSync } from "bcryptjs";
import { constants, generateToken, reportError } from "../helpers";

export class AuthService {
  constructor({ UserService, config }) {
    this._userService = UserService;
    this._config = config;
  }

  async login(user) {
    const { username, password } = user;

    const hasUser = await this._userService.getUserByUsername(username);

    if (!hasUser) reportError(constants.ERROR_USER);

    if (!hasUser || !compareSync(password, hasUser.password))
      reportError(constants.LOGIN);

    const userEncode = this.buildUserEncode(hasUser);
    const token = generateToken(
      { user: userEncode },
      this._config.SECRET,
      "8h"
    );

    return {
      token,
      user: { ...userEncode },
      status: 200,
      msg: `Welcome ${userEncode.fullname}`,
    };
  }

  buildUserEncode(user) {
    return {
      uuid: user.uuid,
      fullname: user.fullname,
      username: user.username,
    };
  }
}
