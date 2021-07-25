import { Router } from 'express';
import authRoutes from './auth';

const indexRouter = Router();

indexRouter.use('/auth', authRoutes);

export default indexRouter;
