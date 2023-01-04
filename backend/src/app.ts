import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import ErrorMiddleware from './middlewares/ErrorMiddlware';
import orderRouter from './routes/OrderRouter';
import providerRouter from './routes/ProviderRouter';
import authRouter from './routes/AuthRouter';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerDocs = require('./swagger.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(orderRouter);
app.use(providerRouter);
app.use(authRouter);
app.use(ErrorMiddleware.error);

export default app;
