import { Request, Response } from 'express';
import { HTTPException } from '../../../context/shared/domain/HTTPException';
import { ICrypt } from '../../../context/shared/domain/interfaces/Crypt.interface';
import { JWT } from '../../../context/shared/infrastructure/jwt.JWT';
import { UserFinder } from '../../../context/User/application/UserFinder';
import { UserUpdater } from '../../../context/User/application/UserUpdater';
import { User } from '../../../context/User/domain/user.model';
import { UserPassword } from '../../../context/User/domain/valueObject/UserPassword.valueObject';
import { errorHandler } from '../../../helpers/errorHandler';
import { enviroment } from '../../config/enviroment';
import { getContainer } from '../../dic/getContainer';
import { UserUsesCases } from '../../dic/userUseCases.injector';
import { UtilDependencies } from '../../dic/utils.injector';
import { Controller } from '../controlles.interface';

const service = 'verify signup controller';

export class SetPasswordController implements Controller {
  public async run(req: Request, res: Response): Promise<void> {
    const { password } = req.body;
    const token = (req.query.token ?? '') as string;

    try {
      // Verify password
      const isValidPassword = UserPassword.isValidPassword(password);
      if (!isValidPassword) {
        throw new HTTPException(service, 'invalid password', 400);
      }

      const container = getContainer();
      const JWT: JWT = container.get(UtilDependencies.JWT);
      const crypt: ICrypt = container.get(UtilDependencies.Crypt);

      const isValidToken = JWT.verify(token, enviroment.token.seed);

      if (!isValidToken) {
        throw new HTTPException(service, 'invalid token', 401);
      }

      const { uuid } = JWT.decode(token, {}) as any;

      const userFinder: UserFinder = container.get(UserUsesCases.UserFinder);
      const user = await userFinder.getUser(uuid);

      const newUser = new User(
        user.uuid.value,
        user.name.value,
        user.email.value,
        crypt.hash(password, 2),
        user.role.value
      );

      const userUpdater: UserUpdater = container.get(UserUsesCases.UserUpdater);
      await userUpdater.update(newUser);

      const sessionToken = JWT.sign({ uuid }, enviroment.token.seed, {
        expiresIn: enviroment.token.expireIn,
      });

      res.json({
        user: newUser.toObjectWithoutPassword(),
        token: sessionToken,
      });
    } catch (error) {
      errorHandler(res, error, 'Verify signup controller');
    }
  }
}
