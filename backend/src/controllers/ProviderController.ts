import { NextFunction, Request, Response } from 'express';
import ProviderService from '../services/ProviderService';
import ErrorGenerator from '../utils/ErrorGenerator';

export default class ProviderController {
  private service: ProviderService;

  constructor() {
    this.service = new ProviderService();
    this.getById = this.getById.bind(this);
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const provider = await this.service.getById(id);
      if (!provider) throw new ErrorGenerator(404, 'Provider not found!');
      return res.status(200).json(provider);
    } catch (err) {
      next(err);
    }
  }
}
