import { IOC } from 'dic-ioc';
import { Bcrypt } from '../../context/shared/infrastructure/bcrypt.crypt';
import { JWT } from '../../context/shared/infrastructure/jwt.JWT';
import {
  NodeMailer,
  TransporterMailer,
} from '../../context/shared/infrastructure/NodeMailer.Mailer';
import { enviroment } from '../config/enviroment';

export const enum UtilDependencies {
  JWT = 'JWT',
  Crypt = 'Crypt',
  Mailer = 'Mailer',
}

export const injectUtils = (container: IOC): IOC => {
  container.setService(UtilDependencies.JWT, () => new JWT());
  container.setService(UtilDependencies.Crypt, () => new Bcrypt());

  const mailerTransport: TransporterMailer = {
    auth: {
      pass: enviroment.mailer.password,
      user: enviroment.mailer.mail,
    },
    port: Number(enviroment.mailer.port),
    service: 'gmail',
  };
  container.setService(
    UtilDependencies.Mailer,
    () => new NodeMailer(mailerTransport)
  );

  return container;
};
