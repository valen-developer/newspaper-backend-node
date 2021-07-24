import { Request, Response } from 'express';
import { UserCreator } from '../../../context/User/application/UserCreator';
import { getContainer } from '../../dic/getContainer';
import { UserUsesCases } from '../../dic/userUseCases.injector';
import { Controller } from '../controlles.interface';

export class SignUpController implements Controller {
  public async run(req: Request, res: Response): Promise<void> {
    const { email, name } = req.body;

    try {
      const container = getContainer();
      const userCreator: UserCreator = container.get(UserUsesCases.UserCreator);
    } catch (error) {}
  }
}
