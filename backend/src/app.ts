import express from 'express';
import orderRouter from './routes/OrderRouter';

const app = express();

app.use(express.json());
app.use(orderRouter);

export default app;
