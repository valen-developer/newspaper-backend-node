import { HTTPException } from '../HTTPException';
import { NotNull } from '../NotNull';
import { ValueObject } from './valueObject.interface';

export class UUID extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super();
    this.value = value;

    this.isNull(value, 'uuid');
  }
}
