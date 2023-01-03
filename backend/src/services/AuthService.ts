import User from '../database/models/User';
import ErrorGenerator from '../utils/ErrorGenerator';
import Auth from '../utils/Auth';

export default class AuthService {
  private model = User;

  private async getByEmail(email: string) {
    const user = await this.model.findOne({
      where: {
        email,
      },
      attributes: ['id', 'name', 'email'],
      raw: true,
    });
    return user;
  }

  public async login(email: string) {
    const data = await this.getByEmail(email);
    if (!data) throw new ErrorGenerator(404, 'User not found!');
    const token = new Auth().Authentication(data);
    return token;
  }
}
