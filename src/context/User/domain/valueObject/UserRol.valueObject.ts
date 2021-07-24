import { HTTPException } from '../../../shared/domain/HTTPException';
import { NotNull } from '../../../shared/domain/NotNull';
import { ValueObject } from '../../../shared/domain/valueObjects/valueObject.interface';

export class UserROLE extends NotNull implements ValueObject {
  public readonly value: ROLE;

  constructor(value: ROLE) {
    super();
    this.value = value;

    this.isValid();
  }

  private isValid(): void {
    this.isNull(this.value, 'role');
    this.isValidRole();
  }

  private isValidRole(): void {
    const validRoles: ROLE[] = ['ADMIN_ROLE', 'USER_ROLE'];
    const isValid = validRoles.includes(this.value);

    if (!isValid)
      throw new HTTPException('user role', 'role is not a valid role', 400);
  }
}

export type ROLE = 'ADMIN_ROLE' | 'USER_ROLE';
