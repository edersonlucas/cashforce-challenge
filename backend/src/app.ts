import express from 'express';
import cors from 'cors';
import ErrorMiddleware from './middlewares/ErrorMiddlware';
import orderRouter from './routes/OrderRouter';
import providerRouter from './routes/ProviderRouter';
import authRouter from './routes/AuthRouter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(orderRouter);
app.use(providerRouter);
app.use(authRouter);
app.use(ErrorMiddleware.error);

export default app;
