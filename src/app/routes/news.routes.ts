import { Router } from 'express';
import { CreateNewsController } from '../controllers/news/CreateNews.controller';
import { VerifyROLEMiddleware } from '../middlewares/VerifyRole.middleware';
import { VerifyTokenMiddleware } from '../middlewares/VerifyToken.middleware';

export const newsRouter = Router();

//Middlewares
const verifyTokenMiddleware = new VerifyTokenMiddleware();
const verifyRoleMiddleware = new VerifyROLEMiddleware();

//Controllers
const createNewsController = new CreateNewsController();

newsRouter.post(
  '/news',
  [verifyTokenMiddleware.run, verifyRoleMiddleware.run],
  createNewsController.run
);
