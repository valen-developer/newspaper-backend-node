import { Router } from 'express';
import { authRouter } from './auth.routes';
import { newsRouter } from './news.routes';

export const router: Router = Router();

router.use('/api', authRouter);
router.use('/api', newsRouter);
