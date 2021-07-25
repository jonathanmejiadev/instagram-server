import { Router } from 'express';
import authRoutes from './auth';

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('Welcome to Instagram API'));
indexRouter.use('/auth', authRoutes);

export default indexRouter;
