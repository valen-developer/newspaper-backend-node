import { IOC } from 'dic-ioc';

export const getContainer = (): IOC => {
  const container = new IOC();

  return container;
};
