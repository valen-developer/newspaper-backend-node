import { HTTPException } from '../../../shared/domain/HTTPException';
import { NotNull } from '../../../shared/domain/NotNull';
import { ValueObject } from '../../../shared/domain/valueObjects/valueObject.interface';

export class UserName extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super();
    this.value = value;
    this.isNull(value, 'user name');
  }
}
