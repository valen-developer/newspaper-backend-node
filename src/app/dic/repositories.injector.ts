import { IOC } from 'dic-ioc';

export const enum Repositories {
  UserRepository = 'UserRepository',
}

export const setRepositoriesDependencies = (container: IOC): IOC => {
  return container;
};
