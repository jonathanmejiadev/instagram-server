import { Router } from 'express';
import * as authCtrl from '../controllers/auth'

const authRouter = Router();

authRouter.post('/register', authCtrl.register);
authRouter.post('/login', authCtrl.login);

export default authRouter;