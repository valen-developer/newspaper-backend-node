import { IOC } from 'dic-ioc';
import { NewsCreator } from '../../context/New/application/NewsCreator';
import { NewsEliminator } from '../../context/New/application/NewsEliminator';
import { NewsFinder } from '../../context/New/application/NewsFinder';
import { NewsUpdater } from '../../context/New/application/NewsUpdater';
import { Repositories } from './repositories.injector';

export const enum NewsUsesCases {
  NewsCreator = 'NewsCreator',
  NewsUpdater = 'NewsUpdater',
  NewsEliminator = 'NewsEliminator',
  NewsFinder = 'NewsFinder',
}

export const injectNewsUsesCasesDependencies = (container: IOC): IOC => {
  const newsRepository = container.get(Repositories.NewsRepository);

  container.setService(
    NewsUsesCases.NewsCreator,
    () => new NewsCreator(newsRepository)
  );
  container.setService(
    NewsUsesCases.NewsUpdater,
    () => new NewsUpdater(newsRepository)
  );
  container.setService(
    NewsUsesCases.NewsEliminator,
    () => new NewsEliminator(newsRepository)
  );
  container.setService(
    NewsUsesCases.NewsFinder,
    () => new NewsFinder(newsRepository)
  );

  return container;
};
