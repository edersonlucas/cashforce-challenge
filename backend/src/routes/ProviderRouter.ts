import { Router } from 'express';
import ProviderController from '../controllers/ProviderController';

const providerRouter = Router();

providerRouter
  .get('/provider/:id', new ProviderController().getById);

export default providerRouter;
