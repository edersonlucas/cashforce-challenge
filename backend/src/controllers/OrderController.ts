import { NextFunction, Response } from 'express';
import OrderService from '../services/OrderService';
import IRequestUser from '../interfaces/IRequestUser';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
    this.getAll = this.getAll.bind(this);
  }

  public async getAll(req: IRequestUser, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      if (userId) {
        const orders = await this.service.getAllByUserId(userId);
        return res.status(200).json(orders);
      }
    } catch (err) {
      next(err);
    }
  }
}
