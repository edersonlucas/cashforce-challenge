import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const orderRouter = Router();

orderRouter
  .get('/order/:id', new OrderController().getAllByUserId);

export default orderRouter;
