import { HTTPException } from '../../../shared/domain/HTTPException';
import { ValueObject } from '../../../shared/domain/valueObjects/valueObject.interface';

export class UserPassword implements ValueObject {
  public readonly value: string | null | undefined;

  constructor(value: string | null | undefined) {
    this.value = value;

    if (value) this.isValid();
  }

  private isValid(): void {
    if (this.isValidPassword()) {
      throw new HTTPException(
        'user password',
        'user password is not a valid password',
        400
      );
    }
  }

  public isValidPassword(): boolean {
    if (!this.value) return false;

    const regExp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))/;
    return regExp.test(this.value) && this.value.length >= 8;
  }
}
