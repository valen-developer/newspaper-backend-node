import { IOC } from 'dic-ioc';
import { MongoNewsRepository } from '../../context/New/infrastructure/MongoNewsRepository/MongoNewsRepository';
import { MongoUserRepository } from '../../context/User/infrastructure/MongoUserRepository/MongoUserRepository';

export const enum Repositories {
  UserRepository = 'UserRepository',
  NewsRepository = 'NewsRepository',
}

export const injectRepositories = (container: IOC): IOC => {
  container.setService(
    Repositories.UserRepository,
    () => new MongoUserRepository()
  );
  container.setService(
    Repositories.NewsRepository,
    () => new MongoNewsRepository()
  );

  return container;
};
