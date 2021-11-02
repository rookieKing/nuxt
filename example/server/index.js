import express from 'express';
import user from './router/user';

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/', user({ router }));

export default app;
