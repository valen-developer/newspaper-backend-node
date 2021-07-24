import { HTTPException } from './HTTPException';

export class NotNull {
  protected isNull(value: any, entity: string): void {
    const isNull = value ? false : true;

    if (isNull)
      throw new HTTPException(entity, `${entity} shouldn´t be null`, 400);
  }
}
