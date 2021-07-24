import { IOC } from 'dic-ioc';
import { Bcrypt } from '../../context/shared/infrastructure/bcrypt.crypt';
import { JWT } from '../../context/shared/infrastructure/jwt.JWT';

export const enum UtilDependencies {
  JWT = 'JWT',
  Crypt = 'Crypt',
}

export const utilsDependenciesInjector = (container: IOC): IOC => {
  container.setService(UtilDependencies.JWT, () => new JWT());
  container.setService(UtilDependencies.Crypt, () => new Bcrypt());

  return container;
};
