import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/AuthService';
import ErrorGenerator from '../utils/ErrorGenerator';

export default class AuthController {
  private service: AuthService;

  constructor() {
    this.service = new AuthService();
    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      if (!email) throw new ErrorGenerator(400, 'Email field missing!');
      const token = await this.service.login(email);
      return res.status(200).json({ token });
    } catch (err) {
      next(err);
    }
  }
}
