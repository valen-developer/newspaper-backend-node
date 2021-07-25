import { Request, Response } from 'express-serve-static-core';
import { NewsFinder } from '../../../context/New/application/NewsFinder';
import { UserFinder } from '../../../context/User/application/UserFinder';
import { errorHandler } from '../../../helpers/errorHandler';
import { getContainer } from '../../dic/getContainer';
import { NewsUsesCases } from '../../dic/newsUsesCases.injector';
import { Controller } from '../controlles.interface';

const service = 'Get news controller';

export class GetNewsController implements Controller {
  public async run(req: Request, res: Response) {
    try {
      const container = getContainer();
      const newsFinder: NewsFinder = container.get(NewsUsesCases.NewsFinder);

      const news = (await newsFinder.findAll()).map((n) => n.toObject());

      res.json({
        news,
      });
    } catch (error) {
      errorHandler(res, error, service);
    }
  }
}
