import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const orderRouter = Router();

orderRouter
  .get('/orders', AuthMiddleware.auth, new OrderController().getAll);

export default orderRouter;
