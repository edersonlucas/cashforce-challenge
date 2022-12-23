import app from './app';

const PORT = Number(process.env.BACKEND_PORT) || 3000;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;