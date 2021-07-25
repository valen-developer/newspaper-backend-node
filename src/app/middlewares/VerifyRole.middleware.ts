import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../../context/shared/domain/HTTPException';
import { UserFinder } from '../../context/User/application/UserFinder';
import { errorHandler } from '../../helpers/errorHandler';
import { getContainer } from '../dic/getContainer';
import { UserUsesCases } from '../dic/userUseCases.injector';
import { Middleware } from './middleware.interface';

const service = 'verify role middleware';

export class VerifyROLEMiddleware implements Middleware {
  public async run(req: Request, res: Response, next: NextFunction) {
    const { uuid } = req.body;

    try {
      const container = getContainer();

      const userFinder: UserFinder = container.get(UserUsesCases.UserFinder);
      const user = await userFinder.getUser(uuid);

      const isAdmin = user.role.value === 'ADMIN_ROLE';

      if (!isAdmin) throw new HTTPException(service, 'invalid role', 403);
      next();
    } catch (error) {
      errorHandler(res, error, service);
    }
  }
}
