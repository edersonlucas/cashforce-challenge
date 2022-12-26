import express from 'express';
import ErrorMiddleware from './middlewares/ErrorMiddlware';
import orderRouter from './routes/OrderRouter';

const app = express();

app.use(express.json());
app.use(orderRouter);
app.use(ErrorMiddleware.error)

export default app;
