import { IOC } from 'dic-ioc';
import { UserCreator } from '../../context/User/application/UserCreator';
import { UserEliminator } from '../../context/User/application/UserEliminator';
import { UserFinder } from '../../context/User/application/UserFinder';
import { UserUpdater } from '../../context/User/application/UserUpdater';
import { Repositories } from './repositories.injector';

export const enum UserUsesCases {
  UserCreator = 'UserCreator',
  UserEliminator = 'UserEliminator',
  UserFinder = 'UserFinder',
  UserUpdater = 'UserUpdater',
}

export const injectUserUsesCasesDependencies = (container: IOC): IOC => {
  const userRepository = container.get(Repositories.UserRepository);

  container.setService(
    UserUsesCases.UserCreator,
    () => new UserCreator(userRepository)
  );
  container.setService(
    UserUsesCases.UserEliminator,
    () => new UserEliminator(userRepository)
  );
  container.setService(
    UserUsesCases.UserFinder,
    () => new UserFinder(userRepository)
  );
  container.setService(
    UserUsesCases.UserUpdater,
    () => new UserUpdater(userRepository)
  );

  return container;
};
