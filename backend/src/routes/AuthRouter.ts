import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = Router();

authRouter
  .post('/login', new AuthController().login);

export default authRouter;
