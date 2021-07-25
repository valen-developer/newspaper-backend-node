import { Request, Response } from 'express';
import { HTTPException } from '../../../context/shared/domain/HTTPException';
import { ICrypt } from '../../../context/shared/domain/interfaces/Crypt.interface';
import { JWT } from '../../../context/shared/infrastructure/jwt.JWT';
import { UserFinder } from '../../../context/User/application/UserFinder';
import { errorHandler } from '../../../helpers/errorHandler';
import { enviroment } from '../../config/enviroment';
import { getContainer } from '../../dic/getContainer';
import { UserUsesCases } from '../../dic/userUseCases.injector';
import { UtilDependencies } from '../../dic/utils.injector';
import { Controller } from '../controlles.interface';

const service = 'signin controller';

export class SigninController implements Controller {
  public async run(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const container = getContainer();
      const crypt: ICrypt = container.get(UtilDependencies.Crypt);
      const jwt: JWT = container.get(UtilDependencies.JWT);

      const userFinder: UserFinder = container.get(UserUsesCases.UserFinder);
      const user = await userFinder.getByEmail(email);

      const isValid = crypt.compare(password, user.password.value ?? 'pass');
      if (!isValid)
        throw new HTTPException(service, 'email or password invalid', 401);

      const token = jwt.sign({ uuid: user.uuid.value }, enviroment.token.seed, {
        expiresIn: enviroment.token.expireIn,
      });

      res.json({
        user: user.toObjectWithoutPassword(),
        token,
      });
    } catch (error) {
      errorHandler(res, error, service);
    }
  }
}
