import { NotNull } from '../../../shared/domain/NotNull';
import { ValueObject } from '../../../shared/domain/valueObjects/valueObject.interface';

export class NewTitle extends NotNull implements ValueObject {
  public readonly value: string;

  constructor(value: string) {
    super();
    this.value = value;

    this.isValid();
  }

  private isValid(): void {
    this.isNull(this.value, 'New title');
  }
}
