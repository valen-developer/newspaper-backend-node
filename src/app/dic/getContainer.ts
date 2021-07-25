import { IOC } from 'dic-ioc';
import { injectNewsUsesCasesDependencies } from './newsUsesCases.injector';
import { injectRepositories } from './repositories.injector';
import { injectUserUsesCasesDependencies } from './userUseCases.injector';
import { injectUtils } from './utils.injector';

export const getContainer = (): IOC => {
  let container = new IOC();

  container = injectRepositories(container);
  container = injectUtils(container);
  container = injectUserUsesCasesDependencies(container);
  container = injectNewsUsesCasesDependencies(container);

  return container;
};
