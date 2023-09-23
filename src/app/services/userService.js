import { BaseService } from "./baseServices";

export class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    this._userRepository = UserRepository;
  }

  async getUserByUsername(username) {
    return await this._userRepository.getUserByUsername(username);
  }
}
