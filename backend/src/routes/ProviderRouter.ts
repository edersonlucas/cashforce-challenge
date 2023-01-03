import { Router } from 'express';
import ProviderController from '../controllers/ProviderController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const providerRouter = Router();

providerRouter
  .get('/provider/:id', AuthMiddleware.auth, new ProviderController().getById);

export default providerRouter;
