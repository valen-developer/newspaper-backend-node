import { Request, Response } from 'express';
import { NewsCreator } from '../../../context/New/application/NewsCreator';
import { New } from '../../../context/New/domain/New.model';
import { errorHandler } from '../../../helpers/errorHandler';
import { getContainer } from '../../dic/getContainer';
import { NewsUsesCases } from '../../dic/newsUsesCases.injector';
import { Controller } from '../controlles.interface';

const service = 'create news controller';

export class CreateNewsController implements Controller {
  public async run(req: Request, res: Response) {
    const { newsUuid, title, description } = req.body;

    try {
      const container = getContainer();
      const newsCreator: NewsCreator = container.get(NewsUsesCases.NewsCreator);

      const news = new New(newsUuid, title, description);
      await newsCreator.create(news);

      res.status(201).json({
        newsUuid,
      });
    } catch (error) {
      errorHandler(res, error, service);
    }
  }
}
