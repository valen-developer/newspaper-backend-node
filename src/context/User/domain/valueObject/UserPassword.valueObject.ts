import { HTTPException } from '../../../shared/domain/HTTPException';
import { ValueObject } from '../../../shared/domain/valueObjects/valueObject.interface';

export class UserPassword implements ValueObject {
  public readonly value: string | null | undefined;

  constructor(value: string | null | undefined) {
    this.value = value;

    if (value) this.isValid();
  }

  private isValid(): void {
    if (!UserPassword.isValidPassword(this.value ?? '')) {
      throw new HTTPException(
        'user password',
        'user password is not a valid password',
        400
      );
    }
  }

  public static isValidPassword(value: string): boolean {
    if (!value) return false;

    const regExp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))/;
    return regExp.test(value) && value.length >= 8;
  }
}
