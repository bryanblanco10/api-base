export class AuthController {
  constructor({ AuthService }) {
    this._authService = AuthService;
  }
  async login(req, res) {
    const { body } = req;
    const user = await this._authService.login(body);

    return res.status(200).send(user);
  }
}
