import { IOC } from 'dic-ioc';

export const enum Repositories {
  UserRepository = 'UserRepository',
  NewsRepository = 'NewsRepository',
}

export const setRepositoriesDependencies = (container: IOC): IOC => {
  return container;
};
