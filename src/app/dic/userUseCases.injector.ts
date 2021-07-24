import { IOC } from 'dic-ioc';

export const enum UserUsesCases {
  UserCreator = 'UserCreator',
  UserEliminator = 'UserEliminator',
  UserFinder = 'UserFinder',
  UserUpdater = 'UserUpdater',
}

export const setUserUsesCasesDependencies = (container: IOC): IOC => {
  return container;
};
