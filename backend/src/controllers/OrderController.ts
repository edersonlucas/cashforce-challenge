import { NextFunction, Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
    this.getAllByUserId = this.getAllByUserId.bind(this);
  }

  public async getAllByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const orders = await this.service.getAllByUserId(userId);
      return res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  }
}
